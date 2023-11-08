usuaioHeader=document.querySelector("#usuarioHeader");
const inicioSesion=document.querySelector(".inicioSesion");

let nombreUsuarioCargado=JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargados = JSON.parse(localStorage.getItem("usuariosCargados"));

if(nombreUsuarioCargado){
    
   for(const usuario of usuariosCargados){
      if(usuario.nombre===nombreUsuarioCargado){
        usuario.conectado=true;
        inicioSesion.textContent="cerrar sesion";
        usuaioHeader.textContent=usuario.nombre;
        break;
      }
   }
    

  }

  inicioSesion.addEventListener("click",()=>{
    
    if(nombreUsuarioCargado){
      event.preventDefault();
      for(const usuario of usuariosCargados){
         if(usuario.nombre===nombreUsuarioCargado){
          
           usuario.conectado=false;
           localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargados));
           inicioSesion.textContent="iniciar sesion";
           usuaioHeader.textContent="nombre de usuario"
           localStorage.removeItem("nombreDeUsuarioH1");
           nombreUsuarioCargado=null;
           window.location.href="index.html"
           break;
         }
      }
       
   
     }
     else {
      
      console.log("entre aca");
       window.location.href="inicioSesion.html";
     
      }

  })