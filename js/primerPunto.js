(function () {
    var lista = document.getElementById("lista")
    var tareaInput = document.getElementById("tareaInput")
    var btnNuevaTarea = document.getElementById("btn-agregar");
    var agregarTarea = function () {
        var tarea = tareaInput.value;
            nuevaTarea = document.createElement("li");
            enlace = document.createElement("li");
            contenido = document.createTextNode(tarea);
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        enlace.appendChild(contenido);
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";
    };
    var comprobarInput = function () {
        tareaInput.className = "";
        teareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    btnNuevaTarea.addEventListener("click", agregarTarea);

    tareaInput.addEventListener("click", comprobarInput);

}());

function eliminarUltimo() {
    prueba = document.getElementById("lista").children
    prueba[prueba.length - 1].remove()
}

