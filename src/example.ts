import puppeteer from "puppeteer";

   (async () => {
     // Запуск браузера
     const browser = await puppeteer.launch();

     // Открытие новой вкладки
     const page = await browser.newPage();

     // Переход на страницу
     await page.goto("https://example.com");

     // Снимок экрана страницы
     await page.screenshot({ path: "../screenshots/example.png" });

     // Вывод заголовка страницы
     const title = await page.title();
     console.log(`Title: ${title}`);

     // Закрытие браузера
     await browser.close();
   })();
// import * as puppeteer from 'puppeteer';

 

// async function example() {

//     const browser = await puppeteer.launch();

//     const page = await browser.newPage();

//     await page.setViewport({ width: 1366, height: 768});

//     await page.goto('https://tools4testing.com/');

//     await page.screenshot({

//         path: 'example.png'

//     });

 

//     await browser.close();

// }

 

// example();