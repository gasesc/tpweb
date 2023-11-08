document.addEventListener("DOMContentLoaded", function () {
    
    const buscarInput = document.getElementById("buscar");
  
    buscarInput.addEventListener("keyup", function () {
      const searchText = buscarInput.value.toLowerCase();
  
      
      const articles = document.querySelectorAll(".enComun");
  
      
      articles.forEach(function (article) {
        const articleID = article.id.toLowerCase();
  
        
        if (articleID.includes(searchText)) {
          article.style.display = "block"; 
        } else {
          article.style.display = "none"; 
        }
      });
    });
  });