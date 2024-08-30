const {test, expect} = require('@playwright/test')

test("Handle Dropdown List", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // select multiple options from dropdown list
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    // Check number of options in dropdown
    const option = await page.locator('#colors option')
    await expect(option).toHaveCount(5)

    // Check number of options in dropdown using JS array
    const options = await page.$$('#colors option')
    console.log("Number of Options in Dropdown List: ", options.length)
    await expect(options.length).toBe(5)

    // Check presence of value in dropdown
    const dropdownContent = await page.locator("#colors").textContent()
    await expect(dropdownContent.includes('White')).toBeTruthy()
    await expect(dropdownContent.includes('Black')).toBeFalsy()

    await page.close()
})