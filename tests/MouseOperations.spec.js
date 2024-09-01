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

test("Mouse Right Click", async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    // right click
    await page.locator(".context-menu-one.btn.btn-neutral").click({button: 'right'})

    await page.waitForTimeout(3000)
    await page.close()
})