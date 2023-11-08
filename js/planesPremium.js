const premium =document.getElementsByName("premium");
const botonAvanzar=document.querySelector("#avanzar");
const planMensual=JSON.parse(localStorage.getItem("planMensual"));
const planAnual=JSON.parse(localStorage.getItem("planAnual"));
const planDefinitivo=JSON.parse(localStorage.getItem("planDefinitivo"));
const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
const botonCanelar=document.querySelector("#cancelar");

let usuarioEncontrado;

if (nombreDeUsuarioSesionAbierta) {
  for (usuarios of usuariosCargadosNuevamente) {
    if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
      usuarioEncontrado = usuarios;
      break;
    }
  }
}



  botonAvanzar.addEventListener("click",()=>{
    event.preventDefault();
    var seleccionado = false;
  
    for (var i = 0; i < premium.length; i++) {
      if (premium[i].checked) {
        if(premium[i].value===planMensual.nombre){
            usuarioEncontrado.premiumGuardado=planMensual;

        }
        else if(premium[i].value===planAnual.nombre){
            usuarioEncontrado.premiumGuardado=planAnual;
        }
        else if(premium[i].value===planDefinitivo.nombre){
            usuarioEncontrado.premiumGuardado=planDefinitivo;
        }
        seleccionado = true;
        break;
      }
    }
  
    if (!seleccionado) {
      alert("Por favor, seleccione una opción.");
      return false; 
    }
        localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargadosNuevamente));
        window.location.href = "pagar.html";
        return true;
    
   

    
  })

  botonCanelar.addEventListener("click",()=>{
    usuarioEncontrado.premiumGuardado="";
    localStorage.setItem("usuariosCargados",JSON.stringify(usuariosCargadosNuevamente));
  })