'use strict'

let hours;
let locationsArray;
let salesCurve;

initSalesPage();

function initSalesPage(){
    initVars();
    constructLocations();
    initLocations();
    renderAll();
}

function initVars(){
    hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    locationsArray = [];
    salesCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
}

function initLocations(){
    for (let i = 0; i < locationsArray.length; i++){
        locationsArray[i].generateCookieSalesPerHour();
    }
}

function constructLocations() {
    let seattle = new storeLocation('Seattle', 23, 65, 6.3);
    let tokyo = new storeLocation('Tokyo', 3, 24, 1.2);
    let dubai = new storeLocation('Dubai', 11, 38, 3.7);
    let paris = new storeLocation('Paris', 20, 38, 2.3);
    let lima = new storeLocation('Lima', 2, 16, 4.6);
}

function storeLocation(storeName, minCustomers, maxCustomers, averageSale){
    locationsArray.push(this);
    this.name = storeName; 
    this.min = minCustomers;
    this.max = maxCustomers;
    this.avg = averageSale;
    this.cookiesPerHourArray = [];
    this.totalCookiesDay = 0;
    this.customersPerHourArray = [];
    this.getRandomCustomers = function(hour){ 
        return Math.floor(salesCurve[hour] * (Math.random() * (this.max - this.min + 1) + this.min));
    };
    this.generateCookieSalesPerHour = function(){
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers(i);
            this.customersPerHourArray.push(customersThisHour);
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.avg);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            this.totalCookiesDay += totalCookiesThisHour;
        }
    };
    this.renderCookies = function(){
        let locationRow = document.createElement('tr');
        let locationNameCell = document.createElement('th');
        locationNameCell.textContent = this.name;
        locationRow.appendChild(locationNameCell);
        for (let j = 0; j < this.cookiesPerHourArray.length; j++){
            let cookieCell = document.createElement('td');
            cookieCell.textContent = this.cookiesPerHourArray[j];
            locationRow.appendChild(cookieCell);
        }
        let locationTotalCell = document.createElement('tb');
        locationTotalCell.textContent = this.totalCookiesDay;
        locationRow.appendChild(locationTotalCell);
        return locationRow;
    };
    this.locationRowGenerator = function(){
            let locationRow = document.createElement('tr');
            let locationNameCell = document.createElement('th');
            locationNameCell.textContent = this.name;
            locationRow.appendChild(locationNameCell);
            return locationRow;
    };
    this.renderCookies = function(){
        let locationRow = this.locationRowGenerator();
        for (let i = 0; i < this.cookiesPerHourArray.length; i++){
            let cookieCell = document.createElement('td');
            cookieCell.textContent = this.cookiesPerHourArray[i];
            locationRow.appendChild(cookieCell);
        }
        let locationTotalCell = document.createElement('tb');
        locationTotalCell.textContent = this.totalCookiesDay;
        locationRow.appendChild(locationTotalCell);
        return locationRow;
    };
    this.renderStaff = function(){
        let locationRow = this.locationRowGenerator();
        for (let i = 0; i < this.cookiesPerHourArray.length; i++){
            let staff = Math.ceil(this.customersPerHourArray[i] / 20);
            if(staff < 2){
                staff = 2;
            }
            let staffCell = document.createElement('td');
            staffCell.textContent = staff;
            locationRow.appendChild(staffCell);
        }
        return locationRow;
    };
}

function renderAll(){
    let store = document.getElementById('store');
    let cookieh2 = document.createElement('h2');
    cookieh2.textContent = 'Cookies per hour:';
    store.appendChild(cookieh2);
    store.appendChild(generateCookieTable());
    let staffh2 = document.createElement('h2');
    staffh2.textContent = 'Staff needed per hour:';
    store.appendChild(staffh2);
    store.appendChild(generateStaffTable());
}

function generateCookieTable(){
    let table = document.createElement('table');
    table.appendChild(generateCookieTableHead());
    table.appendChild(generateCookieTableBody());
    table.appendChild(generateCookieTableFooter());
    return table;
}

function generateStaffTable(){
    let table = document.createElement('table');
    table.appendChild(generateGenericTableHead());
    table.appendChild(generateStaffTableBody());
    return table;
}

function generateCookieTableHead(){
    let tableHead = generateGenericTableHead();
    let locationTotalTitleCell = document.createElement('th');
    locationTotalTitleCell.textContent = 'Total';
    tableHead.appendChild(locationTotalTitleCell);
    return tableHead;
}

function generateCookieTableBody(){
    let tableBody = document.createElement('tbody');
    for (let i = 0; i < locationsArray.length; i++){
        tableBody.appendChild(locationsArray[i].renderCookies());
    }
    return tableBody;
}

function generateCookieTableFooter(){
    let hourlyTotalRow = document.createElement('tfoot');
    let hourlyTotalTitleCell = document.createElement('th');
    hourlyTotalTitleCell.textContent = 'Total';
    hourlyTotalRow.appendChild(hourlyTotalTitleCell);
    let grandTotal = 0;
    for (let i = 0; i < hours.length; i++){
        let hourlyTotal = 0;
        for (let j = 0; j < locationsArray.length; j++){
            hourlyTotal += locationsArray[j].cookiesPerHourArray[i];
        }
        grandTotal += hourlyTotal;
        let hourlyTotalCell = document.createElement('td');
        hourlyTotalCell.textContent = hourlyTotal;
        hourlyTotalRow.appendChild(hourlyTotalCell);
    }
    let grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal;
    hourlyTotalRow.appendChild(grandTotalCell);
    return hourlyTotalRow;
}

function generateGenericTableHead(){
    let tableHead = document.createElement('thead');
    let blankCell = document.createElement('td');
    tableHead.appendChild(blankCell);
    for (let i = 0; i < hours.length; i++){
        let hourCell = document.createElement('th');
        hourCell.textContent = hours[i];
        tableHead.appendChild(hourCell)
    }
    return tableHead;
}

function generateStaffTableBody(){
    let tableBody = document.createElement('tbody');
    for (let i = 0; i < locationsArray.length; i++){
        tableBody.appendChild(locationsArray[i].renderStaff());
    }
    return tableBody
}