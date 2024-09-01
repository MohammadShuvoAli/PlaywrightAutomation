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

test.only("Upload Multiple File", async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    
    // wait for the selector
    await page.waitForSelector("#filesToUpload")
    // select multiple file for upload
    await page.locator("#filesToUpload").setInputFiles(['files/test1.pdf', 'files/test2.pdf'])
    
    // verify file upload
    await expect(page.locator("#main > div > p:nth-child(6) > strong")).toHaveText("Files You Selected:")
    
    // verify file names
    await expect(page.locator("ul#fileList>li:nth-child(1)")).toHaveText("test1.pdf")
    await expect(page.locator("ul#fileList>li:nth-child(2)")).toHaveText("test2.pdf")

    await page.waitForTimeout(3000)
    await page.close()
})