nombreUsuarioInput=document.querySelector("#usuario");
password1Input=document.querySelector("#pass");
password2Input=document.querySelector("#pass2");
fechaInput=document.querySelector("#fecha");
mailInput=document.querySelector("#mail");
botonGuardarInput=document.querySelector("#guardar");
mensajeInteractivo=document.querySelector("#mensajeInteractivo");
botonEliminar=document.querySelector("#eliminar");

const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
let usuarioEncontrado;

const controlDeUsuarios =()=>{
    if(localStorage.usuariosCargados && localStorage.usuariosCargados !=""){
      usuariosArray = JSON.parse(localStorage.usuariosCargados);
    }
    else{
      usuariosArray=[];
    }
  }
  if (nombreDeUsuarioSesionAbierta) {
    for (usuarios of usuariosCargadosNuevamente) {
      if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
        usuarioEncontrado = usuarios;
        break;
      }
    }
  }
    

let contraseñaInvertida;
let usuariosArray;
let nombreUsuarioIcono;


let nombre;
let pass;
let pass2;
let fecha;
let mail;
nombreUsuarioInput.value=usuarioEncontrado.nombre;
password1Input.value=usuarioEncontrado.contraseña;
fechaInput.value=usuarioEncontrado.fechaDeNacimiento;
mailInput.value=usuarioEncontrado.email;

function invertirContraseña(contraseña) {
  const mitadInicial = contraseña.substring(0, contraseña.length / 2);
  const mitadFinal = contraseña.substring(contraseña.length / 2);
  return mitadFinal + mitadInicial;
}

