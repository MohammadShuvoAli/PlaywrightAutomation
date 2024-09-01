const {test, expect} = require('@playwright/test')

test("Upload Single File", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    
    // wait for the selector
    await page.waitForSelector("#file-upload")
    // select file for upload
    await page.locator("#file-upload").setInputFiles('files/test1.pdf')
    // press upload button
    await page.locator("#file-submit").click()

    // verify file upload
    await expect(page.locator("div[class='example'] h3")).toHaveText("File Uploaded!")
    await expect(page.locator("#uploaded-files")).toHaveText("test1.pdf")

    await page.waitForTimeout(3000)
    await page.close()
})