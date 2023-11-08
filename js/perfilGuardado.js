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


  if (nombreDeUsuarioSesionAbierta) {
    for (usuarios of usuariosCargadosNuevamente) {
      if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
        usuarioEncontrado = usuarios;
        break;
      }
    }
  };
    

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
password2Input.value=usuarioEncontrado.contraseña;
fechaInput.value=usuarioEncontrado.fechaDeNacimiento;
mailInput.value=usuarioEncontrado.email;

function invertirContraseña(contraseña) {
  const mitadInicial = contraseña.substring(0, contraseña.length / 2);
  const mitadFinal = contraseña.substring(contraseña.length / 2);
  return mitadFinal + mitadInicial;
};

const completarCampos = () => {
  nombre = nombreUsuarioInput.value;
  pass= password1Input.value;
  fecha=fechaInput.value;
  mail = mailInput.value;
};

contraseñaInvertida=usuarioEncontrado.contraseña;

nombreUsuarioInput.addEventListener("keyup", completarCampos);
password1Input.addEventListener("keyup",completarCampos);
fechaInput.addEventListener("keyup",completarCampos);
mailInput.addEventListener("keyup",completarCampos);
password2Input.addEventListener("keyup",()=>{
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
  usuarioEncontrado.nombre=nombre;
  usuarioEncontrado.contraseña=contraseñaInvertida;
  usuarioEncontrado.fechaDeNacimiento=fecha;
  usuarioEncontrado.email=mail;
  localStorage.setItem("nombreDeUsuarioH1",JSON.stringify(usuarioEncontrado.nombre));
  localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargadosNuevamente));
  window.location.href="home.html";

})
