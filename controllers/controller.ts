//import $ from "jquery";

//tengo que crear la variable car como global, para poder utilizarla en todas las funciones
var car:Car; 



function submitForm(){
    var formulario= <HTMLFormElement>document.getElementById('formCar');  
    //recojo los values del formulario

    var plateValue= (<HTMLInputElement>document.querySelector("#plate")).value;
    var brandValue= (<HTMLInputElement>document.querySelector("#brand")).value;
    var colorValue= (<HTMLInputElement>document.querySelector("#color")).value;
    
    
    
    

    //aparece un formulario u otro
    var formCar= <HTMLInputElement>document.querySelector("#formCar");
    var formWheel= <HTMLInputElement>document.querySelector("#formWheel");
    var boxCar= <HTMLInputElement>document.querySelector(".boxCar");
    /*var boxCar= <HTMLInputElement>document.querySelector(".boxCar");
    if(!element1 || !element2 || !element3){
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display='none';
    }else{
        boxCar.style.display='block';
        return true;
    }*/

    if(validationCar(plateValue,brandValue,colorValue)==true){
        createCar(plateValue,brandValue,colorValue);
        formCar.style.display="none";
        formWheel.style.display="block";
        boxCar.style.display='block';
        resetea(formulario);
    }else{
        formCar.style.display="block";
        formWheel.style.display="none";
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display='none';
    } 
    
       
}
//Creo funcion que llama al objeto car y monto la estructura de los datos
function createCar(plate:string,brand:string,color:string){
    car=new Car(plate,color,brand);
    
    structure("PLATE: ", car.plate);
    structure("BRAND: ", car.brand);
    structure("COLOR: ", car.color);

}

function submitFormWheel(){
    var formularioWheel= <HTMLFormElement>document.getElementById('formWheel');
    var inputBrand=document.querySelectorAll("input.brandForm");
    var inputDiameter=document.querySelectorAll("input.diameterForm");
    var boxWheel= <HTMLInputElement>document.querySelector(".boxWheel");
    var error=0;

    //declaro el array
    car.wheels=new Array();

    //capturo elements i afegeixo al array car.wheels
   for(let i=0; i<inputBrand.length; i++){
        var brand=(<HTMLInputElement>inputBrand[i]).value;
        var diameter=(<HTMLInputElement>inputDiameter[i]).value;
    //al validar acumulamos errores en una variable o añadimos elemento a array
      if(validationWheel(brand,Number(diameter))==false){
        error++;  
      }else{  
        car.addWheel(new Wheel(Number(diameter),brand));

      }
    
    } 
    
    if(error==0){
        pintar(inputBrand);
        boxWheel.style.display='block';
        resetea(formularioWheel);
     }else{
        alert('Hay que validar todos los campos');
        boxWheel.style.display='none';
     }
    
}

//pintamos ruedas
function pintar(elemento:any){
    for(let i=0 ; i <elemento.length;i++){
        var numElemento= i+1;
       structure2(("RUEDA " + numElemento + ":" ),car.wheels[i].brand);
       structure2(("DIAMETRO " + numElemento + ":"), car.wheels[i].diameter);
        
    }

}



//validamos datos y hacemos aparecer la caja con los datos
function validationCar(plate:string, brand:string, color:string){
    var boxCar= <HTMLInputElement>document.querySelector(".boxCar");
    let checkPlate = new RegExp(/\d{4}[A-Za-z]{3}/);
    let testPlate = checkPlate.test(plate);
    if(!plate || !brand || !color || !testPlate){
        return false;
    }else{
        return true;
    }
}


function validationWheel(brand:string, diameter:number){
    if(!brand || !diameter ){
        return false;
    }else{
        return true;
    }
}

//funcion para crear la estructura de los datos de coche
function structure(title:string, element:string){
    var boxInfo = <HTMLInputElement>document.querySelector("#carInfo");
    var parrafo= document.createElement('p');
    var textCar= document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
//funcion para crear la estructura de los datos de ruedas
function structure2(title:string, element:any){
    var boxInfo = <HTMLInputElement>document.querySelector("#wheelInfo");
    var parrafo= document.createElement('p');
    var textCar= document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}

//llamo al formulario y reseteo
function resetea(form:any){
    form.reset();
}

function validarDiameter(diameter:any){
    if(diameter.value<0.4 || diameter.value >2){
    alert('El diametro no es correcto');
    }
}

function validPlate(plate:any){
    var plate= plate.value;
    var inputPlate=<HTMLInputElement>document.querySelector('#plate');
    var msg=<HTMLInputElement>document.querySelector('.msgError');
   
    let checkPlate = new RegExp(/\d{4}[A-Za-z]{3}/);
    let testPlate = checkPlate.test(plate);
    
    if(!testPlate){
        inputPlate.style.boxShadow = "0 0 0 1px red";
        msg.style.display='block';
        

    }else{
        inputPlate.style.boxShadow = "0 0 0 1px green";
        msg.style.display='none';
    }
}






