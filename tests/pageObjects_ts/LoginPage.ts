import {type Locator,type Page} from '@playwright/test'


export class LoginPage{

page:Page
userEmail:Locator
userPassword:Locator
userSignIn:Locator


constructor(page:Page){

this.page=page

this.userEmail=page.locator("#userEmail")
this.userPassword=page.locator("#userPassword")
this.userSignIn=page.locator("#login")


}


async gotoWeb(){

    await this.page.goto("https://rahulshettyacademy.com/client/")
}


async loginValidation(username:string,password:string){


await this.userEmail.fill(username)
await this.userPassword.fill(password)
await this.userSignIn.click()

}








}

module.exports={LoginPage}