usuarioInput=document.querySelector("#usuario");
contraseñaInput=document.querySelector("#contraseña");
botonIniciarInput=document.querySelector("#botonIniciar");

let nombreUsuario;
let contraseñaUsuario;
let contraseñaInicioSesionInvertida;

const llenarNombreUsuario=()=>{
    nombreUsuario=usuarioInput.value;
   
}

function invertirContraseña(contraseña) {
  const mitadInicial = contraseña.substring(0, contraseña.length / 2);
  const mitadFinal = contraseña.substring(contraseña.length / 2);
  return mitadFinal + mitadInicial;
}

const llenarContraseñaUsuario=()=>{
  contraseñaUsuario=contraseñaInput.value
  contraseñaInicioSesionInvertida=invertirContraseña(contraseñaUsuario);
}

usuarioInput.addEventListener("keyup", llenarNombreUsuario);
contraseñaInput.addEventListener("keyup", llenarContraseñaUsuario);

botonIniciarInput.addEventListener("click",()=>{
      
   
   event.preventDefault();
  
   const usuariosCargados = JSON.parse(localStorage.getItem("usuariosCargados"));
   
   if (usuariosCargados) {
    
     const usuarioEncontrado = usuariosCargados.find((usuario) => {
       return usuario.nombre === nombreUsuario && usuario.contraseña === contraseñaInicioSesionInvertida ;
     });
     
     if (usuarioEncontrado) {
       console.log("Inicio de sesión exitoso");
       usuarioEncontrado.conectado=true;
       localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargados));
       let nombreH1=nombreUsuario;
       console.log(nombreH1);
       localStorage.setItem("nombreDeUsuarioH1",JSON.stringify(nombreH1));
       window.location.href = "home.html";
     } else {
       console.log("Nombre de usuario o contraseña incorrectos");
     }
   } else {
     console.log("No se encontraron usuarios en el almacenamiento local.");
   }
    
})



