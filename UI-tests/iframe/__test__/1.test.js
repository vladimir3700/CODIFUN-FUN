
const playwright = require('playwright');
jest.setTimeout(12000);
describe('UI test', ()=>{
test('Launch browser', async() =>{
const browser = await playwright.chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://the-internet.herokuapp.com/iframe');
const frames = await page.frames();
const frame1 = frames[0];
console.log(frame1);
//frame1.selectOption('select#colors', 'green');
//frame1.selectOption('select#colors', { label: 'Green' });
//await frame1.waitForSelector('[id=tinymce]');
//await frame1.waitForSelector('[class=large-12 columns]');
//frame.selectOption('select#colors', 'blue');
//await page.waitForSelector('[class=mce-content-body ]');
//page.click('text="Your content goes here."');
//page.fill('text="Your content goes here."','Codifun');
//await page.waitForSelector('#tinymce.mce-content-boty');
//await page.click('#tinymce.mce-content-boty');
//await page.fill('#mce-content-body ', 'Codifun-Codifun');
//const frame_frame = await frame1.$('.mce-content-body ');
//console.log(frame_frame);
await page.waitForTimeout(3000);
await browser.close();
})
})