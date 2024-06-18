class apiutils

{


    constructor(apiContext,loginPayload){

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

async createOrder(orderpayload){

    const response={}
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