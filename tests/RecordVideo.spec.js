import {test, expect} from '@playwright/test'

test("Record Test Video", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // click on login button - property
    await page.locator('id=login2').click() // locator type 1

    // provide username - css locator
    // await page.locator('#loginusername').fill('shuvo')
    await page.fill('#loginusername', 'shuvo')

    // provide password - xpath
    await page.locator('//*[@id="loginpassword"]').fill('shuvo123')
    await page.fill('//*[@id="loginpassword"]', 'shuvo123')

    // click on login button - xpath
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    // Select a product
    await page.locator(".hrefch[href='prod.html?idp_=1']").click()
    // Add product to cart
    await page.locator('#tbodyid > div.row > div > a').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept()
    })

    // verify logout link presence - xpath
    const logoutLink = page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible()

    await page.close()
})
