import {test} from "@playwright/test"

test("waits",async({page})=>{
    // await page.goto("https://www.amazon.in/")
    // await page.waitForSelector('input#twotabsearchtextbox',{state:"visible"})
    // await page.locator('input#twotabsearchtextbox').fill("fcjsbch")

    await page.locator('input#twotabsearchtextbox').waitFor({state:"visible"})




})