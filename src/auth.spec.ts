import puppeteer from "puppeteer";

(async () => {
    const browsew = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        product: 'firefox'
    });
    const page = await browsew.newPage();
    await page.goto('https://www.saucedemo.com/')

})()