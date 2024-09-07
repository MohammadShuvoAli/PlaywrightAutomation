const {test, expect} = require('@playwright/test')

test("Homepage Test", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill('Shuvo')
    await page.locator("#loginpassword").fill('Shuvo123')
    await page.locator("//button[.='Log in']").click()

    await page.waitForTimeout(3000)
    await page.close()
})