const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
const tituloPlan=document.querySelector("#planTitulo");
const contenedorFoto=document.querySelector(".contenedor-foto");
const fotoDefault=document.querySelector("#fotoDefault");
const contenedorDescripcion=document.querySelector("#contenedorDescripcion");
const descripcion=document.querySelector("#descripcion");
const mensajeTarjeta=document.querySelector("#mensajeTarjeta");
const mensajeCvc=document.querySelector("#mensajeCvc");
const inputPagar=document.querySelector("#pagar");
const popUP=document.querySelector("#popUp")
const botonAceptarPopUp=document.querySelector("#aceptar")
let usuarioEncontrado;

if (nombreDeUsuarioSesionAbierta) {
  for (usuarios of usuariosCargadosNuevamente) {
    if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
      usuarioEncontrado = usuarios;
      break;
    }
  }
}

let fraseTerminada=document.createElement("span");
fraseTerminada.textContent= " "+usuarioEncontrado.premiumGuardado.nombre.toUpperCase();
tituloPlan.appendChild(fraseTerminada);
const imagenGuardada=usuarioEncontrado.premiumGuardado.imagenDeplan;
const imagen=document.createElement("img");
imagen.src=`img/${imagenGuardada}`;
contenedorFoto.removeChild(fotoDefault);
contenedorFoto.appendChild(imagen);
contenedorDescripcion.removeChild(descripcion);
let descripcionNueva=document.createElement("p");
descripcionNueva.textContent=usuarioEncontrado.premiumGuardado.descripcion;
contenedorDescripcion.appendChild(descripcionNueva);




function validarNumeroTarjeta() {
  const numeroTarjeta = document.getElementById("tarjeta");
  const numeroTarjetaValue = numeroTarjeta.value;
  const numeroTarjetaPattern = /^[0-9]{16}$/;

  if (numeroTarjetaPattern.test(numeroTarjetaValue)) {
    mensajeTarjeta.classList.remove("mostrarMensaje")
    mensajeTarjeta.classList.add("ocultarMensaje");
  } else {
    mensajeTarjeta.classList.remove("ocultarMensaje")
    mensajeTarjeta.classList.add("mostrarMensaje");
  }
}



function validarCVC() {
  const cvc = document.getElementById("cvc");
  const cvcValue = cvc.value;
  const cvcPattern = /^[0-9]{3}$/;

  if (cvcPattern.test(cvcValue) && cvcValue !== "000" && cvcValue !== "999") {
    mensajeCvc.classList.remove("mostrarMensaje")
    mensajeCvc.classList.add("ocultarMensaje");
  } else {
    mensajeCvc.classList.remove("ocultarMensaje")
    mensajeCvc.classList.add("mostrarMensaje");
  }
}


document.getElementById("tarjeta").addEventListener("keyup", validarNumeroTarjeta);
document.getElementById("cvc").addEventListener("input", validarCVC);

inputPagar.addEventListener("click",()=>{
  event.preventDefault();
  usuarioEncontrado.premium=true;
  localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargadosNuevamente));
  popUP.showModal();
})

botonAceptarPopUp.addEventListener("click",()=>{
  
  if(usuarioEncontrado){
    
    window.location.href="index.html";
  }else{
    window.location.href="inicioSesion.html"
  }
})






