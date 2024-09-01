const {test, expect} = require('@playwright/test')

test("Keyboard Actions", async({page})=>{
    await page.goto("https://www.diffchecker.com")

    // close the popup
    await page.click("button[aria-label='Close modal'] svg")

    // fill the first field
    await page.locator("div[aria-label='Original text input']").fill("Hello Shuvo!!!")

    // Ctrl + A - Select all text
    await page.keyboard.press('Control+A')

    // Ctrl + C - Copy Text
    await page.keyboard.press('Control+C')

    // Press Tab button twice
    await page.keyboard.press('Tab') // open file button
    await page.keyboard.press('Tab') // 2nd input field

    // Ctrl + V - Paste Text
    await page.keyboard.press('Control+V')

    // click on button
    await page.locator("button[type='submit'] span[class='button_textContent__h9hLW']").click()
    // check validation message
    await expect(page.locator(".message-banner_title__SemWX")).toHaveText("The two files are identical")

    await page.waitForTimeout(3000)
    await page.close()
})