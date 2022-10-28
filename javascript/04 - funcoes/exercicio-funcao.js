function escreverMeuNome(nome) {
    return 'Meu nome é ' + nome + '.';
}

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Sou maior de idade.';
    } else {
        return 'Sou menor de idade.';
    }
}

(function () {
    const idade = 17;
    const nome = 'Júnior';

    console.log(escreverMeuNome(nome) + ' ' + verificarIdade(idade));
})();