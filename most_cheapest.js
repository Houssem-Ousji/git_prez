const fs = require('fs');
 
function findCheapestCar(cars) {

    if (!cars || cars.length === 0) {

        return null; // Return null for an empty array or undefined input

    }
 
    return cars.reduce((cheapestCar, currentCar) => {

        const currentCarPrice = parseFloat(currentCar.price.replace(/ /g, '').replace('DT', ''));

        const cheapestPrice = parseFloat(cheapestCar.price.replace(/ /g, '').replace('DT', ''));
 
        return currentCarPrice < cheapestPrice ? currentCar : cheapestCar;

    }, cars[0]);

}
 
// Read data from JSON file

const rawData = fs.readFileSync('path/to/your/data.json');

const cars = JSON.parse(rawData);
 
// Example usage:

const cheapestCar = findCheapestCar(cars);

console.log(cheapestCar);
