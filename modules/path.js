const path = require("path")

// basename <- nome do arquivo
console.log(path.basename(__filename))

// Nome do Diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar objeto Path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos

console.log(path.join(__dirname, "test", "test.html"))



module.exports = path