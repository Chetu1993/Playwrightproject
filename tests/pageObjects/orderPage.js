class orderPage{


    constructor(page){

        this.page=page
        this.button=page.locator("(//button[@class='btn btn-primary'])[3]")
        this.country=page.locator("[placeholder='Select Country']")
        this.frame=page.locator("[class='ta-results list-group ng-star-inserted']")
        this.placeorder=page.locator("[class='btnn action__submit ng-star-inserted']")
        this.myOrders=page.locator("button[routerlink='/dashboard/myorders']")
        this.table=page.locator("tr[class='ng-star-inserted']")
        this.tbody=this.page.locator("tbody")
    }


    async placingOrder(){


        await this.button.click()
    
       await this.country.pressSequentially("ind")
    
       const box=this.frame
    
       await this.page.waitForTimeout(5000)
    
       const countries=box.locator("button")
    
       for(var i=0;i<await countries.count();i++){
    
        const country=await box.locator("button").nth(i).textContent()
    
        await this.page.waitForTimeout(3000)
        if(country===" India"){
    
            await box.locator("button").nth(i).click()
            break
        }
    
       }
    
    
    await this.placeorder.click()
    
    

}



async finalpage(){


    const orderNo=await this.page.locator("label[class='ng-star-inserted']").textContent()
    
    await this.myOrders.click()
    
    await this.tbody.waitFor()
    
    const table=this.table
    
    for(var i=0;i<await table.count();i++){
    
        const order=await table.locator("th").nth(i).textContent()

    
        if(orderNo.includes(order)){
    
            await table.nth(i).locator("td button[class='btn btn-primary']").click()
            break
    
        }
    
      
    }
    
    

    
        
    }
    
}




module.exports={orderPage}