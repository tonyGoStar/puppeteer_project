import puppeteer from "puppeteer";
// import dotenv from "dotenv";

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        // product: 'firefox',
        args: [
            '--no-sandbox'
        ]
    });

    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    await page.waitForSelector('input[id="user-name"]')
    await page.type('input[id="user-name"]', 'standard_user')
    // await page.waitForSelector('input[id="password"]')
    await page.keyboard.down('Tab')
    await page.keyboard.type('secret_sauce')
    
    await page.keyboard.down('Enter')
    await page.waitForSelector('[data-test="inventory-item-price"]')
    const prices = await page.$$eval('[data-test="inventory-item-price"]', els => els.map(el => parseFloat((el.innerHTML).replace(/[^0-9.-]+/g,"")))) //(els as HTMLElement)

    console.log('[prices]: ', prices)
    browser.close()
})()