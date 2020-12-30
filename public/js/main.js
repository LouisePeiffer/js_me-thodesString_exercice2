let prenom = prompt('Ton prénom?')
//1 Afficher 1ère lettre
alert (`${prenom}`.charAt(0))

//2 Afficher dernière lettre
alert (`${prenom}`.charAt(prenom.length-1))

//3 Afficher prénom sans 1ère lettre
alert (`${prenom}`.substr(1))

//4 2ème lettre en maj
prenom = prenom.toLocaleLowerCase();
// alert (prenom.charAt(0) + prenom.charAt(1).toLocaleLowerCase() + prenom.slice(2));
// OU
// alert (`${prenom.substr(0,1)}${prenom.charAt(1).toUpperCase()}${prenom.substr(2)}`)
let upper = prenom.charAt(1)
alert(prenom.replace(upper, upper.toUpperCase()))

// 5 Lettre au choix en maj
let lettre = prompt('Quelle lettre en majuscule?')
alert (prenom.replace(lettre, lettre.toUpperCase()))

// 6 Peu importe comment prenom écrit, 1ère lettre maj et reste min

//let nom = prompt('Quel est ton nom?')
//alert (`${nom.charAt(0).toUpperCase()}${nom.substr(1)}`)
let firstUpper = prenom.charAt(0)
alert(prenom.replace(first))


// 7
let nbAl = Math.round(Math.random()*prenom.length);
alert(prenom.replace(prenom.charAt(nbAl), ""));