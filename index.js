
const movementList = document.querySelector(".movements") 

let movementId = 0
let moneyId = 0

let spent = 0 
let income = 0 
let save = 0 

let saveAmount = document.querySelector(".save") 
let incomeAmount = document.querySelector(".income") 
let spentAmount = document.querySelector(".spent") 

renderAmounts()

const addAMovementFormElement = document.querySelector("#new-movement-form")

addAMovementFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    movementId += 1
    moneyId += 1

    let movementName = document.getElementById("movement-name") 
    let movementAmount = document.getElementById("movement-amount")

    let movementContent = `<p>${movementName.value}:</p> <p id=money-${moneyId}>${movementAmount.value} €</p> 
                            <button onclick="deleteMovement(${movementId}, ${moneyId})">X Borrar movimiento</button>` 

    const movement = document.createElement("article") 
    movement.setAttribute("id", movementId)

    movement.innerHTML = movementContent 
    movementList.prepend(movement) 

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
        let money = parseFloat(movementAmount)
        income += money
        save += money
    }

    renderAmounts()
}

function deleteMovement(movementId, moneyId) {
    const deletedMovement = document.getElementById(movementId)
    let deletedMoney = document.getElementById("money-"+moneyId).innerHTML
    deletedMoney = deletedMoney.replace("€", "")
    deletedMoney = parseFloat(deletedMoney)
    save -= deletedMoney
    if (deletedMoney < 0) {
        spent += deletedMoney
    }
    else{
        income -= deletedMoney
    }
    deletedMovement.remove()

    renderAmounts()
}

function renderAmounts() {
    saveAmount.innerHTML = `${save} €`
    incomeAmount.innerHTML = `${income} €`
    spentAmount.innerHTML = `${spent} €`
}


//Validar que el form está completo