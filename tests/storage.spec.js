const {test,expect,request}=require("@playwright/test")

let productName;
let webContext;
const fakepayload={message:"No Product in Cart"}


test.beforeAll(async({browser})=>{

    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://rahulshettyacademy.com/client/")

    const Email=page.locator("#userEmail")

    const password=page.locator("#userPassword")

    productName="ZARA COAT 3"

    await Email.fill("schetankumar123@gmail.com")

    await password.fill("Chetan123$")

    await page.locator("#login").click()

    await page.waitForTimeout(3000)

    await context.storageState({path:"storage.json"})
    webContext=await browser.newContext({storageState:"storage.json"})



})



test("framework",async()=>{

    const page=await webContext.newPage()

    await page.goto("https://rahulshettyacademy.com/client/")



    await page.waitForTimeout(3000)

    const products=page.locator(".card-body")

    const productNames=await products.locator("b").allTextContents()
    console.log(productNames)

    for(var i=0;i<await products.count();i++){

        const text=await products.locator("b").nth(i).textContent()

        if(text==productName){

            await products.locator("button[class='btn w-10 rounded']").nth(i).click()
            break
        }

    }

   await page.locator("[routerlink='/dashboard/cart']").click()

   await page.locator("(//button[@class='btn btn-primary'])[3]").click()

   await page.locator("[placeholder='Select Country']").pressSequentially("ind")

   const box=page.locator("[class='ta-results list-group ng-star-inserted']")

   await page.waitForTimeout(5000)

   const countries=box.locator("button")

   for(var i=0;i<await countries.count();i++){

    const country=await box.locator("button").nth(i).textContent()

    await page.waitForTimeout(3000)
    if(country===" India"){

        await box.locator("button").nth(i).click()
        break
    }

   }


await page.locator("[class='btnn action__submit ng-star-inserted']").click()

const orderNo=await page.locator("label[class='ng-star-inserted']").textContent()

console.log(orderNo)

await page.locator("button[routerlink='/dashboard/myorders']").click()

await page.locator("tbody").waitFor()

await page.waitForTimeout(3000)

const table=page.locator("tr[class='ng-star-inserted']")

for(var i=0;i<await table.count();i++){

    const order=await table.locator("th").nth(i).textContent()

    if(orderNo.includes(order)){

        await table.nth(i).locator("td button[class='btn btn-primary']").click()
        break

    }

  
}

const finalorder=await page.locator("[class='col-text -main']").textContent()

await expect(orderNo.includes(finalorder)).toBeTruthy()

    await page.pause()



})



test("framework test",async()=>{

    const page=await webContext.newPage()

    await page.goto("https://rahulshettyacademy.com/client/")



    await page.waitForTimeout(3000)

    const products=page.locator(".card-body")

    const productNames=await products.locator("b").allTextContents()
    console.log(productNames)})



