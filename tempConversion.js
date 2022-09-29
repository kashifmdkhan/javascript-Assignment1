function celToFahren(cel){
    let fahr = (9*cel)/5 + 32;
    return fahr;
}

function fahrToCel(fahr){
    let cel = (5*(fahr-32))/9;
    return cel;
}

console.log(celToFahren(60));
console.log(fahrToCel(45));