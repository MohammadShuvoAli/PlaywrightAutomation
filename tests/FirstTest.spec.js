const {test, expect} = require('@playwright/test')

test('First Test', async({page})=> {
    await page.goto("https://www.demoblaze.com/index.html")
    
    const pageTitle = await page.title()
    console.log("Page Title:", pageTitle)
    await expect(page).toHaveTitle("STORE")

    const pageURL = await page.url()
    console.log("Page URL:", pageURL)
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")

    await page.close()   
})