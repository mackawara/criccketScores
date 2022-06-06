const express= require("express")
const app=express()
const dotenv=require("dotenv")
const PORT= process.env.PORT || 5007


app.listen(PORT, ()=> {
    console.log("Server listenting on port "+ PORT)
})
