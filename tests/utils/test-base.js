const base=require('@playwright/test')

exports.customtest = base.test.extend({

testDataForOrder :   {

    username:"schetankumar123@gmail.com",
    password:"Chetan123$",
    productName:"ZARA COAT 3"
    }



})