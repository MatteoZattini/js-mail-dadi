let dadoUtente = [
    1,
    2,
    3,
    4,
    5,
    6,
]
console.log(dadoUtente)
// const randomUtente = Math.floor(Math.random() * dadoUtente.length)
// console.log(randomUtente)
let randomUtente = Math.floor( Math.random()*6 );
console.log(dadoUtente[randomUtente])

let dadoComputer = [
    1,
    2,
    3,
    4,
    5,
    6,
]
console.log(dadoComputer)
// const randomComputer = Math.floor(Math.random() * dadoComputer.length)
// console.log(randomComputer)
let randomComputer = Math.floor( Math.random()*6 );
console.log(dadoComputer[randomComputer])

if (randomUtente > randomComputer) {
    console.log("Utente vince")
}
else if (randomUtente < randomComputer) {
    console.log("Computer vince")
}

else if (randomUtente == randomComputer) {
    console.log("Parità")
}