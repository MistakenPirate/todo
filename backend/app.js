const express = require("express")
const app = express()

app.use(express.json())

/*
body{
    title:string,
    descrption:string,
}
*/

app.use("/todo",(req,res)=>{

})

app.get("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})


