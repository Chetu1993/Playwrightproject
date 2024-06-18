const { test, expect, request } = require('@playwright/test')

test("security scenario build test", async ({ page }) => {


    await page.goto("https://rahulshettyacademy.com/client")

    await page.locator("#userEmail").fill("schetankumar123@gmail.com")

    await page.locator("#userPassword").fill("Chetan123$")

    await page.locator("[type='submit']").click()

    await page.waitForLoadState('networkidle')

    console.log(await page.locator(".card-body b").allTextContents())

    await page.locator("[routerlink='/dashboard/myorders']").click()

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=4344jnlk4n343" })
    )
    await page.locator("button:has-text('View')").first().click()

    // await page.pause()

    console.log(await page.getByText('You are not authorize to view').textContent())
    expect(await page.getByText('You are not authorize to view').isVisible()).toBeTruthy()
})