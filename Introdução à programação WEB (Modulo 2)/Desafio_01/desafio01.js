/* 
    Resolução do desafio 01 
    - Cálculo de IMC
    - Cálculo de aposentadoria
*/

// Cálculo de IMC
const nome1 = 'Carlos';
const peso = 110;
const altura = 1.78;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome1}, você está acima do peso`);
} else {
    console.log(`${nome1}, você não está acima do peso`);
}

// Cálculo de aposentadoria
const nome2 = "Silvana";
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

if (sexo == 'M' && contribuicao >= 35 || sexo == 'M' && (contribuicao + idade) === 95) {
    console.log(`${nome2}, você pode se aposentar!`);
} else if (sexo === 'F' && contribuicao >= 30 || sexo === 'F' && (contribuicao + idade) === 85) {
    console.log(`${nome2}, você pode se aposentar!`);
} else {
    console.log(`${nome2}, você ainda não pode se aposentar!`);
}