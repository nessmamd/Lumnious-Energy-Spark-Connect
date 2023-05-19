const express = require('express')
const app = express()
const path = require('path')

let users = [
    {"email": "nessma@outlook.com", "password": "12345"},
    {"email": "nessmamohdy@luminousenergysolutions.com", "password": "9082posle"},
    {"email": "testemail@email.com", "password": "testinpassword"}
  ];


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req,res) =>{
    res.render('index.ejs') // you can also pass vars like such 
}) //has a request and response varilable and we want to send them somewhere 

app.get('/login', (req,res) =>{
    res.render('login.ejs')
})

app.get('/regi', (req,res) =>{
    res.render('regi.ejs')
})

// app.post('/regi', (req,res)=>{

// })

const values = require('./info.json'); 

app.get('/index', (req,res) =>{
    res.render('index.ejs', {jsonFile : values})
})


app.get('/excel', (req,res) =>{
    res.render('excel.ejs', {jsonFile : values}); 
})

app.get('/excel', (req,res) =>{
    res.render('excel.ejs')
})

app.get('/noaccount', (req,res)=>{
    res.render('noaccount.ejs')
})

app.post('/login', (req,res)  =>{
    let pathsTwo = false; 
    try {
        for(let i = 0; i < users.length; i++){
            if(users[i].email == req.body.email){
                if(users[i].password == req.body.password){
                    res.redirect('/index')
                    console.log(users[i])
                    pathsTwo = false; // remove "let"
                    break;
                }
            }
        }
        if(!pathsTwo){ // check if pathsTwo is still false
            res.redirect('/noaccount')
        }
    } catch(error){
        res.redirect('/noaccount')
    }
})


// app.post('/login', (req,res)  =>{
//     let pathsTwo = false; 
//     try{
//         for(let i = 0; i < users.length; i++){
//             if(users[i].email == req.body.email){
//                 if(users[i].password == req.body.password){
//                     res.redirect('/index')
//                     console.log(users[i])
//                     let pathsTwo = false; 
//                 }
//             }
//             else{
//                 let pathsTwo = true;
//             }
//         }

//         if(pathsTwo == true){
//             res.redirect('/noaccount')
//         }
//     }

//     catch(error){
//         res.redirect('/noaccount')
//         }
// })



app.get('/enter', (req,res) =>{
    res.render('enter.ejs')
})

app.get('/home', (req, res) =>{
    res.render('home.ejs')
})

app.post('/enter', async (req,res) =>{
    let base = false; 
    try{
        for(let i = 0; i < users.length; i++){
            if(users[i].email == req.body.email){
                if(users[i].password == req.body.password){
                    res.redirect('/index')
                    console.log(users[i])
                }
                if(i == users.length-1){
                    let base = true; 
                }
            }
        }
        }
        catch{
            res.redirect('/index')
        }
    }) 

app.listen(3000) //waiting for the connection of the server of 3000 to call on this function