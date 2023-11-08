const planMensual = {
    nombre:"plan mensual",
    descripcion:"¡¡¡Con el plan mensual llevate la mejor musica controlando lo que gastas!!!",
    imagenDeplan:"planMensualDibujo.jpg"

}

const planAnual={
    nombre:"plan anual",
    descripcion:"¡¡¡Ahorra 4 meses comprando el plan anual y disfruta de todos los beneficios",
    imagenDeplan:"planAnual.jpg"
}

const planDefinitivo={
    nombre:"plan definitivo",
    descripcion:"Transformate en super usuario al comprar por unica vez y para siempre la app y disfruta de todos los beneficios",
    imagenDeplan:"planDefinitivo.jpg"
}

localStorage.setItem("planMensual",JSON.stringify(planMensual));
localStorage.setItem("planAnual",JSON.stringify(planAnual));
localStorage.setItem("planDefinitivo",JSON.stringify(planDefinitivo));