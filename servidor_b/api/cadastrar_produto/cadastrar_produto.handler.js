const fetch = require('node-fetch');
const listaProdutos = [];

async function cadastrar_produto(dados) {
    let loginValido = false;

    const res = await fetch('http://destino:3000/api/login', {
        method: 'post',
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json' },
    });

    loginValido = await res.json();

    if (loginValido) {
        retonarListaProdutos().push(dados);
        return { message: "Sucesso ao inserir o produto!" };
    } else {
        return { error: "Erro ao inserir um produto!" };
    };
};

function retonarListaProdutos() {
    return listaProdutos;
};

module.exports = {
    cadastrar_produto,
    retonarListaProdutos
};