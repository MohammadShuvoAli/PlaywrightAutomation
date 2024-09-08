const { test } = require('@playwright/test')

let page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage()

    await page.goto("https://bangladesh.gov.bd/index.php")
})

test('Page Screenshot', async()=>{

})

test('Full Page Screenshot', async()=>{

})

test('Page Element Screenshot', async()=>{

})