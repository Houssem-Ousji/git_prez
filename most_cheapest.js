const fs = require('fs');

function findCheapestCar(cars) {
    if (!cars || cars.length === 0) {
        return null;
    }

    // Function to clean and parse the price string
    const parsePrice = (price) => {
        return parseFloat(price.replace(/ /g, '').replace('DT', '')) || 0; // Default to 0 if parsing fails
    };

    // Function to filter out cars with invalid prices
    const filterValidPrices = (car) => {
        return !isNaN(parsePrice(car.price));
    };

    // Filter out cars with invalid prices
    const validCars = cars.filter(filterValidPrices);

    // Check if there are valid cars after filtering
    if (validCars.length === 0) {
        return null;
    }

    // Use reduce to find the cheapest car
    return validCars.reduce((cheapestCar, currentCar) => {
        const currentCarPrice = parsePrice(currentCar.price);
        const cheapestPrice = parsePrice(cheapestCar.price);

        return currentCarPrice < cheapestPrice ? currentCar : cheapestCar;
    }, validCars[0]);
}

// Read data from JSON file
const rawData = fs.readFileSync('path/to/your/data.json');
const cars = JSON.parse(rawData);

// Example usage:
const cheapestCar = findCheapestCar(cars);

console.log(cheapestCar);
