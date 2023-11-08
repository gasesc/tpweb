document.addEventListener("DOMContentLoaded", function () {
    const albumsCargados = JSON.parse(localStorage.getItem("albums"));
    const iconoFavoritos = document.querySelectorAll(".estrella");
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
    }
  
    
    function actualizarInterfaz() {
      iconoFavoritos.forEach(function (icono) {
        let id = icono.getAttribute("id");
        let album = albumsCargados.find((album) => album.nombre === id);
        if (album) {
          if (usuarioEncontrado.albumFavoritos.some((favorito) => favorito.nombre === album.nombre)) {
            icono.classList.remove("fa-regular");
            icono.classList.add("fa-solid");
          } else {
            icono.classList.remove("fa-solid");
            icono.classList.add("fa-regular");
          }
        }
      });
    }
  
    
    actualizarInterfaz();
  
    iconoFavoritos.forEach(function (icono) {
      icono.addEventListener("click", () => {
        let id = icono.getAttribute("id");
        let album = albumsCargados.find((album) => album.nombre === id);
  
        if (album) {
          if (usuarioEncontrado.albumFavoritos.some((favorito) => favorito.nombre === album.nombre)) {
          
            var albumIndex = usuarioEncontrado.albumFavoritos.findIndex((favorito) => favorito.nombre === album.nombre);
            if (albumIndex !== -1) {
              usuarioEncontrado.albumFavoritos.splice(albumIndex, 1);
              usuarioEncontrado.cancionesFavoritas.splice(albumIndex, 1);
            }
          } else {
            
            usuarioEncontrado.albumFavoritos.push(album);
            usuarioEncontrado.cancionesFavoritas.push(album.canciones);
          }
  
         
          actualizarInterfaz();
  
          
          localStorage.setItem("usuariosCargados", JSON.stringify(usuariosCargadosNuevamente));
        }
      });
    });
  });

