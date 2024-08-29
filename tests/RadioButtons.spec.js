const {test, expect} = require('@playwright/test')

test('Handle Radio Buttons', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)
})