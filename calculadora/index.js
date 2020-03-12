 var funcoes = require("./funcoes")
 var n1=5
 var n2=5


const express = require("express"); //importando o modulo express
const app = express(); // criando uma instancia do express
let port=3000

//rota principal
app.get('/', (req,res) => {
    res.send('<h1>Calculadora</h1>'+funcoes.somar(n1,n2))
})

app.listen(port, ()=> {
    console.log('Servidor rodando em http://localhost:${port}')
    console.log('Para derrubar o servidor: ctrl + c');
})

