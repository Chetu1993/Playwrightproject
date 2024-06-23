export class apiutils

{
        apiContext:any
        loginPayload:String
        post:any

    constructor(apiContext: any,loginPayload: String){

        this.apiContext=apiContext
        this.loginPayload=loginPayload
    }
 async   getToken(){


    
        const loginresponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {data:this.loginPayload})

const loginresponsejson=await loginresponse.json()

const token=loginresponsejson.token
console.log(token)
console.log(loginresponse.status())
return token

    }

async createOrder(orderpayload: String){

    const response={token:String,orderId:String}
    response.token=await this.getToken()

    const orderresponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {data:orderpayload,headers:{"Authorization":response.token,"Content-Type":"application/json"}}
    )
    
    const orderresponsejson=await orderresponse.json()
    const orderId=orderresponsejson.orders[0]
    console.log(orderresponse.status())
    response.orderId=orderId
    
    return response
}


}

module.exports={apiutils}