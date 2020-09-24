const playwright = require('playwright');
jest.setTimeout(24000);
describe('UI test', ()=>{
test('Launch browser', async() =>{
const browser = await playwright.chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://bitaps.com/');

//get screenshot 
await page.screenshot({path: 'screenshots/example.png'});
await page.waitForTimeout(3000);

//change size page
await page.setViewportSize({width: 1280, height: 1024});

//get current btc value
await page.waitForSelector('span[id=average_last_dollars]');
const content = await page.textContent('span[id=average_last_dollars]');
console.log("Current BTC value in dollars without cents: " + content);

//get last block
await page.waitForSelector('[id=header_last_block_height]');
const last_block = await page.textContent('[id=header_last_block_height]');
console.log("Number last block: " + last_block);

//for search-box
await page.waitForSelector('[id=search-box]');
const example_bitcoin_transaction = "003e7c18e0176cfd7cdd05ad13a287e3c45bab64ee6fb2c696f3f128111d3ac6";
await page.fill('[id=search-box]', example_bitcoin_transaction);
await page.press('[id=search-box]', 'Enter');

//for web-camera
await page.waitForSelector('div[class=scan-qr]');
await page.click('div[class=scan-qr]');


await page.waitForTimeout(3000);
await browser.close();
})
})