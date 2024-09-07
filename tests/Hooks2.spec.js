// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all the tests have been run.

const {test, expect} = require('@playwright/test')

let page;

test.beforeAll(async ({browser})=>{
    page = await browser.newPage() // referring to each test page

    await page.goto("https://www.demoblaze.com/index.html")
    // Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill('shuvo')
    await page.locator("#loginpassword").fill('shuvo123')
    await page.locator("button[onclick='logIn()']").click()
})

test.afterAll(async ()=>{
    // Logout
    await page.locator("//a[@id='logout2']").click()
})

test("Homepage Test", async()=>{
    // Count total products from homepage    
    await page.waitForSelector('.hrefch')
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
})

test("Add product to cart", async()=>{
    // Select a product
    await page.locator(".hrefch[href='prod.html?idp_=1']").click()
    // Add product to cart
    await page.locator('#tbodyid > div.row > div > a').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept()
    })
})