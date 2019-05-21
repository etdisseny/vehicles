//import $ from "jquery";

//tengo que crear la variable car como global, para poder utilizarla en todas las funciones
var car:Car; 



function submitForm(){
    var formulario= <HTMLFormElement>document.getElementById('formCar');  
    //recojo los values del formulario

    var plateValue= (<HTMLInputElement>document.querySelector("#plate")).value;
    var brandValue= (<HTMLInputElement>document.querySelector("#brand")).value;
    var colorValue= (<HTMLInputElement>document.querySelector("#color")).value;
    validationCar(plateValue,brandValue,colorValue);
    
    createCar(plateValue,brandValue,colorValue);

    //aparece un formulario u otro
    var formCar= <HTMLInputElement>document.querySelector("#formCar");
    var formWheel= <HTMLInputElement>document.querySelector("#formWheel");

    if(validationCar(plateValue,brandValue,colorValue)==true){
        formCar.style.display="none";
        formWheel.style.display="block";
    }else{
        formCar.style.display="block";
        formWheel.style.display="none";
    } 
    resetea(formulario);
       
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

    car.wheels=new Array();

    //amb aquest for, poso tots els elements dintre del array car.wheels
   for(let i=0; i<inputBrand.length; i++){
        var brand=(<HTMLInputElement>inputBrand[i]).value;
        var diameter=(<HTMLInputElement>inputDiameter[i]).value;

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


function pintar(elemento:any){
    

    for(let i=0 ; i <elemento.length;i++){
        
        var numElemento= i+1;

       structure2(("RUEDA " + numElemento + ":" ),car.wheels[i].brand);
       structure2(("DIAMETRO " + numElemento + ":"), car.wheels[i].diameter);
        
    }

}



//validamos datos y hacemos aparecer la caja con los datos
function validationCar(element1:string, element2:string, element3:string){
    var boxCar= <HTMLInputElement>document.querySelector(".boxCar");
    if(!element1 || !element2 || !element3){
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display='none';
    }else{
        boxCar.style.display='block';
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

/*function validationWheel(brand:string, diameter:number){
    var boxWheel= <HTMLInputElement>document.querySelector(".boxWheel");
  
    if(!brand || !diameter ){
        alert('Hay que validar todos los campos del formulario');
        boxWheel.style.display='none';   
    }else{
        boxWheel.style.display='block';
        return true;
    }
}*/






//funcion para crear la estructura de los datos
function structure(title:string, element:string){
    var boxInfo = <HTMLInputElement>document.querySelector("#carInfo");
    var parrafo= document.createElement('p');
    var textCar= document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}
//funcion para crear la estructura de los datos
function structure2(title:string, element:any){
    var boxInfo = <HTMLInputElement>document.querySelector("#wheelInfo");
   var parrafo= document.createElement('p');
    var textCar= document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}


function resetea(form:any){
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

