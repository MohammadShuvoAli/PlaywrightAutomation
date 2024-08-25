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
    await expect(page.locator('#gender-female')).not.toBeChecked()

    //expect(locator).toBeChecked() - Checkbox is checked
    await expect(page.locator('#Newsletter')).toBeChecked()

    //expect(locator).toHaveAttribute() - Element has attribute
    const registerButton =  await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    //expect(locator).toHaveText() - Element matches text
    await expect(page.locator('.page-title h1')).toHaveText('Register') // full text
    
    //expect(locator).toContainText() -	Element contains text
    await expect(page.locator('.page-title h1')).toContainText('Reg') // partial text

    //expect(locator).toHaveValue(value) - Input has a value
    await page.locator('#Email').fill('shuvo@gmail.com')
    await expect(page.locator('#Email')).toHaveValue('shuvo@gmail.com')

    //expect(locator).toHaveCount() - List of elements has given length
    const months = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(months).toHaveCount(13)
    
    page.close()
})