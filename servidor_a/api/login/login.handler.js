function login(dados, listaUsuarios) {
    console.log("dados: ", dados);
    for (let usuario of listaUsuarios) {
        if (usuario.login == dados.login &&  usuario.senha == dados.senha) {
            return true;
        };
    };
    return false;
};

module.exports = {
    login
};