

function classificarHeroi(xp) {
    let classificacao = "";

    if (xp >= 0 && xp <= 1.000) {
        classificacao = "Ferro";
    } else if (xp >= 1.001 && xp <= 2.000) {
        classificacao = "Bronze";
    } else if (xp >= 2.001 && xp <= 5.000) {
        classificacao = "Prata";
    } else if (xp >= 5.001 && xp <= 7.000) {
        classificacao = "Ouro";
    } else if (xp >= 7.001 && xp <= 8.000) {
        classificacao = "Platina";
    } else if (xp >= 8.001 && xp <= 9.000) {
        classificacao = "Ascendente";
    } else if (xp >= 9.001 && xp <= 10.000) {
        classificacao = "Imortal";
    } else {
        classificacao = "Radiante";
    }

    return classificacao;
}

// Exemplo de uso:
let nomeDoHeroi = "Destruidor";
let xpDoHeroi = 10.020;

let nivel = classificarHeroi(xpDoHeroi);

console.log(`O herói de nome ${nomeDoHeroi} tem ${xpDoHeroi} de xp e esta no nível de: ${nivel}`);