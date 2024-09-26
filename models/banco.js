const Sequelize = require("sequelize")
const Cliente = require("./post")
const sequelize = new Sequelize(
    "test",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

sequelize.authenticate().then(function () {
    console.log("conectado")
}).catch(function (erro) {
    console.log("falha ao se conectar: " + erro)
});

// Cliente.create({
//     nome: "Beatriz",
//     endereco: "Rua alguma coisa",
//     bairro: "Chabilandia",
//     cep: "55555555",
//     cidade: "Sao Paulo",
//     estado: "SP"
// });



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

