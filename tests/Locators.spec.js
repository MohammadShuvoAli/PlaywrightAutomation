import {test, expect} from '@playwright/test'

test("Locators", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // click on login button - property
    await page.locator('id=login2').click() // locator type 1

    // provide username - css locator
    // await page.locator('#loginusername').fill('shuvo')
    await page.fill('#loginusername', 'shuvo')

    // provide password - xpath
    await page.locator('//*[@id="loginpassword"]').fill('shuvo123')
    await page.fill('//*[@id="loginpassword"]', 'shuvo123')

    // click on login button - property
    await page.click('type=button') // locator type 2

    // verify logout link presence - xpath
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible()

    await page.close()
})
