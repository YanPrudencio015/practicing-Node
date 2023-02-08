const http = require('http')

const port = 8080;

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(220,{'Content-type':'text/html'});
        res.end('<h1>Home Page</h1>')
    }

    if(req.url === '/user'){
        const users = [
            {nome:"Yan Pereira Prudencio",
            idade:"22",
            email:"naotenhoemail@.com"},

            {nome: "William Ferreira Monteiro",
            idade: "14",
            email: "FerreiraWill@.com"
            }
        ]

        res.writeHead(200,{"Content-type":"text/html"});
        res.end(JSON.stringify(users))
    }
})




server.listen(port, ()=>{console.log(`Server running on port ${port}`)})