const {test,expect,request}=require("@playwright/test")
const{apiutils}=require('./utils1/apiutils')

const loginPayload={userEmail: "schetankumar123@gmail.com", userPassword: "Chetan123$"}
const orderdetails={orders: [{country: "India", productOrderedId: "6581ca979fd99c85e8ee7faf"}]}

let response;


test.beforeAll(async()=>{

const apicontext=await request.newContext()
const Apiutils=new apiutils(apicontext,loginPayload)
response=await Apiutils.createOrder(orderdetails)




})


test("framework",async({page})=>{


    await page.addInitScript(value=>{


        window.localStorage.setItem("token",value)
    },response.token)

    await page.goto("https://rahulshettyacademy.com/client/")


await page.locator("button[routerlink='/dashboard/myorders']").click()

await page.locator("tbody").waitFor()

await page.waitForTimeout(3000)

const table=page.locator("tr[class='ng-star-inserted']")

for(var i=0;i<await table.count();i++){

    const order=await table.locator("th").nth(i).textContent()

    if(response.orderId.includes(order)){

        await table.nth(i).locator("td button[class='btn btn-primary']").click()
        break

    }

  
}

const finalorder=await page.locator("[class='col-text -main']").textContent()

await expect(response.orderId.includes(finalorder)).toBeTruthy()




})


