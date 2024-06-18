class LoginPage{


constructor(page){

this.page=page

this.userEmail=page.locator("#userEmail")
this.userPassword=page.locator("#userPassword")
this.userSignIn=page.locator("#login")


}


async gotoWeb(){

    await this.page.goto("https://rahulshettyacademy.com/client/")
}


async loginValidation(username,password){


await this.userEmail.fill(username)
await this.userPassword.fill(password)
await this.userSignIn.click()

}








}

module.exports={LoginPage}