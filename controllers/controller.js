"use strict";
//import $ from "jquery";
//tengo que crear la variable car como global, para poder utilizarla en todas las funciones
var car;
function submitForm() {
    var formulario = document.getElementById('formCar');
    //recojo los values del formulario
    var plateValue = document.querySelector("#plate").value;
    var brandValue = document.querySelector("#brand").value;
    var colorValue = document.querySelector("#color").value;
    //aparece un formulario u otro
    var formCar = document.querySelector("#formCar");
    var formWheel = document.querySelector("#formWheel");
    var boxCar = document.querySelector(".boxCar");
    if (validationCar(plateValue, brandValue, colorValue) == true) {
        createCar(plateValue, brandValue, colorValue);
        formCar.style.display = "none";
        formWheel.style.display = "block";
        boxCar.style.display = 'block';
        resetea(formulario);
    }
    else {
        formCar.style.display = "block";
        formWheel.style.display = "none";
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display = 'none';
    }
}
//Creo funcion que llama al objeto car y monto la estructura de los datos
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    structure("PLATE: ", car.plate);
    structure("BRAND: ", car.brand);
    structure("COLOR: ", car.color);
}
function submitFormWheel() {
    var formularioWheel = document.getElementById('formWheel');
    var inputBrand = document.querySelectorAll("input.brandForm");
    var inputDiameter = document.querySelectorAll("input.diameterForm");
    var boxWheel = document.querySelector(".boxWheel");
    var error = 0;
    //declaro el array
    car.wheels = new Array();
    //capturo elements i afegeixo al array car.wheels
    for (var i = 0; i < inputBrand.length; i++) {
        var brand = inputBrand[i].value;
        var diameter = inputDiameter[i].value;
        //al validar acumulamos errores en una variable o añadimos elemento a array
        if (validationWheel(brand, Number(diameter)) == false) {
            error++;
        }
        else {
            car.addWheel(new Wheel(Number(diameter), brand));
        }
    }
    if (error == 0) {
        pintar(inputBrand);
        boxWheel.style.display = 'block';
        resetea(formularioWheel);
    }
    else {
        alert('Hay que validar todos los campos');
        boxWheel.style.display = 'none';
    }
}
//pintamos ruedas
function pintar(elemento) {
    for (var i = 0; i < elemento.length; i++) {
        var numElemento = i + 1;
        structure2(("RUEDA " + numElemento + ":"), car.wheels[i].brand);
        structure2(("DIAMETRO " + numElemento + ":"), car.wheels[i].diameter);
    }
}
//validamos datos y hacemos aparecer la caja con los datos
function validationCar(plate, brand, color) {
    var boxCar = document.querySelector(".boxCar");
    var checkPlate = new RegExp(/\d{4}[A-Za-z]{3}/);
    var testPlate = checkPlate.test(plate);
    if (!plate || !brand || !color || !testPlate) {
        return false;
    }
    else {
        return true;
    }
}
function validationWheel(brand, diameter) {
    if (!brand || !diameter) {
        return false;
    }
    else {
        return true;
    }
}
//funcion para crear la estructura de los datos de coche
function structure(title, element) {
    var boxInfo = document.querySelector("#carInfo");
    var parrafo = document.createElement('p');
    var textCar = document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
//funcion para crear la estructura de los datos de ruedas
function structure2(title, element) {
    var boxInfo = document.querySelector("#wheelInfo");
    var parrafo = document.createElement('p');
    var textCar = document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
//llamo al formulario y reseteo
function resetea(form) {
    form.reset();
}
function validarDiameter(diameter) {
    if (diameter.value < 0.4 || diameter.value > 2) {
        alert('El diametro no es correcto');
    }
}
function validPlate(plate) {
    var plate = plate.value;
    var inputPlate = document.querySelector('#plate');
    var msg = document.querySelector('.msgError');
    var checkPlate = new RegExp(/\d{4}[A-Za-z]{3}/);
    var testPlate = checkPlate.test(plate);
    if (!testPlate) {
        inputPlate.style.boxShadow = "0 0 0 1px red";
        msg.style.display = 'block';
    }
    else {
        inputPlate.style.boxShadow = "0 0 0 1px green";
        msg.style.display = 'none';
    }
}
