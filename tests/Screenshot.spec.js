const { test } = require('@playwright/test');

let page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage()
    await page.goto("https://bangladesh.gov.bd/index.php")
})

test('Page Screenshot', async()=>{
    // old screenshot will be replaced with new
    await page.screenshot({path: 'tests/Screenshot/' + 'Homepage.png'}) 

    // Adding date stamp for creating unique screenshot name everytime
    await page.screenshot({path: 'tests/Screenshot/' + Date.now() + ' Homepage.png'}) 
})

test('Full Page Screenshot', async()=>{
    // old screenshot will be replaced with new
    await page.screenshot({path: 'tests/Screenshot/' + 'FullPage.png', fullPage:true}) 

    // Adding date stamp for creating unique screenshot name everytime
    await page.screenshot({path: 'tests/Screenshot/' + Date.now() + ' FullPage.png', fullPage:true}) 
})

test.only('Page Element Screenshot', async()=>{
    // old screenshot will be replaced with new
    await page.locator("//div[5]/div[3]").screenshot({path: 'tests/Screenshot/' + 'ElementScreenshot.png'}) 
    
    // Adding date stamp for creating unique screenshot name everytime
    await page.locator("//div[5]/div[3]").screenshot({path: 'tests/Screenshot/' + Date.now() + ' ElementScreenshot.png'})
})