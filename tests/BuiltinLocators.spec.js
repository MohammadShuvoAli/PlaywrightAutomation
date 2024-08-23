const {test, expect} = require('@playwright/test')

test("Built-in Locators", async({page})=>{
    await page.goto("https://google.com/")

    const logo = await page.getByAltText('Your Store')

    await expect(logo).toBeVisible()

    await page.close()

})