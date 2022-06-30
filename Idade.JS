const nome = prompt("Qual seu nome? ")
const anoN = prompt("Qual ano vocé nasceu? ")

const data = new Date();
const ano = data.getFullYear()

let idade = ano - anoN


console.log(`Olá ${nome}, você tem ${idade}`)
