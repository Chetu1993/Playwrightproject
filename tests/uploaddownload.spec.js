const ExcelJs=require ('exceljs')
const {test,expect}=require('@playwright/test')

async function excelTest(readData,writeData,change,filePath){

    

    const workbook=new ExcelJs.Workbook()

await workbook.xlsx.readFile(filePath)

const worksheet=workbook.getWorksheet('Sheet1')

const output=await readFile(worksheet,readData)

const cell=worksheet.getCell(output.row,output.column+change.columnChange)
cell.value=writeData
await workbook.xlsx.writeFile(filePath)
}

async function readFile(worksheet,readData){

    let output={row:-1,column:-1}

    worksheet.eachRow((row,rowNumber)=>{


        row.eachCell((cell,columnNumber)=>{
    
    if (cell.value===readData)
            output.row=rowNumber
            output.column=columnNumber
        })
    })

return output
}

// excelTest("orange",400,{rowChange:0,columnChange:2},"C:\\Users\\cks_1\\OneDrive\\Documents\\automation.xlsx")


test('uploaddownload',async({page})=>{

    const text="Mango"
    const price=350

await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
const downloadPromise=page.waitForEvent("download")

await page.getByRole("button",{name:"Download"}).click()
await downloadPromise

excelTest(text,price,{rowChange:0,columnChange:2},"C:\\Users\\cks_1\\OneDrive\\Documents\\automation.xlsx")

await page.locator("#fileinput").click()
await page.locator("#fileinput").setInputFiles("C:\\Users\\cks_1\\Downloads\\download.xlsx")

const textlocator=page.getByText(text)
const role=page.getByRole('row').filter({has:textlocator})
await expect(role.locator("#cell-4-undefined")).toContainText(price)


})




















