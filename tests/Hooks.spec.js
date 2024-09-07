const {test, expect} = require('@playwright/test')
const { browser } = require('har-validator')

let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage() // referring to each test page

    await page.goto("https://www.demoblaze.com/index.html")

    // Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill('shuvo')
    await page.locator("#loginpassword").fill('shuvo123')
    await page.locator("button[onclick='logIn()']").click()

})

test.afterEach(async ()=>{
    // Logout
    await page.locator('#logout2').click()
})

test("Homepage Test", async({page})=>{
    // Count total products from homepage    
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    await page.waitForTimeout(3000)
    await page.close()
})

test("Add product to cart", async({page})=>{
    // Select a product
    await page.locator(".hrefch[href='prod.html?idp_=1']").click()

    // Add product to cart
    await page.locator('#tbodyid > div.row > div > a').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept()
    })

    await page.waitForTimeout(3000)
    await page.close()
})