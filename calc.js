export function substract(a,b){
    return a-b
}

export function add(a,b){
    return a+b;
}

export function mediane(cartesSelectionnees) {
    // Tri de la liste en ordre croissant
    cartesSelectionnees.sort((a, b) => a - b); 
    // Calcul de l'indice médian
    let indiceMediane = Math.floor(cartesSelectionnees.length / 2);
    // On regarde si c'est pair ou impair
    if (cartesSelectionnees.length % 2 === 0) {
        // Liste de taille paire, doit calculer le millieu entre ces deux valeurs
        return (cartesSelectionnees[indiceMediane - 1] + cartesSelectionnees[indiceMediane]) / 2;
    } else {
        // Liste de taille impaire, on retourne la médiane
        return parseInt(cartesSelectionnees[indiceMediane]);
    }
}

export function moyenne(cartesSelectionnees) {
    if (cartesSelectionnees.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < cartesSelectionnees.length; i++) {
        
        sum += parseInt(cartesSelectionnees[i]);
    }
    return Math.round(sum / cartesSelectionnees.length);
}


