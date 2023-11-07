const imagen="sui generis.jpg";
const boton =document.querySelector("#cambiar");
let contentedorImagencita=document.createElement("img");
const contenedorArticle=document.querySelector("#contenedorFoto");

boton.addEventListener("click",()=>{
    contentedorImagencita.src=`img/${imagen}`;
    contenedorArticle.appendChild(contentedorImagencita);

})
