import {chromium, test} from "@playwright/test"
test("browser controls",async({browser})=>{
    let context= await browser.newContext();
    let page= await context.newPage();
    console.log(await context.cookies());
    await page.goto("https://www.google.com")
    console.log(await context.cookies());
    // console.log(await page.url());
    // console.log(await page.viewportSize());
    // await page.setViewportSize({width:500,height:500})

    // await page.goto("https://www.amazon.in/")
    // console.log(await page.title());
})