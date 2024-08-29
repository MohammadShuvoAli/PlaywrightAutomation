const {test, expect} = require('@playwright/test')

test("Handle Checkboxes", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")

    // single checkbox
    await page.locator("#monday").check()
    await expect(page.locator("#monday")).toBeChecked()
    await expect(page.locator("#monday").isChecked()).toBeTruthy()

    await page.locator("#monday").uncheck()

    // multiple checkboxes
    const checkboxLocators = ["#monday", "#friday", "#wednesday"]

    for(const locator of checkboxLocators){
        await page.locator(locator).check()
    }

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
    }
})