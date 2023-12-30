const prompt = require("prompt-sync")();

const NOME = prompt("Digite o nome de seu herói: ");
let XP = prompt("Digite a quantidade de poderes a partir de 1000: ");
let NIVEL = "";

switch (XP) {
  case XP <= 1000:
    NIVEL = "Ferro";
    break;
  case XP <= 2000:
    NIVEL = "Bronze";
    break;
  case XP <= 5000:
    NIVEL = "Prata";
    break;
  case XP <= 7000:
    NIVEL = "Ouro";
    break;
  case XP <= 8000:
    nivel = "Platina";
    break;
  case XP <= 9000:
    NIVEL = "Ascendente";
    break;
  case XP <= 10000:
    NIVEL = "Imortal";
    break;
  default:
    NIVEL = "Radiante";
    break;
}

console.log(`O Herói de nome ${NOME} está no nível de ${NIVEL}`);
