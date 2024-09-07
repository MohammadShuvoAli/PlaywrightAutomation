const {test, expect} = require('@playwright/test')

test("Homepage Test", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill('shuvo')
    await page.locator("#loginpassword").fill('shuvo123')
    await page.locator("button[onclick='logIn()']").click()

    // Count total products from homepage    
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    // Logout
    await page.locator('#logout2').click()

    await page.waitForTimeout(3000)
    await page.close()
})