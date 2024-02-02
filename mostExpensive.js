const fs = require('fs');
const data = require('./result.json')
function findMostExpensiveCar(cars) {
    return cars.reduce((mostExpensiveCar, currentCar) => {
        const currentCarPrice = parseFloat(currentCar.price.replace(/ /g, '').replace('DT', ''));
        const mostExpensivePrice = parseFloat(mostExpensiveCar.price.replace(/ /g, '').replace('DT', ''));

        return currentCarPrice > mostExpensivePrice ? currentCar : mostExpensiveCar;
    }, cars[0]);
}

// Read data from JSON file

// Example usage:
const mostExpensiveCar = findMostExpensiveCar(data);
console.log(mostExpensiveCar);
