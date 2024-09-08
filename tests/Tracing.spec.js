import {test, expect} from '@playwright/test'

test("Tracing", async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator('id=login2').click()
    await page.fill('#loginusername', 'shuvo')
    await page.locator('//*[@id="loginpassword"]').fill('shuvo123')
    await page.fill('//*[@id="loginpassword"]', 'shuvo123')
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
    await page.locator(".hrefch[href='prod.html?idp_=1']").click()
    await page.locator('#tbodyid > div.row > div > a').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        dialog.accept()
    })

    const logoutLink = page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible()
    await page.close()
})
