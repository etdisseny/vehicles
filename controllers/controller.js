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
    validationCar(plateValue, brandValue, colorValue);
    createCar(plateValue, brandValue, colorValue);
    //aparece un formulario u otro
    var formCar = document.querySelector("#formCar");
    var formWheel = document.querySelector("#formWheel");
    if (validationCar(plateValue, brandValue, colorValue) == true) {
        formCar.style.display = "none";
        formWheel.style.display = "block";
    }
    else {
        formCar.style.display = "block";
        formWheel.style.display = "none";
    }
    resetea(formulario);
}
//Creo funcion que llama al objeto car y monto la estructura de los datos
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    structure("PLATE: ", car.plate);
    structure("BRAND: ", car.brand);
    structure("COLOR: ", car.color);
}
function submitFormWheel() {
    var formulario = document.getElementById('formWheel');
    var inputBrand = document.querySelectorAll("input.brandForm");
    var inputDiameter = document.querySelectorAll("input.diameterForm");
    for (var i = 0; i < inputBrand.length; i++) {
        var brand = inputBrand[i].value;
        var diameter = inputDiameter[i].value;
        car.addWheel(new Wheel(Number(diameter), brand));
        var numElemento = i + 1;
        structure2(("RUEDA " + numElemento + ":"), car.wheels[i].brand);
        structure2(("DIAMETRO " + numElemento + ":"), car.wheels[i].diameter);
    }
    resetea(formulario);
}
//validamos datos y hacemos aparecer la caja con los datos
function validationCar(element1, element2, element3) {
    var boxCar = document.querySelector(".boxCar");
    if (!element1 || !element2 || !element3) {
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display = 'none';
    }
    else {
        boxCar.style.display = 'block';
        return true;
    }
}
function validationWheel(brand, diameter) {
    var boxWheel = document.querySelector(".boxWheel");
    if (!brand || !diameter) {
        alert('Hay que validar todos los campos del formulario');
        boxWheel.style.display = 'none';
        return false;
    }
    else {
        boxWheel.style.display = 'block';
        return true;
    }
}
//funcion para crear la estructura de los datos
function structure(title, element) {
    var boxInfo = document.querySelector("#carInfo");
    var parrafo = document.createElement('p');
    var textCar = document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
//funcion para crear la estructura de los datos
function structure2(title, element) {
    var boxInfo = document.querySelector("#wheelInfo");
    var parrafo = document.createElement('p');
    var textCar = document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
function resetea(form) {
    form.reset();
}
/* var form= document.querySelectorAll("form input");
  
   for(let i=0; i<form.length; i++){
      (<HTMLInputElement>form[i]).value= " ";
  }  */
/* function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate
    + " COLOR: " +car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);
} */
