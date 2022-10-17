const listaUsuarios = [];

function cadastrar(dados) {
    console.log("dados: ", dados);
    retonarListaUsuarios().push(dados);
    return { message: "Usuario cadastrado com sucesso!" };
};

function retonarListaUsuarios() {
    return listaUsuarios;
};

module.exports = {
    cadastrar,
    retonarListaUsuarios
};