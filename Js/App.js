// Se llaman los botones de la calculadora y el input del porcentaje personalizado
const botones = document.getElementById("botones")
const  customValue = document.getElementById("custom-value")

//obtener el boton del porcentaje
botones.addEventListener('click', (e) =>{
    var tipPercentage = e.target.innerText
    //ob.classList.add("newclass");
    operation(tipPercentage)
})    

//generar el escuchador de eventos cuando se digite el porcentaje personalizado
customValue.addEventListener('keyup', (e) => {
var  tipPercentage = document.getElementById("custom-value").value
operation(tipPercentage)
})


//realizar la operacion
function operation(tipPercentage){
// se toman los valores que trae el input de la cuenta y de las personas
    const bill = document.getElementById('Bill').value
    const people = document.getElementById('input-people').value
// Se realiza la operacion de la cuenta por el porcentaje asignado y se divide en 100 para que nos indique cuanto corresponde de propina
    totalTip = (bill * tipPercentage) / 100
// Se realiza condicional para validar que el input en personas no esté en blanco y si lo está enviar un mensaje 
    if (people === "") {
        document.getElementById('No-zero').innerHTML = `<p class="Zero-no"> Can't be zero </p>`
    } else {
// Cuando se ingrese la cantidad de personas se borrará el mensaje  y se continuará con la operación
        document.getElementById('No-zero').innerHTML = ``
// se procede a dividir la propona entre las personas
        Tipforpeople = totalTip / people
// Se suma el total de la propina mas el valor y se divide entre las personas
        totalCount = (Number(totalTip) + Number(bill)) / people 
    }
// Se ingresan esos resultador a la funcion inserTotal la cual se verá reflejada en la aplicacion 
    insertTotal(Tipforpeople,totalCount)
}

// Se genera la funcion inserTotal para que inserte los valores en la calculadora 
function insertTotal(Tipforpeople, totalCount){
    document.getElementById('tip-person').innerText = `$${Tipforpeople}`
    document.getElementById('total-persona').innerText = `$${totalCount}`
}
 
// funcion para resetear los valores en la calculadora
function reset(){
    const bill = document.getElementById('Bill').value = ""
    const people = document.getElementById('input-people').value = ""
    tipPercentage = document.getElementById("custom-value").value= ""
    document.getElementById('tip-person').innerText = `$0.00`
    document.getElementById('total-persona').innerText = `$0.00`
    document.getElementById('No-zero').innerHTML = ``

}

