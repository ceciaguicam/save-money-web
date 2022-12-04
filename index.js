/*
### Control de gastos

Necesitamos desarrollar una web que nos ayude a gestionar nuestros ingresos y gastos, con el objetivo de conocer el dinero que tenenos ahorrado.

## Requisitos indispensables
1. La aplicación deberá mostrar en todo momento el total de gastos, ingresos y el dinero total que tenemos ahorrado.
2. Podremos añadir un ingreso o un gasto incluyendo un concepto.
3. Podremos borrar cualquier gasto o ingreso que hayamos introducido.

## Requisitos opcionales
4. Si cerramos la web y volvemos a entrar, tenemos que recuperar todos los gastos e ingresos que habíamos introducido, así como el ahorro total.

## Ejemplo
![Imagen inicial](./example.JPG)
![Gastos introducidos](./example2.JPG)
*/

const movementList = document.querySelector(".movements") //Identifico el sitio donde pintaré los movimientos

let movementId = 0

let spent = 0 //Sumatorio de los gastos
let income = 0 //Sumatorio de los ingresos
let save = 0 //Diferencia entre los ingresos y los gastos

let saveAmount = document.querySelector(".save") //Identifico el sitio donde se actualizará el ahorro
let incomeAmount = document.querySelector(".income") //Identifico el sito donde se actualizará el total de ingresos
let spentAmount = document.querySelector(".spent") //Identifico el sito donde se actualizará el total de gastos

saveAmount.innerHTML = `${save} €`
incomeAmount.innerHTML = `${income} €`
spentAmount.innerHTML = `${spent} €`

const addAMovementFormElement = document.querySelector("#new-movement-form")

addAMovementFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    movementId += 1

    let movementName = document.getElementById("movement-name") //Consigo el valor del input donde se escribe el nombre del movimiento
    let movementAmount = document.getElementById("movement-amount")

    let movementContent = `<article id=${movementId}><p>${movementName.value}: ${movementAmount.value} €</p> <button onclick="deleteMovement(${movementId})">X Borrar movimiento</button></article>` //Añado el nombre del movimiento al contenido del movimiento

    const movement = document.createElement("article") //Creo un article nuevo

    movement.innerHTML = movementContent //Añado el contenido del movimiento al article creado
    movementList.prepend(movement) //Añado el article a la sección de movimientos

    changeAmounts(movementAmount.value)

    movementName.value = ""
    movementAmount.value = ""
})


function changeAmounts(movementAmount){
    
    if (movementAmount.includes("-")){
        let money = parseFloat(movementAmount.replace("-", ""))
        spent += money
        save -= money
    }
    else {
        money = parseFloat(movementAmount)
        income += money
        save += money
    }

    saveAmount.innerHTML = `${save} €`
    incomeAmount.innerHTML = `${income} €`
    spentAmount.innerHTML = `${spent} €`
}

function deleteMovement(movementId) {
    const deletedMovement = document.getElementById(movementId)
    deletedMovement.remove()
}