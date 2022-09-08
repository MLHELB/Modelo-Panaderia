
import './estilo.css'
import './normalize1.css'
// Variables

// Mostrar o no menu / agrandar o achicar img
let lista = document.querySelectorAll(".lista");
let logoImagen = document.querySelectorAll(".logo-img")
// ---------------------------------------------------------------------------------------------


// Mostrar img y parrafo nosotros
let cuadroEfecto = document.querySelectorAll(".efecto");

// ---------------------------------------------------------------------------------------------

// Mostrar titulos de izq al centro

let textoEfecto = document.querySelectorAll(".efecto-tit");

// ---------------------------------------------------------------------------------------------

// Slider con textos

const iconoPastel = document.querySelectorAll(".texto-dinamico")
const textoDinamico = document.querySelectorAll(".texto-dinamico-dos")

const contenedorAnimado = document.querySelector("#contenedor-animado");
let  seccionesAnimadas = document.querySelectorAll(".seccion-animada");
let  ultimaSeccionAnimada = seccionesAnimadas[seccionesAnimadas.length -1];



// ---------------------------------------------------------------------------------------------
// Mostrar o no menu
const barra = document.getElementById("btn-menu")
let menuResp = document.querySelector("#menu-resp")
// ---------------------------------------------------------------------------------------------

const enlaces = document.querySelectorAll(".menu-a-responsive") 
// ---------------------------------------------------------------------------------------------

const botonArriba = document.getElementById("boton-arriba");


// Funcionalidades:



// Scroll boton-arriba
botonArriba.addEventListener("click",scrollAriba);


function scrollAriba (){
    let desplazamientoDeScroll = document.documentElement.scrollTop;
    if(desplazamientoDeScroll > 0){
        window.requestAnimationFrame(scrollAriba);  //para que el efecto no sea tan brusco, convertimos la funcion a una animacion.
        window.scrollTo(0, desplazamientoDeScroll -(desplazamientoDeScroll/5)); //mientras por mas lo divida + lento sera el efecto.
    }

}


//Aparece o no el boton
//a medida que hacemos scroll vamos a ejecutar una funcion
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop; // en que posicion esta el scroll
    if( scroll > 300){
        botonArriba.style.transform = "scale(1)";
    }
    else if(scroll < 300){
        botonArriba.style.transform = "scale(0)";
    }
}



// Efecto scroll para efectos nav

function efectoScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < lista.length ; i++){
        let distanciaAltura =  lista[i].offsetTop;
        if(distanciaAltura   < scrollTop){
            lista[i].style.background= "#be8282"
            lista[i].style.transition="all 1s";
            logoImagen[i].style.height = "4em";
            logoImagen[i].style.transition = "all 1s";
        }
        else{
            lista[i].style.background = "none"; 
            lista[i].style.transition="all 1s";
            logoImagen[i].style.height = "6em";
            logoImagen[i].style.transition = "all 1s";
        }
        
    }
}
window.addEventListener("scroll",efectoScroll);

// Efecto scroll para mostrar img y parrafo nosotros

function efectoScrollDos(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < cuadroEfecto.length ; i++){
        let distanciaAltura =  cuadroEfecto[i].offsetTop;
        if(distanciaAltura - 600  < scrollTop){
          cuadroEfecto[i].classList.add("animacion");
        }    
    }
}

window.addEventListener("scroll",efectoScrollDos);


// Efecto scroll para mostrar titulos

function efectoScrollTres(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < textoEfecto.length ; i++){
        let distanciaAltura =  textoEfecto[i].offsetTop;
        if(distanciaAltura - 800  < scrollTop){
            textoEfecto[i].classList.add("animacion");
        }
    }
}

window.addEventListener("scroll",efectoScrollTres);


// Slider con textos

contenedorAnimado.insertAdjacentElement('afterbegin',ultimaSeccionAnimada);

const moverDerecha = ()=>{
    let ultimaSeccionAnimada = document.querySelectorAll(".seccion-animada")[0];
    contenedorAnimado.style.marginLeft= "-200%";
     
for(let i =0;i < iconoPastel.length ; i++){
       iconoPastel[i].style.opacity = 0;
} 
for(let i =0;i < textoDinamico.length ; i++){
    textoDinamico[i].style.opacity = 0;
} 
setTimeout(()=>{
    contenedorAnimado.insertAdjacentElement('beforeend',ultimaSeccionAnimada);
    contenedorAnimado.style.marginLeft="-100%";
    
},3000);


setTimeout(()=>{
    for(let i =0;i < iconoPastel.length ; i++){
        iconoPastel[i].style.opacity = 1
 }
},1500);

setTimeout(()=>{
    for(let i =0;i < textoDinamico.length ; i++){
        textoDinamico[i].style.opacity = 1
 } 
},2000);

}
setInterval(()=>{
    moverDerecha()
},4000);

// Mostrar o no menu

barra.addEventListener("click",()=>{
    menuResp.classList.toggle("active")
})

// Mostrar o no menu al clickear en los a 
for(let a of enlaces){
    a.addEventListener("click",()=>{
        menuResp.classList.toggle("active");
    })
}