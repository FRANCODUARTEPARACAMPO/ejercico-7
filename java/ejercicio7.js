/* 
//ejercicio 1 
function names( ) {
    var nombres = [];
    var cont;

    for ( i = 0; i <= 2; i++ ){

        var x = prompt("justin", "lady gaga");
        nombres[i] = x;
    }
    for (var i = 0; i <= 2; i++) {
        cont += nombres[i] + " ";
    }
    document.getElementById("here").innerHTML = cont;
}
//2

function invertirCadena(cad) {
    return cad;
}
invertirCadena("names");



//Ejercicio 3
var palabras= [arroz, estofado, lasaña , zapallo];
puntos.sort(); // [arroz, estofado, lasaña, zapallo]


//Ejercicio 4
let numbers = [2,4,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50]
/* 
/* /* //Ejercicio 6

function pares(min , max){
    for (let i = min; i <= max; i++) {
        if (i % 2 == 0){
            document.write(i + "<br>")
        }        
    }
}

pares(10, 20) */ 
 
/* // Ejercicio 5
var nombres = ["Juan", "Pepe", "Francisco", "rhyrh", "hrhty"];
nombres = nombres.join(".");
nombres */

//ejercicio prueba 
/* var estudiantes = [
    { nombre :"franco", edad:23 , curso:"bailarin"},
    { nombre : "nahuel", edad :18 , curso: "actor"},
    { nombre:  "valentin" , edad:16 , curso : "animador "} ,
    { nombre : "tamara" , edad:23 , curso : "actriz"} 
]


for(let i = 0; i < estudiantes.length; i++){
    var estudiante = estudiantes[i];
    document.write("nombre: " + estudiante.nombre +", edad: "+ estudiante.edad +  ", curso: " + estudiante.curso + "<br>");
}; */

//ejercicio 8  

/* const usuario ="franco"
const contraseña = "franco1"
var nombre= prompt("mensaje ")
var codigo= prompt( "mensaje2")
function sesion(){
    return (nombre==usuario &&  codigo==contraseña)
}

sesion()




*/
//ejercicio 9

/* var numero1 = parseFloat(prompt("numero"))
var numero2 = parseFloat(prompt ("numero 2"))
if (numero1 - parseInt(numero1) == 0 && numero2 - parseInt(numero2) == 0) {
    alert(numero1+numero2)
    
} else {
    alert("error")
} */

/* //ejercicio 10

var palabra1= parseInt (prompt("ingrese numero"))

  
function flujo (x){
    if (x>10) { 
        x= parseInt (prompt("ingrese numero"))
       if (x>100) {alert("A")
           
       } else { alert("B")
           
       }
     
    } 
    else{
        x= parseInt (prompt("ingrese numero"))
        if (x>1000) {alert("C")
        
           
       } else {alert("D")
           
       }

    } 
 
}
//asi llamo a una funccion 
flujo(palabra1)

    



    







//simpre que ingreses algo: definís variable; pones el igual y luego e/* l prompt  */ 



