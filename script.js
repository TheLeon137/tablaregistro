
// Arreglo JSON para almacenar los datos de usuario
let usuarios = [
    {
        nombre: "cesar",
        apellido: "de leon",
        direccion: "cra 2",
        identificacion: "123456789",
        edad: 25,
        sexo: "masculino",
        email: "cesar@example.com",
        telefono: "1234567890"
    },
    {
        nombre: "andres",
        apellido: "saumeth",
        direccion: "cra 6",
        identificacion: "987654321",
        edad: 30,
        sexo: "masculino",
        email: "andres@example.com",
        telefono: "9876543210"
    },
    {
        nombre: "jesus",
        apellido: "ramirez",
        direccion: "cra 5",
        identificacion: "456789123",
        edad: 28,
        sexo: "masculino",
        email: "jesus@example.com",
        telefono: "4567891230"
    },
    {
        nombre: "luis",
        apellido: "lopez",
        direccion: "cra 4",
        identificacion: "321654987",
        edad: 35,
        sexo: "masculino",
        email: "luis@example.com",
        telefono: "3216549870"
    },
    {
        nombre: "yor",
        apellido: "hernandez",
        direccion: "cra 22",
        identificacion: "789321654",
        edad: 27,
        sexo: "masculino",
        email: "yor@example.com",
        telefono: "7893216540"
    }
];

const registrarUsuario = () => {
    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let direccion = document.getElementById("Direccion").value;
    let identificacion = document.getElementById("Identificacion").value;
    let edad = document.getElementById("Edad").value;
    let sexo = document.getElementById("Sexo").value;
    let email = document.getElementById("Email").value;
    let telefono = document.getElementById("Telefono").value;

    /* ALERTA DE LLENAR CAMPOS */

    if (nombre === "" || apellido === "" || direccion === "" || identificacion === "" || edad === "" || email === "" || telefono === "") {
        // Mostrar un mensaje de alerta si algún campo está vacío
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            Por favor, complete todos los campos.
        `;

        // Insertar el elemento de alerta antes del elemento "Nombre"
        const nombreElement = document.getElementById("Nombre");
        nombreElement.insertAdjacentElement("beforebegin", alertElement);

        alertElement.querySelector('.btn-close').addEventListener('click', function () {
            alertElement.remove();
        });

        return; // Salir de la función temprano
    }

    /* ALERTA DE SOLO NUMEROS*/

    if (!/^\d+$/.test(identificacion)) {
        // Mostrar un mensaje de alerta si el campo de identificación contiene letras
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            El campo de identificación solo acepta números.
        `;

        // Insertar el elemento de alerta antes del elemento "Identificacion"
        const identificacionElement = document.getElementById("Identificacion");
        identificacionElement.insertAdjacentElement("beforebegin", alertElement);

        alertElement.querySelector('.btn-close').addEventListener('click', function () {
            alertElement.remove();
        });

        return; // Salir de la función temprano
    }

    if (!/^\d+$/.test(edad)) {
        // Mostrar un mensaje de alerta si el campo de edad no es un número
        alert("El campo de edad solo acepta números.");
        return; // Salir de la función temprano
    }

    // Verificar si el usuario con el mismo nombre y apellido ya está registrado
    let isAlreadyRegistered = usuarios.some(usuario => {
        return usuario.nombre === nombre && usuario.apellido === apellido;
    });

    if (isAlreadyRegistered) {
        // Mostrar un mensaje de alerta si el usuario ya está registrado
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Este usuario ya está registrado.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Salir de la función temprano
    }

    /*     Funcion de identificacion ya registrada*/
    let isAlreadyRegistered1 = usuarios.some(usuario => {
        return usuario.identificacion === identificacion;
    });

    if (isAlreadyRegistered1) {
        // Mostrar un mensaje de alerta si la identificación ya está registrada
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            Esta identificación ya está registrada.
        `;

        // Insertar el elemento de alerta antes del elemento "Nombre"
        const nombreElement = document.getElementById("Nombre");
        nombreElement.insertAdjacentElement("beforebegin", alertElement);

        alertElement.querySelector('.btn-close').addEventListener('click', function () {
            alertElement.remove();
        });

        return; // Salir de la función temprano
    }

    // Crear un nuevo objeto de usuario
    let usuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        identificacion: identificacion,
        edad: edad,
        sexo: sexo,
        email: email,
        telefono: telefono
    };

    // Agregar el objeto de usuario al arreglo de usuarios
    usuarios.push(usuario);

    // Limpiar los campos de entrada
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Direccion").value = "";
    document.getElementById("Identificacion").value = "";
    document.getElementById("Edad").value = "";
    document.getElementById("Sexo").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Telefono").value = "";

    // Mostrar un mensaje de éxito
    let alertElement = document.createElement("div");
    alertElement.classList.add("alert", "alert-success");
    alertElement.innerHTML = `
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       Usuario registrado con éxito!
    `;

    // Insertar el elemento de alerta antes del elemento "Nombre"
    const nombreElement = document.getElementById("Nombre");
    nombreElement.insertAdjacentElement("beforebegin", alertElement);

    alertElement.querySelector('.btn-close').addEventListener('click', function () {
        alertElement.remove();
    });
};

const listarUsuarios = () => {
    // Verificar si hay usuarios registrados
    if (usuarios.length === 0) {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger");
        alerta.innerHTML = `
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           No hay usuarios registrados.
        `;
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alerta);
        return;
    }

    // Convertir el arreglo de usuarios a una cadena JSON
    const usuariosJSON = JSON.stringify(usuarios);

    // Codificar la cadena JSON para que sea segura en una URL
    const usuariosEncoded = encodeURIComponent(usuariosJSON);

    // Redirigir a la página "tablaregistro.html" con los datos como parámetro de la URL
    window.location.href = `tablaregistro.html?datos=${usuariosEncoded}`;
};
