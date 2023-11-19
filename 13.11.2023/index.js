const express  = require("express")
const {MongoClient, MongoKerberosError} = require("mongodb")
const test = require("./router.js")
const app = express()
const PORT = 3000;
const url = "mongodb+srv://hugoplewa:Tymek30112005@cluster0.hvdvcw7.mongodb.net/?retryWrites=true&w=majority"
//Tymek30112005 - to hasło mojego kolegi z 8lo do league of legends 
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/kontakt',async(req,res) =>{
    const body = req.body
    console.log(body)
    try {
        const db =  await MongoClient.connect(url)
        const dbo = db.db("KONGOdb")
        console.log("wszystko gucci")
        if(body.imie === "" ){
            console.log("po co imie")
            delete body.imie
            console.log(body)
        } 
        try{
            await dbo.collection("contact").insertOne(body)
        }
        catch(er){
            console.log(er)
        }
        await db.close()
    }
    catch(er) {
        console.log(er)
    }
    res.redirect(302, '/')
})

app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) =>{
    res.sendFile(`${__dirname}/kontakt.html`)
})

app.use('/api',test)

app.listen(PORT, ()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})