let listaEmail = [
    "matteo@hotmail.com",
    "zattini@gmail.com",
    "matteozattini@gmail.com",
    "matteo@gmail.com",
]


for (let i = 0; i < listaEmail.length; i++) {
    console.log(listaEmail[i])
}

let myButton = document.getElementById('btn')
let utenteEmail = document.getElementById("mail")

myButton.addEventListener('click', function() {
    console.log(utenteEmail.value)
    console.log(listaEmail.includes(utenteEmail.value))
})




