const { test, expect, request } = require("@playwright/test")
const { apiutils } = require('./utils/apiutils')
const loginPayload = { userEmail: "schetankumar123@gmail.com", userPassword: "Chetan123$" }
const orderpayload = { orders: [{ country: "India", productOrderedId: "6581ca979fd99c85e8ee7faf" }] }

const fakePayload = { message: "No Product in Cart" }
let response;


test.beforeAll(async () => {

    const apiContext = await request.newContext()
    const Apiutils = new apiutils(apiContext, loginPayload)
    response = await Apiutils.createOrder(orderpayload)




})


test("webapi", async ({ page }) => {




    page.addInitScript(value => {


        window.localStorage.setItem('token', value)
    }, response.token)






    await page.goto("https://rahulshettyacademy.com/client/")

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {

            const response = await page.request.fetch(route.request())
            let body = JSON.stringify(fakePayload);
            route.fulfill({ response, body })
        }
    )

    await page.locator("button[routerlink='/dashboard/myorders']").click()

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    // await page.pause()

    console.log(await page.getByText('You have No Orders to show at').textContent())



    await expect(page.getByText('You have No Orders to show at').isVisible()).toBeTruthy()



    // await page.locator("tbody").waitFor()

    await page.waitForTimeout(3000)




})