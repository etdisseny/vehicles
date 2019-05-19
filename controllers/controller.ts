//import $ from "jquery";

function submitForm(){
   resetea();
    //recojo los values del formulario

    var plateValue= (<HTMLInputElement>document.querySelector("#plate")).value;
    var brandValue= (<HTMLInputElement>document.querySelector("#brand")).value;
    var colorValue= (<HTMLInputElement>document.querySelector("#color")).value;
    validation(plateValue,brandValue,colorValue);
    createCar(plateValue,brandValue,colorValue);

    //aparece un formulario u otro
    var formCar= <HTMLInputElement>document.querySelector("#formCar");
    var formWheel= <HTMLInputElement>document.querySelector("#formWheel");

  /*   if(validation(plateValue,brandValue,colorValue)==true){
        formCar.style.display="none";
        formWheel.style.display="block";
    }else{
        formCar.style.display="block";
        formWheel.style.display="none";
    } */
       
}

function submitFormWheel(){
    
    var inputBrand=document.querySelectorAll(".brand");
    var inputDiameter=document.querySelectorAll(".diameter");
    
   for(let i=0; i<inputBrand.length; i++){
        let brand=(<HTMLInputElement>inputBrand[i]).value;
        let diameter=(<HTMLInputElement>inputDiameter[i]).value;

    }  
}

//validamos datos y hacemos aparecer la caja con los datos
function validation(element1:string, element2:string, element3:string){
    var boxCar= <HTMLInputElement>document.querySelector(".boxCar");
    if(!element1 || !element2 || !element3){
        alert('Hay que validar todos los campos del formulario');
        boxCar.style.display='none';
    }else{
        boxCar.style.display='block';
        return true;
    }
}

//Creo funcion que llama al objeto car y monto la estructura de los datos
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    
    structure("PLATE: ", car.plate);
    structure("BRAND: ", car.brand);
    structure("COLOR: ", car.color);

}



//funcion para crear la estructura de los datos
function structure(title:string, element:string){
    var boxInfo = <HTMLInputElement>document.querySelector("#carInfo");
    var parrafo= document.createElement('p');
    var textCar= document.createTextNode(title + element);
    parrafo.append(textCar);
    boxInfo.append(parrafo);
}


function resetea(){
    var boxInfo = <HTMLInputElement>document.querySelector("#carInfo");
    boxInfo.innerHTML= " ";

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

