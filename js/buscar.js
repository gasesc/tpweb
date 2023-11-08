// Espera a que se cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el campo de búsqueda
    const buscarInput = document.getElementById("buscar");
  
    // Agrega un evento input al campo de búsqueda
    buscarInput.addEventListener("keyup", function () {
      // Obtén el valor del campo de búsqueda y conviértelo a minúsculas para hacer coincidencias sin distinción entre mayúsculas y minúsculas
      const searchText = buscarInput.value.toLowerCase();
  
      // Obtén todos los elementos <article>
      const articles = document.querySelectorAll(".enComun");
  
      // Recorre los elementos y muestra/oculta según la coincidencia con el ID
      articles.forEach(function (article) {
        const articleID = article.id.toLowerCase();
  
        // Comprueba si el texto de búsqueda está contenido en el ID del artículo
        if (articleID.includes(searchText)) {
          article.style.display = "block"; // Muestra el artículo
        } else {
          article.style.display = "none"; // Oculta el artículo
        }
      });
    });
  });