/* Calcular quantos KM o meu carro faz por litros.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Valor total pago em combustível;
 3 - Distância em KM da viagem;
 */

const precoCombustivel = 4.99;
const valorGastoTotal = 104.24;
const distanciaPercorrida = 283;

const litrosConsumidos = valorGastoTotal / precoCombustivel;
const consumoDeLitrosPorKm = distanciaPercorrida / litrosConsumidos;

console.log(consumoDeLitrosPorKm);