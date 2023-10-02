import * as http from 'http'
import {readFile} from 'fs/promises'
const  port = 3000
const host = '127.0.0.1'
const TAB_API = [
    {
        id: 1,
        name: "Sromer"
    },
    {
        id: 2,
        name: "Dydson"
    }
]
   


const server = http.createServer(async(req,res)=> {
    const url = req.url;

    if(url == '/') {
        //res.statusCode = 200

        const api = await JSON.stringify(TAB_API)

        res.setHeader('content-type','application/json');

        
        res.end(api);
    }
    if(url == '/skryba') {
        res.statusCode = 200
        const html = await readFile('index2.html')
        res.setHeader('content-type','text/html')
        res.write(html)
        res.end()
    }

})

server.listen(port, host, () => {
    console.log("Listening...");
})