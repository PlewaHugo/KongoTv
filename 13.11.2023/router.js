const express = require('express')
const router = express.Router()
const {MongoClient, MongoKerberosError} = require("mongodb")
const url = "mongodb+srv://hugoplewa:Tymek30112005@cluster0.hvdvcw7.mongodb.net/?retryWrites=true&w=majority"
router.get('/messages',async(req,res) =>{
    try {
        const db =  await MongoClient.connect(url)
        const dbo = db.db("KONGOdb")
        console.log("wszystko dziala")
        const result = await dbo.collection("contact").find().toArray()
        res.send(result)
    }
    catch(er){
        console.log(er)
    }
})
module.exports=router