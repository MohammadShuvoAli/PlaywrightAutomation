const {test, expect} = require('@playwright/test')

test("Handle Bootstrap Dropdown", async({page})=>{
    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2")

    await page.locator(".multiselect").click()
    
    const option = await page.locator("ul>li label input")
    await expect(option).toHaveCount(11)

    await page.waitForTimeout(5000)
    await page.close()
})