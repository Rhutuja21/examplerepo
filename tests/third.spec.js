import {test} from "@playwright/test"
import { log } from "console";
test("custom waits",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForFunction(()=>{
        return document.readyState==='complete'
    })
    // await page.fill("input#twotabsearchtextbox","hp laptop");
    // await page.waitForFunction(()=>{
    //     let ele=document.querySelectorAll('.s-suggestion-container')
    //     return ele.length>1
    // })
    // let allautosugg= await page.locator(".s-suggestion-container").allTextContents()
    // console.log(allautosugg);
})