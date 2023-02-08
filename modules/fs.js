const fs = require('fs');

const path = require('path')

// fs.mkdir(path.join(__dirname,"/test"),(error)=>{

//         if(error){
//             return console.log('Error:',error)
//         }
//         console.log("Pasta criada com sucesso")


// })

fs.writeFile(
    path.join(__dirname,"/test", "text.txt"),"Hello node !!", (error) =>{
        if(error){
            return console.log("Error: ", error);
        }
        console.log("Arquivo criado com sucesso!")
    }
);

fs.appendFile(path.join(__dirname, "/test","text.txt"), "I come here to work as a programmer ! ", error =>{
    if(error){
        console.log(`Error: ${error}`)
    }
    
    console.log("Conteúdo adicionado com sucesso !")
})

fs.readFile(path.join(__dirname, '/test','text.txt'), 'utf8', (error, data) =>{

    if(error){
        return console.log("Error:",error)
    }
    console.log(data)
})


