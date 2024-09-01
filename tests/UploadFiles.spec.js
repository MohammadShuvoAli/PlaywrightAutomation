const {test, expect} = require('@playwright/test')

test("Upload Single File", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.waitForTimeout(3000)
    await page.close()
})