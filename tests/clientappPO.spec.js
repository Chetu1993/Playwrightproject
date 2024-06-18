const {test}=require("@playwright/test")
const {POmanager}=require('../tests/pageObjects/POmanager')
const {customtest}=require('../tests/utils/test-base')

const dataset=JSON.parse(JSON.stringify(require('./utils/placeorderTestData.json')))



for (let data of dataset){


test(`Client App for login for ${data.productName}`,async({page})=>{


const poManager=new POmanager(page)

 const login=poManager.getLoginpage()
 await login.gotoWeb()
 await login.loginValidation(data.username,data.password)


 const dashboard=poManager.getDashboardpage()
 await dashboard.searchProducts(data.productName)
 await dashboard.NavigateToCart()


 const orderassign=poManager.getorderpage()
 await orderassign.placingOrder()
 await orderassign.finalpage()


})




}


customtest.only("testData",async({page,testDataForOrder})=>{


    const poManager=new POmanager(page)
    
     const login=poManager.getLoginpage()
     await login.gotoWeb()
     await login.loginValidation(testDataForOrder.username,testDataForOrder.password)
    
    
     const dashboard=poManager.getDashboardpage()
     await dashboard.searchProducts(testDataForOrder.productName)
     await dashboard.NavigateToCart()



})



