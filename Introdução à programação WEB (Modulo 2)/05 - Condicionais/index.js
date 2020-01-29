/* 
    Criar um programa que calcula a média das notas dos alunos e exibe mensagem.
    Estudo de estruturas condicionais.
*/

const aluno01 = 'Mayk';
const notaAluno01 = 9.8;

const aluno02 = "Diego";
const notaAluno02 = 10;

const aluno03 = "Fulano";
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A nota foi de ${media}, Parabéns!`);
} else {
    console.log('A média é menor que 5.')
}