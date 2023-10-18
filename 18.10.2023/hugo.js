const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('Public'));

app.get('/',(req,res)=>{
    res.send("<h1>Strona główna</h1>")
})

app.get('/kontakt',(req,res)=>{
    res.sendFile(path.join(__dirname,"./kontakt.html"))
})
app.listen(port,()=>{
    console.log('Example app listening on port'+ port)
})