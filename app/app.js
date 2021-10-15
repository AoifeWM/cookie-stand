'use strict'

const store = document.getElementById('store');
console.log(store);
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

let seattle = {
    minCust: 23,
    maxCust: 65,
    averageSale: 6.3,
    cookiesPerHourArray: [],
    getRandomCustomers: function() { 
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.averageSale);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            //console.log(`hour: ${hours[i]}, customers: ${customersThisHour}, cookies: ${totalCookiesThisHour}`);
        }
        console.log(this.cookiesPerHourArray);
    },
    renderList: function() {
        
        let ulElement = document.createElement('ul');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Seattle Store Sales:';
        store.appendChild(h2Element);
        store.appendChild(ulElement);
        this.getCookieSalesPerHour();
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesPerHourArray.length; i++){
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            ulElement.appendChild(liElement);
            totalCookies += this.cookiesPerHourArray[i];
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${totalCookies} cookies`;
        ulElement.appendChild(liElement);
        store.appendChild(ulElement);
    }
}

let tokyo = {
    minCust: 3,
    maxCust: 24,
    averageSale: 1.2,
    cookiesPerHourArray: [],
    getRandomCustomers: function() { 
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.averageSale);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            //console.log(`hour: ${hours[i]}, customers: ${customersThisHour}, cookies: ${totalCookiesThisHour}`);
        }
        console.log(this.cookiesPerHourArray);
    },
    renderList: function() {
        
        let ulElement = document.createElement('ul');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Tokyo Store Sales:';
        store.appendChild(h2Element);
        store.appendChild(ulElement);
        this.getCookieSalesPerHour();
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesPerHourArray.length; i++){
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            ulElement.appendChild(liElement);
            totalCookies += this.cookiesPerHourArray[i];
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${totalCookies} cookies`;
        ulElement.appendChild(liElement);
        store.appendChild(ulElement);
    }
}

let dubai = {
    minCust: 11,
    maxCust: 38,
    averageSale: 3.7,
    cookiesPerHourArray: [],
    getRandomCustomers: function() { 
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.averageSale);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            //console.log(`hour: ${hours[i]}, customers: ${customersThisHour}, cookies: ${totalCookiesThisHour}`);
        }
        console.log(this.cookiesPerHourArray);
    },
    renderList: function() {
        
        let ulElement = document.createElement('ul');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Dubai Store Sales:';
        store.appendChild(h2Element);
        store.appendChild(ulElement);
        this.getCookieSalesPerHour();
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesPerHourArray.length; i++){
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            ulElement.appendChild(liElement);
            totalCookies += this.cookiesPerHourArray[i];
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${totalCookies} cookies`;
        ulElement.appendChild(liElement);
        store.appendChild(ulElement);
    }
}

let paris = {
    minCust: 20,
    maxCust: 38,
    averageSale: 2.3,
    cookiesPerHourArray: [],
    getRandomCustomers: function() { 
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.averageSale);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            //console.log(`hour: ${hours[i]}, customers: ${customersThisHour}, cookies: ${totalCookiesThisHour}`);
        }
        console.log(this.cookiesPerHourArray);
    },
    renderList: function() {
        
        let ulElement = document.createElement('ul');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Paris Store Sales:';
        store.appendChild(h2Element);
        store.appendChild(ulElement);
        this.getCookieSalesPerHour();
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesPerHourArray.length; i++){
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            ulElement.appendChild(liElement);
            totalCookies += this.cookiesPerHourArray[i];
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${totalCookies} cookies`;
        ulElement.appendChild(liElement);
        store.appendChild(ulElement);
    }
}

let lima = {
    minCust: 2,
    maxCust: 16,
    averageSale: 4.6,
    cookiesPerHourArray: [],
    getRandomCustomers: function() { 
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i <  hours.length; i++){
            let customersThisHour = this.getRandomCustomers();
            let totalCookiesThisHour = Math.ceil(customersThisHour * this.averageSale);
            this.cookiesPerHourArray.push(totalCookiesThisHour);
            //console.log(`hour: ${hours[i]}, customers: ${customersThisHour}, cookies: ${totalCookiesThisHour}`);
        }
        console.log(this.cookiesPerHourArray);
    },
    renderList: function() {
        
        let ulElement = document.createElement('ul');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Lima Store Sales:';
        store.appendChild(h2Element);
        store.appendChild(ulElement);
        this.getCookieSalesPerHour();
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesPerHourArray.length; i++){
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            ulElement.appendChild(liElement);
            totalCookies += this.cookiesPerHourArray[i];
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${totalCookies} cookies`;
        ulElement.appendChild(liElement);
        store.appendChild(ulElement);
    }
}

function renderAllLists() {
    seattle.renderList();
    tokyo.renderList();
    dubai.renderList();
    paris.renderList();
    lima.renderList();
}

renderAllLists();