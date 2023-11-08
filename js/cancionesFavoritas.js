const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
const tablaSection=document.querySelector(".tabla");
let usuarioEncontrado;
let usuarioTemasFavoritos;

if (nombreDeUsuarioSesionAbierta) {
    for (usuarios of usuariosCargadosNuevamente) {
      if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
        usuarioEncontrado = usuarios;
        break;
      }
    }
  }


//   }
for (const listaDeCanciones of usuarioEncontrado.cancionesFavoritas) {
    for (const cancion of listaDeCanciones) {
        let nombre = cancion.nombre;
        let duracion = cancion.duracion;
        let reproducciones = cancion.reproduciones;
        let albumCorrespondiente = cancion.album;
        
    let boton = document.createElement("div");
    boton.className = "celda";
    boton.innerHTML='<a href="musicaSonando.html"><i class="fa-solid fa-play"></i></a>'
  
    
    let nombreCell = document.createElement("div");
    nombreCell.className = "celda";
    nombreCell.textContent = nombre;
    nombreCell.innerHTML+='<button><i class="fa-solid fa-star"></i> </button>';
  
    let albumCell = document.createElement("div");
    albumCell.className = "celda";
    albumCell.textContent = albumCorrespondiente;
    albumCell.innerHTML+='<button><i class="fa-solid fa-star"></i> </button>';
    
    let duracionCell = document.createElement("div");
    duracionCell.className = "celda";
    duracionCell.textContent = duracion;
  
    let reproduccionesCell = document.createElement("div");
    reproduccionesCell.className = "celda";
    reproduccionesCell.textContent = reproducciones;
  
    
    tablaSection.appendChild(boton);
    tablaSection.appendChild(nombreCell);
    tablaSection.appendChild(albumCell);
    tablaSection.appendChild(duracionCell);
    tablaSection.appendChild(reproduccionesCell);


    }
  }

   
  
   
  
 