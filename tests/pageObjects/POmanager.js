
const {DashboardPage}=require('./DashboardPage')
const {orderPage}=require('./orderPage')
const{LoginPage}=require('./LoginPage')


class POmanager{

constructor(page){

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