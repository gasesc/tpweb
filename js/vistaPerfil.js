nombreUsuarioInput=document.querySelector("#usuario");
password1Input=document.querySelector("#pass");
password2Input=document.querySelector("#pass2");
fechaInput=document.querySelector("#fecha");
mailInput=document.querySelector("#mail");
botonGuardarInput=document.querySelector("#guardar");
mensajeInteractivo=document.querySelector("#mensajeInteractivo");
botonEliminar=document.querySelector("#eliminar");

let contraseñaInvertida;
let usuariosArray;
let nombreUsuarioIcono;


let nombre;
let pass;
let pass2;
let fecha;
let mail;

class Usuario {
    constructor(nombre, contraseña, fechaDeNacimiento, email) {
      this.nombre = nombre;
      this.contraseña = contraseña;
      this.fechaDeNacimiento = fechaDeNacimiento;
      this.email = email;
      this.conectado=false;
      this.albumFavoritos=[];
      this.cancionesFavoritas=[];
      this.premium=false;
      this.premiumGuardado;
      this.TipoDePremiumPagado;
    }
}

const controlDeUsuarios =()=>{
  if(localStorage.usuariosCargados && localStorage.usuariosCargados !=""){
    usuariosArray = JSON.parse(localStorage.usuariosCargados);
  }
  else{
    usuariosArray=[];
  }
}

const completarCampos = () => {
  nombre = nombreUsuarioInput.value;
  pass= password1Input.value;
  fecha=fechaInput.value;
  mail = mailInput.value;
};

function invertirContraseña(contraseña) {
  const mitadInicial = contraseña.substring(0, contraseña.length / 2);
  const mitadFinal = contraseña.substring(contraseña.length / 2);
  return mitadFinal + mitadInicial;
}

nombreUsuarioInput.addEventListener("input", completarCampos);
password1Input.addEventListener("input",completarCampos);
fechaInput.addEventListener("input",completarCampos);
mailInput.addEventListener("input",completarCampos);
password2Input.addEventListener("input",()=>{
  pass2 = password2Input.value;
  
  if(pass!==pass2){
     mensajeInteractivo.classList.add("mensajeMostrar");
    
  }else{
    mensajeInteractivo.classList.remove("mensajeMostrar");
    mensajeInteractivo.classList.add("mensajeOculto");
    const contraseñaOriginal = password1Input.value;
    contraseñaInvertida = invertirContraseña(contraseñaOriginal);
  }
})

botonGuardarInput.addEventListener("click",()=>{
  event.preventDefault();
    let usuarioNuevo=new Usuario(nombre,contraseñaInvertida,fecha,mail);
    usuariosArray.push(usuarioNuevo);
    localStorage.setItem("usuariosCargados",JSON.stringify(usuariosArray));
    window.location.href="index.html";

});

botonEliminar.addEventListener("click",()=>{
  
  localStorage.removeItem("usuariosCargados");
 
});

controlDeUsuarios();
