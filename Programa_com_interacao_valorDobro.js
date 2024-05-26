import prompt from 'prompt-sync';


let pergunte = prompt();
console.log('Programa de dobro');

let numero = Number(pergunte());

let dobro = numero*2;

console.log('o dobro é' + dobro); 