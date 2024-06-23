
import {expect, type Locator,type Page} from '@playwright/test'
import  {DashboardPage} from '../pageObjects_ts/DashboardPage'
import { orderPage } from '../pageObjects/orderPage'
import { LoginPage } from '../pageObjects_ts/LoginPage'


export class POmanager{


    page:Page
    login:LoginPage
    dashboard:DashboardPage
    orderassign:orderPage
   

constructor(page:any){

    this.page=page
    this.login=new LoginPage(this.page)
    this.dashboard=new DashboardPage(this.page)
    this.orderassign=new orderPage(this.page)

}


getLoginpage(){

    return this.login
}

getDashboardpage(){

    return this.dashboard
}

getorderpage(){

    return this.orderassign
}

}

module.exports={POmanager}