const {test, expect} = require('@playwright/test')

test("Handle Checkboxes", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")

    // single checkbox
    await page.locator("#monday").check()
    await expect(page.locator("#monday")).toBeChecked()
    await expect(page.locator("#monday").isChecked()).toBeTruthy()

})