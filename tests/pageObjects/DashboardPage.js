class DashboardPage{




constructor(page){

    this.page=page
    this.productList=page.locator(".card-body")
    this.allProducts=page.locator(".card-body b")
    this.cart=page.locator("[routerlink='/dashboard/cart']")
}


async searchProducts(ProductName){

    
    await this.page.waitForTimeout(3000)
    const productNames=await this.allProducts.allTextContents()
    
    console.log(productNames)

    await this.page.waitForTimeout(4000)
    const count=await this.productList.count()

    for(var i=0;i<count;i++){

        const text=await this.productList.locator("b").nth(i).textContent()

        if(text==ProductName){

            await this.productList.locator("button[class='btn w-10 rounded']").nth(i).click()
            break
        }

    }


}

async NavigateToCart(){

    await this.cart.click()
}





}

module.exports={DashboardPage}