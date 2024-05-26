import prompt from 'prompt-sync';

let pergunte = prompt();

console.log('Programa de média');

console.log('Informe a nota1:');
let nota1 = Number(pergunte());

console.log('Informe a nota2:');
let nota2 = Number(pergunte());

console.log('Informe a nota3:');
let nota3 = Number(pergunte());

let media = (nota1 + nota2 + nota3) / 3;

console.log('A média das notas é: ${media}');
