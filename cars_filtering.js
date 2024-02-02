const fs = require('fs').promises;

async function loadCars() {
  try {
    const rawData = await fs.readFile('result.json', 'utf8');
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    console.error('Error loading cars:', error);
    throw error;
  }
}

function displayCars(carsList) {
  const carListElement = document.getElementById("carList");

  carListElement.innerHTML = '';

  carsList.forEach(car => {
    const carElement = document.createElement("div");
    carElement.innerHTML = `<img src="${car.img}" alt="${car.name}" />
                            <p>${car.name}</p>
                            <p>${car.price}</p>`;
    carListElement.appendChild(carElement);
  });
}

// Function to filter cars
function filterCars(nameFilter, priceFilter) {
  loadCars().then(cars => {
    const filteredCars = cars.filter(car => {
      const nameMatch = car.name.toLowerCase().includes(nameFilter.toLowerCase());
      const priceMatch = car.price.includes(priceFilter);
      return nameMatch && priceMatch;
    });

    // Display filtered cars
    displayCars(filteredCars);
  }).catch(error => {
    console.error('Error filtering cars:', error);
  });
}