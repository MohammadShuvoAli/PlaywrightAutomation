const {test, expect} = require('@playwright/test')

test('Assertions', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")

    //expect(page).toHaveURL() - Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    //expect(page).toHaveTitle() - Page has title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    //expect(locator).toBeVisible() - Element is visible
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

    //expect(locator).toBeEnabled() - Control is enabled
    await expect(page.locator('#small-searchterms')).toBeEnabled()

    //expect(locator).toBeChecked() - Radio button is checked
    await page.locator('#gender-male').click()
    await expect(page.locator('#gender-male')).toBeChecked()

    //expect(locator).toBeChecked() - Checkbox is checked
    await expect(page.locator('#Newsletter')).toBeChecked()

    //expect(locator).toHaveAttribute() - Element has attribute
    const registerButton =  await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    page.close()
})