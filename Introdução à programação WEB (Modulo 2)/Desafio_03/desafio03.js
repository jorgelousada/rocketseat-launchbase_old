/* 
    Resolução do desafio 03 
    - Usuários e tecnologias
    - Busca por tecnologia
    - Soma de despesas e receitas
*/

// Usuários e tecnologias
const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
];

for (usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`);
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    let usaCSS;
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            usaCSS = true;
        } else {
            usaCSS = false;
        }
    }
    return usaCSS;
}

for (usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);
    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
}

// Soma de despesas e receitas
const usuarios2 = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}

function calculaSaldo(receitas, despesas) {
    let somaReceita = somaNumeros(receitas);
    let somaDespesa = somaNumeros(despesas);
    return somaReceita - somaDespesa;
}

for(usuario of usuarios2){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de R$${saldo}`);
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de R$${saldo}`);
    }
}