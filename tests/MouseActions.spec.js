const {test, expect} = require('@playwright/test')

test("Mouse Hover", async({page})=>{
    await page.goto("https://demo.opencart.com")

    // Mouse Hover
    await page.locator("//a[normalize-space()='Desktops']").hover()
    await page.waitForTimeout(1000)
    await page.locator("//a[normalize-space()='Laptops & Notebooks']").hover()
    await page.waitForTimeout(1000)
    await page.locator("//a[normalize-space()='MP3 Players']").hover()
    await page.waitForTimeout(1000)

    await page.close()
})