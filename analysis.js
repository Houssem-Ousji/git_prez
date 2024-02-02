const fs = require('fs');

const filePath = "result.json";
const rawData = fs.readFileSync(filePath);
const data = JSON.parse(rawData);

function calculateAveragePrice(carData) {
  const totalPrices = carData.reduce((acc, car) => {
    const priceNumeric = parseInt(car.price.replace(/\s/g, ''), 10);
    return acc + priceNumeric;
  }, 0);

  return totalPrices / carData.length;
}

const averagePrice = calculateAveragePrice(data);

const analysisResults = {
  totalCars: data.length,
  averagePrice: averagePrice.toFixed(2),
};

const analysisResultsJSON = JSON.stringify(analysisResults, null, 2);

fs.writeFileSync('analysis_results.json', analysisResultsJSON);

console.log('Analysis results have been written to analysis_results.json');
