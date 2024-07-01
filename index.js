const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage()
    page.goto('https://www.saucedemo.com/')
    page.waitForNetworkIdle({idleTime: 3000})
    // browser.close()
})()