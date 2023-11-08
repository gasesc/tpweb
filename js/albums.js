 const albumCargados = localStorage.getItem("albums");
const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
const contenedor = document.querySelector(".contenedor-section");
let usuarioEncontrado;
let imagen;

if (nombreDeUsuarioSesionAbierta) {
  for (usuarios of usuariosCargadosNuevamente) {
    if (usuarios.nombre === nombreDeUsuarioSesionAbierta) {
      usuarioEncontrado = usuarios;
      break;
    }
  }
}

if (usuarioEncontrado && usuarioEncontrado.albumFavoritos != null) {
  for (const album of usuarioEncontrado.albumFavoritos) {
    let articulo = document.createElement("article");
    imagen = document.createElement("img");
    imagen.src = `img/${album.tapaDeAlbum}`;
    let idAlbum = album.nombre;

    
    let enlace = document.createElement("a");
    enlace.href = "musicaSonando.html";
    enlace.appendChild(imagen); 

    
    let boton = document.createElement("button");
    boton.innerHTML = '<i class="fa-solid fa-star estrella"></i>';
    boton.id = idAlbum;
    
    articulo.appendChild(enlace);
    articulo.appendChild(boton);

   
    contenedor.appendChild(articulo);

    
    boton.addEventListener("click", function () {
      
      if (usuarioEncontrado && usuarioEncontrado.albumFavoritos) {
        const albumIndex = usuarioEncontrado.albumFavoritos.findIndex((albumItem) => albumItem.nombre === idAlbum);
        if (albumIndex !== -1) {
          usuarioEncontrado.albumFavoritos.splice(albumIndex, 1);
          usuarioEncontrado.cancionesFavoritas.splice(albumIndex,1);
        }
       
        localStorage.setItem("usuariosCargados", JSON.stringify(usuariosCargadosNuevamente));
      }

      
      contenedor.removeChild(articulo);
    });
  }
}