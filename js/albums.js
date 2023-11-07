/*const albumCargados = localStorage.getItem("albums");
const nombreDeUsuarioSesionAbierta = JSON.parse(localStorage.getItem("nombreDeUsuarioH1"));
const usuariosCargadosNuevamente = JSON.parse(localStorage.getItem("usuariosCargados"));
const contenedor = document.querySelector(".contenedor-section");
const iconoFavoritos = document.querySelectorAll(".estrella");
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
      imagen.src =`img/${album.tapaDeAlbum}`;
      let idAlbum=album.nombre;
    
      // Crear la etiqueta <a>
      let enlace = document.createElement("a");
      enlace.href = "musicaSonando.html";
      enlace.appendChild(imagen); // Agregar la etiqueta <img> dentro de <a>
    
      // Crear el botón
      let boton = document.createElement("button");
      boton.innerHTML = '<i class="fa-solid fa-star estrella" ></i>';
      boton.id=idAlbum;
      // Agregar el enlace y el botón al artículo
      articulo.appendChild(enlace);
      articulo.appendChild(boton);
    
      // Agregar el artículo al contenedor
      contenedor.appendChild(articulo);
    }
  }
  */
  
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

    // Crear la etiqueta <a>
    let enlace = document.createElement("a");
    enlace.href = "musicaSonando.html";
    enlace.appendChild(imagen); // Agregar la etiqueta <img> dentro de <a>

    // Crear el botón
    let boton = document.createElement("button");
    boton.innerHTML = '<i class="fa-solid fa-star estrella"></i>';
    boton.id = idAlbum;
    // Agregar el enlace y el botón al artículo
    articulo.appendChild(enlace);
    articulo.appendChild(boton);

    // Agregar el artículo al contenedor
    contenedor.appendChild(articulo);

    // Agregar un controlador de eventos para eliminar el álbum y el artículo
    boton.addEventListener("click", function () {
      // Elimina el álbum de la lista de favoritos
      if (usuarioEncontrado && usuarioEncontrado.albumFavoritos) {
        const albumIndex = usuarioEncontrado.albumFavoritos.findIndex((albumItem) => albumItem.nombre === idAlbum);
        if (albumIndex !== -1) {
          usuarioEncontrado.albumFavoritos.splice(albumIndex, 1);
          usuarioEncontrado.cancionesFavoritas.splice(albumIndex,1);
        }
        // Actualiza el almacenamiento local
        localStorage.setItem("usuariosCargados", JSON.stringify(usuariosCargadosNuevamente));
      }

      // Elimina el artículo del contenedor
      contenedor.removeChild(articulo);
    });
  }
}