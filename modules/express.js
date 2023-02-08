const express = require('express');

const port = 8080;
const app = express()


app.get('/home',(req,res)=>{
    res.contentType('application/html')
    res.status(200).send("<h1> Hello World from express </h1>")
})

app.get('/users',(req,res)=>{
    const users = [
        {nome:"Yan Pereira Prudencio",
        idade:"22",
        email:"naotenhoemail@.com"},

        {nome: "William Ferreira Monteiro",
        idade: "14",
        email: "FerreiraWill@.com"
        }
    ]

    res.status(200).json(users)
})


app.listen(port, ()=>{
    console.log("Running express on port", port)
})