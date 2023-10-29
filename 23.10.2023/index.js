const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const api = [
    {id: 1, name: 'Heatblast', surname: 'Pyronite', email: 'heatblast@omnitrix.com'},
    {id: 2, name: 'Four Arms', surname: 'Tetramand', email: 'fourarms@omnitrix.com'},
    {id: 3, name: 'XLR8', surname: 'Kineceleran', email: 'xlr8@omnitrix.com'},
    {id: 4, name: 'Diamondhead', surname: 'Petrosapien', email: 'diamondhead@omnitrix.com'},
    {id: 5, name: 'Upgrade', surname: 'Galvanic Mechamorph', email: 'upgrade@omnitrix.com'},
    {id: 6, name: 'Ripjaws', surname: 'Piscciss Volann', email: 'ripjaws@omnitrix.com'},
    {id: 7, name: 'Stinkfly', surname: 'Lepidopterran', email: 'stinkfly@omnitrix.com'},
    {id: 8, name: 'Wildvine', surname: 'Florauna', email: 'wildvine@omnitrix.com'},
    {id: 9, name: 'Ghostfreak', surname: 'Ectonurite', email: 'ghostfreak@omnitrix.com'},
    {id: 10, name: 'Grey Matter', surname: 'Galvan', email: 'greymatter@omnitrix.com'},
    {id: 11, name: 'Cannonbolt', surname: 'Arburian Pelarota', email: 'cannonbolt@omnitrix.com'},
    {id: 12, name: 'Wildmutt', surname: 'Vulpimancer', email: 'wildmutt@omnitrix.com'},
    {id: 13, name: 'Ditto', surname: 'Splixson', email: 'ditto@omnitrix.com'},
    {id: 14, name: 'Eye Guy', surname: 'Opticoid', email: 'eyeguy@omnitrix.com'},
    {id: 15, name: 'Way Big', surname: 'To\'kustar', email: 'waybig@omnitrix.com'}
]

const sub = [
    {id: 1, name: 'Matematyka', hoursAWeek: 5},
    {id: 2, name: 'Język angielski', hoursAWeek: 4},
    {id: 3, name: 'Fizyka', hoursAWeek: 3},
    {id: 4, name: 'Chemia', hoursAWeek: 3},
    {id: 5, name: 'Informatyka', hoursAWeek: 4},
    {id: 6, name: 'Historia', hoursAWeek: 2},
    {id: 7, name: 'Wychowanie fizyczne', hoursAWeek: 3},
    {id: 8, name: 'Biologia', hoursAWeek: 3},
    {id: 9, name: 'Sztuka', hoursAWeek: 2},
    {id: 10, name: 'Muzyka', hoursAWeek: 2},
    {id: 11, name: 'Technika', hoursAWeek: 3},
    {id: 12, name: 'Geografia', hoursAWeek: 2},
    {id: 13, name: 'Religia', hoursAWeek: 1},
    {id: 14, name: 'Język hiszpański', hoursAWeek: 3},
    {id: 15, name: 'Etyka', hoursAWeek: 1}
]
app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) => {
    res.sendFile(`${__dirname}/kontakt.html`)
})

app.post('/kontakt',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

router.get('/api',(req,res) => {
    const API =[
        {
            "site":"/api/students- zwraca listę 15 obiektów z parametrami id, name, surname, email"
        },
        {
          "site":"/api/students/:id zwraca studenta z bajki Ben10 lub błąd 404"
        },
        {
          "site":"/api/subjects - zwraca 15 przedmiotów szkolnych parametrami id, name, hoursAWeek "
        },
        {
          "site":"/api/subjects/:id - zwraca przedmiot lub 404"
        }
      ]

    res.end(JSON.stringify(API))
})

router.get('/api/students',(req,res) =>{
    res.send(JSON.stringify(api))
})

router.get('/api/students/:id',(req,res)=> {
    let obj = api
    let help = 0
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].id == req.params.id) {
            res.json(obj[i])
            help = 1
            return 
        }
    }
    if(help == 0) {
        res.statusCode = 404
        res.setHeader('content-type','application/json')
        res.write("Nie znaleziono strony")
        res.end()
    }
})

router.get('/api/subjects',(req,res)=>{
    res.send(JSON.stringify(sub))
})

router.get('/api/subjects/:id',(req,res)=>{
    let obj = sub
    let help = 0
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].id == req.params.id) {
            res.json(obj[i])
            help = 1
            return 
        }
    }
    if(help == 0) {
        res.statusCode = 404
        res.setHeader('content-type','application/json')
        res.write("Nie znaleziono strony")
        res.end()
    }
})

app.use(router);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})