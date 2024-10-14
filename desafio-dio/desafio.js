let nomeHeroi = 'JvlimaPaladino';
let xpHeroi = 10001;

if(xpHeroi <= 1000) {
    console.log('Ferro');
    xpHeroi = 'Ferro';
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log('Bronze');
    xpHeroi = 'Bronze';
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log('Prata');
    xpHeroi = 'Prata';
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log('Ouro');
    xpHeroi = 'Ouro';
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log('Platina');
    xpHeroi = 'Platina';
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log('Ascendente');
    xpHeroi = 'Ascendente';
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log('Imortal');
    xpHeroi = 'Imortal';
} else {
    console.log('Radiante');
    xpHeroi = 'Radiante';
} 

console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi}`);
