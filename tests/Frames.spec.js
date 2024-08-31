const {test, expect} = require('@playwright/test')

test("Alert with OK", async({page})=>{
    await page.goto("")

    
    await page.waitForTimeout(3000)
    await page.close()
})