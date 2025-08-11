
function agregarTarea(){
    let campoText = document.getElementById("cdt");
    let texto = campoText.value.trim();
    if (texto !== ""){
        var lista = document.getElementById("listaTareas");
        var nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = texto;

        var botonEliminar = document.createElement("button");
        botonEliminar.id = "botonEliminar";
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => {
            lista.removeChild(nuevaTarea); 
            lista.removeChild(salto)
        };
    
        //Crear salto de linea (br)
        var salto = document.createElement("br");
        lista.appendChild(salto);

        nuevaTarea.appendChild(botonEliminar);

        lista.appendChild(nuevaTarea);
        campoText.value = "";
        alert("Tarea agregada correctamente");

    } else{
        alert("El campo no puede estar vacío");
    }
};
