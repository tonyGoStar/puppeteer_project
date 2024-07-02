import puppeteer from "puppeteer";
// import dotenv from "dotenv";

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
        // product: 'firefox'
    });
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    await page.waitForSelector('input[id="user-name"]')
    await page.type('input[id="user-name"]', 'standard_user')
    // await page.waitForSelector('input[id="password"]')
    await page.keyboard.down('Tab')
    await page.keyboard.type('secret_sauce')
    
    await page.keyboard.down('Enter')
    const prices = await page.$$('data-test="inventory-item-price"')
    console.log(prices)
    browser.close()
    

})()