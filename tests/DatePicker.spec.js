const {test, expect} = require('@playwright/test')

test("Handle Date Picker", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    await page.locator("#datepicker").fill('09/15/2024') // mm/dd/yyyy
    
    await page.waitForTimeout(5000)
    await page.close()
})