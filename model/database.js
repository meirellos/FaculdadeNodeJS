const mongoose = require('mongoose')

try {
    
    const path = "mongodb+srv://meirellos:teste1234@cluster0.7krxglf.mongodb.net/?retryWrites=true&w=majority" //Caminho do servidor do banco.
    mongoose.connect( //Conectando no banco.
        path
    )

    console.log("Conexão com o banco OK")

} catch (e) {
    console.log(e)
}

mongoose.Promise = global.Promise //Promise é quando so pode ir pra baixo(seguir o codigo), quando terminar tudo encima

module.exports = mongoose //Vai pegar a variavel mongoose e jogar pro cliente.