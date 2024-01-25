const { default: puppeteer } = require("puppeteer");
const fs = require('fs');

const url = "https://www.automobile.tn/fr"

fetchProductList = async (url, marque_value) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--start-maximized', // you can also use 
        ]
    })

    const page = await browser.newPage()
    await page.goto(url)

    const marqueButton = await page.waitForSelector(".chosen-container")
    await marqueButton.click()
    await page.type(".chosen-container", marque_value, { delay: 250 })
    await page.keyboard.press('Enter')

    const reserachButton = await page.waitForSelector(("[value='Lancer la recherche']"))
    await reserachButton.click()
    await page.waitForNavigation()


    
    let cars = []
    const displayedCars = await page.$$("[class='versions-item']")
    for (let i = 0; i < displayedCars.length; i++) {
        let car = {
            name: null,
            price: null,
            img: null,
        }
        car.name = await page.evaluate((el) => el.querySelector("h2").innerText, displayedCars[i])
        car.price = await page.evaluate((el) => el.querySelector(".price span").innerText, displayedCars[i])
        car.img = await page.evaluate((el) => el.querySelector("img").getAttribute("src"), displayedCars[i])
        cars.push(car)
    }
    await browser.close()
    return cars
    
}

fetchProductList(url, "fiat").then((data) => {
    if (data.length > 0) {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFile('table.json', jsonData, (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            } else {
                console.log('JSON file created successfully.');
            }
        });
    } else {
        console.log('No data to write to the JSON file.');
    }
});


// The second argument (null) is for replacer function, and the third argument (2) is for indentation level.


