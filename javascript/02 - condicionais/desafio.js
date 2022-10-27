/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em Km da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "Etanol";
const kmPorLitros = 10;
const distanciaDaViagemEmKm = 100;

const litrosConsumidos = distanciaDaViagemEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorViagem = litrosConsumidos * precoEtanol;
  console.log(valorViagem.toFixed(2));
} else if (tipoCombustivel === "Gasolina") {
  const valorViagem = litrosConsumidos * precoGasolina;
  console.log(valorViagem.toFixed(2));
} else {
  console.log("Tipo de combustível inválido!");
}
