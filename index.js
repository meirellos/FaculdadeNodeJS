var express = require("express")

var app = express()
app.use(express.json())

var Cliente = require("./model/client")

//URL 127.0.0.1
//Endpoint: client
//URL 127.0.0.1/client
    /*
        GET => Lista de Clientes cadastrados no banco.
        POST => Inclusão de Cliente.
        PUT => Alteração de Cliente.
        DELETE => Exclusão de Cliente.
    */

app.get("/client", function (req, res) {
    res.send("Lista de Clientes")
})

app.post("/client", async function (req, res) {

    var{nome, documento, cep, cores_fav,  ativo} = req.body

    console.log(nome, documento, cep, cores_fav,  ativo)

    if(cep == undefined){
        res.send("CEP é obrigatório.")
    }else{
        /*
            db.cliente.insert({ nome: "Vinicius Meirelles" }) //Seria assim em mongo.
        */

       var retorno = await Cliente.create({nome, documento, cep, cores_fav, ativo})
       console.log(retorno)

       res.send("Sucesso!")
    }

    //res.send("Inclusão de Clientes")
})

app.put("/client", function (req, res) {
    res.send("Alteração de Cliente")
})

app.delete("/client", function (req, res) {
    res.send("Exclusão de Cliente")
})

app.listen(80, function(req, res) {
    console.log("Servidor online")
})

