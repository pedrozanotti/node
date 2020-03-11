

//criar a identidade do projeto npm init 
//observar que foi criado o arquivo package.json(javascript object notation) que contem informações do projeto
//instalar o framework de node chamado express 
//executar o comando: nmp install express

let express = require('express')
let app = express()
let port = 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})