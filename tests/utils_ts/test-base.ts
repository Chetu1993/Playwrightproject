
import {test as baseTest} from '@playwright/test'

interface testDataForOrder {
    username: string;
    password: string;
    productName: string;
};

export const customTest = baseTest.extend<{testDataForOrder:testDataForOrder}>({


testDataForOrder :   {

    username:"schetankumar123@gmail.com",
    password:"Chetan123$",
    productName:"ZARA COAT 3"
    }



})