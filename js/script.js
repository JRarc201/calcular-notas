// --- DIV DE CAMPOS --- 
const camposNotas = document.getElementById("camposNotas");
const camposPorcentaje = document.getElementById("camposPorcentaje");

// --- BOTON PARA ELIMAR CAMPOS --- 
const eliminarCampos = document.getElementById("eliminarCampos");
const divTexto = document.getElementById("divTexto");
const agregarCampo = document.createElement("small");

// --- ELEMENOS DE MODAL --- 
const dialog = document.querySelector("dialog");
//const cerrarModal = document.querySelector("#cerrarModal");

// --- CAMPOS DE NOTAS ---
//campos de notas
let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
//campos de porcentaje
let porce1 = document.getElementById("porce1");
let porce2 = document.getElementById("porce2");
let porce3 = document.getElementById("porce3");

// --- IMAGENES --- 
const checkIcon = "https://upload.wikimedia.org/wikipedia/commons/5/56/Check_icon.png";
const alertIcon = "https://cdn-icons-png.freepik.com/512/5585/5585025.png";
const errorIcon = "https://cdn-icons-png.flaticon.com/512/9426/9426986.png"
//Variable para seleccionar el icono con un if
let imagenIcon;
//Variable para Mensaje de nota final
let mensajeNota; 
// --- VARIABLE DE NOTA FINAL --- 
let notaFinal = 0;

//Agregar opción de agregar otro campo
agregarCampo.textContent = "Agregar otro Campo";
divTexto.appendChild(agregarCampo);

//AGREGAR ACCION DE AGREGAR CAMPO NUEVO
agregarCampo.addEventListener('click', () => {
    const camposNuevoNotas = document.createElement("input");
    camposNuevoNotas.type = "text";
    camposNuevoNotas.placeholder = "Nota 4";
    camposNuevoNotas.id = "nota4";
    camposNotas.appendChild(camposNuevoNotas);

    let camposNuevoPorcentaje = document.createElement("input");
    camposNuevoPorcentaje.type = "text";
    camposNuevoPorcentaje.placeholder = "%";
    camposNuevoPorcentaje.id = "porce4";
    camposPorcentaje.appendChild(camposNuevoPorcentaje);

    agregarCampo.style.display = "none";

    let eliminarCampo = document.createElement("small");
    eliminarCampo.textContent = "Eliminar Campo Nuevo";
    divTexto.appendChild(eliminarCampo);

    eliminarCampo.addEventListener('click', () => {
        camposNuevoNotas.remove();
        camposNuevoPorcentaje.remove();

        agregarCampo.style.display = "flex";
        eliminarCampo.style.display = "none";
    })
})

calcular.addEventListener('click', () => {
    //Validación de que los campos estén vacios
    if(nota1.value === "" && nota2.value === "" && nota3.value === "" && 
        porce1.value === "" && porce1.value === "" && porce1.value === ""){
            alert("Error!! Por favor, llenar todos los campos")
        }
    else{
        let nNotas = camposNotas.getElementsByTagName("input")

    //If para validad en numero de notas 
    if(nNotas.length === 3){
        notaFinal = ((parseFloat(nota1.value) * porce1.value)/100) + 
                    ((parseFloat(nota2.value) * porce2.value)/100) +
                    ((parseFloat(nota3.value)*porce3.value)/100);
    }else if(nNotas.length === 4){
        let nota4 = document.getElementById("nota4").value;
        let porce4 = document.getElementById("porce4").value;

        notaFinal = ((parseFloat(nota1.value) * porce1.value)/100) + 
                    ((parseFloat(nota2.value) * porce2.value)/100) +
                    ((parseFloat(nota3.value) * porce3.value)/100) + 
                    ((parseFloat(nota4)*porce4)/100);
    }

    notaFinal = notaFinal.toFixed(2);
    //IF PARA LA IMAGEN DE LA MODAL
    if(notaFinal < 3){
        imagenIcon = errorIcon;
        mensajeNota = "No pudiste pasar :'( </br> Esfuerzate para la proxima!!, ¡puedes mejorar y alcanzar tus metas!"
    }else if(notaFinal >= 3 && notaFinal < 3.3){
        imagenIcon = alertIcon;
        mensajeNota = "Pasaste por porquito!! </br> ¡Estás en un buen camino. Con un poco más de esfuerzo, puedes llegar aún más alto.";
    }else if(notaFinal => 3.3){
        imagenIcon = checkIcon;
        mensajeNota = "Felicidades!! </br> Has alcanzado un excelente promedio. Sigue así, ¡el esfuerzo vale la pena!";
    }

    const imagenNota = document.querySelector("#icon");
    imagenNota.src = `${imagenIcon}`;
    const notaP = document.querySelector("#notaP").innerHTML = `Resultado: ${notaFinal}`;
    const mensajeP = document.querySelector("#mensajeP").innerHTML = `${mensajeNota}`;

        dialog.showModal();                      
    }  
});