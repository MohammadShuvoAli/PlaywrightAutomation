const {test, expect} = require('@playwright/test')

test("Handle Table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    
    await page.waitForTimeout(3000)
    await page.close()
})
