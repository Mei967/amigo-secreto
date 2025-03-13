

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creando array para almacenar nombre de prticipantes.
let amigos = []

//Función para pedir al usuario que ingrese un nombre
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); //elimina espacios en blanco al comienzo o al final

    //validar que el campo no este vacío
    if (nombreAmigo === "") {
        alert("Por favor ingrese nombre");
        inputAmigo.value = ""; // Limpia el campo
        inputAmigo.focus(); // Devuelve el cursor al input
        return;
    }

    // Verificar si el nombre contiene números o símbolos
    if (!isNaN(nombreAmigo) || nombreAmigo.match(/[^A-Za-zÁÉÍÓÚáéíóúñÑ ]/)) {
        alert("Por favor ingresar solamente letras y espacios");
        inputAmigo.value = ""; 
        inputAmigo.focus(); 
        return;
    }

    // Verifica que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido ingresado.");
        inputAmigo.value = ""; 
        inputAmigo.focus(); 
        return;
    }

    // Agrega el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = ""; // Limpia el campo
    inputAmigo.focus(); // devuelve e cursor al imput

     // Actualizar la lista en la página
     actualizarLista();

}

//Función para mostrar la lista de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpia el contenido actual de la lista
    listaAmigos.innerHTML = "";

     // Recorrer el array y agregar cada nombre como un <li>
     for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) { //comprueba si el array esta vacío
        alert("No hay amigos en la lista para sortear. Ingresa un nombre");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);//genera un índice aleatorio dentro  del array amigos para seleccionar un amigo al azar.
    let amigoSorteado = amigos[indiceAleatorio];// Usamos el índice aleatorio generado para seleccionar un amigo del array

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "El amigo seleccionado es: " + amigoSorteado;

    // Vaciar la lista visualmente
    document.getElementById("listaAmigos").innerHTML = "";

    // Vaciar el array de amigos para comenzar de nuevo
    amigos = [];

    // elimina el mensaje  de el amigo seleccionado despues de 3 segundos
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000);
}


