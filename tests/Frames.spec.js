const {test, expect} = require('@playwright/test')

test("Handle Frames using name or URL", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // count total number of frames
    const allFrames = await page.frames()
    console.log("Number of frames:", allFrames.length)

    // locating frame using name
    // const frame_1 = await page.frame('FRAME_NAME')

    // locating frame using URL
    const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame_1.fill("input[name='mytext1']", 'Hello, Shuvo!')
    // without using any variable
    // await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}).fill("input[name='mytext1']", 'Hello, Shuvo!')
    
    await page.waitForTimeout(3000)
    await page.close()
})

test("Handle Frames using frame locator", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // count total number of frames
    const allFrames = await page.frames()
    console.log("Number of frames:", allFrames.length)

    // locating frame using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputbox.fill('Hi! Shuvo')

    // without using any variable
    // await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']").fill('Hi! Shuvo')

    await page.waitForTimeout(3000)
    await page.close()
})