import promt from 'prompt-sync';
let pergunte = promt();


console.log('Informe um número:');
let numero1 = Number(pergunte());

console.log('Informe outro número:');
let numero2 = Number(pergunte());

let soma = numero1 + numero2;

console.log('A soma é ' + soma);

