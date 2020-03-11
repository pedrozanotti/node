// criando um servidor
var http=require("http") //carregando meu módulo http do node
http.createServer(function(requisicao, resposta){
    resposta.end("<h1 style='color:green'>Bem vindo ao meu site! </h1>")
}).listen(3000);
//com isso eu crio um servidor
console.log("Meu servidor está rodando!")
