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

let spent = 0 //Sumatorio de los gastos
let income = 0 //Sumatorio de los ingresos
let save = 0 //Diferencia entre los ingresos y los gastos

let saveAmount = document.querySelector(".save") //Identifico el sitio donde se actualizará el ahorro
let incomeAmount = document.querySelector(".income") //Identifico el sito donde se actualizará el total de ingresos
let spentAmount = document.querySelector(".spent") //Identifico el sito donde se actualizará el total de gastos

saveAmount.innerHTML = `${save} €`
incomeAmount.innerHTML = `${income} €`
spentAmount.innerHTML = `${spent} €`



function addAMovement(){

    let movementName = document.getElementById("movement-name").value //Consigo el valor del input donde se escribe el nombre del movimiento
    let movementAmount = document.getElementById("movement-amount").value

    let movementContent = `<p>${movementName}: ${movementAmount} €</p>` //Añado el nombre del movimiento al contenido del movimiento

    const movement = document.createElement("article") //Creo un article nuevo

    movement.innerHTML = movementContent //Añado el contenido del movimiento al article creado
    movementList.prepend(movement) //Añado el article a la sección de movimientos
}

function anotherSpent(amountSpent){

}