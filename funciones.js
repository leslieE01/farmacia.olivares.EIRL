function verContraseña(){
    const mostrarContraseña = document.getElementById('mostrar-contraseña');
    const campoContraseña = document.getElementById('contraseña');

    mostrarContraseña.addEventListener('click', () => {
        if (campoContraseña.type === 'password') {
            campoContraseña.type = 'text';
        } else {
            campoContraseña.type = 'password';
        }
    });
}
window.onload = verContraseña;

//funcion iniciar secion

function bienvenida(params) {

    alert("Bienvenid@ a la Farmacia 'OLIVARES E.I.R.L' en Línea")
    window.location.href = "index.html"; 
    
}

function registrarse(){
    document.getElementById('registroBtn').addEventListener('click', function() {
        window.location.href = 'registrarse.html'; 
    });
}

function registro2() {
    document.getElementById('btnreg').addEventListener('click', function() {
        alert("Bienvenid@, se registro exitosamente")
        window.location.href = 'inicioSesion.html'; 
    });
}


function bienvenida2(params) {

    alert("Se registro correctamente, bienvenid@")
    window.location.href = 'inicioSesion.html';  
}

//agregado is
function verContraseña1() {
    var contraseñaInput = document.getElementById('contraseña');
    var iconoMostrar = document.getElementById('mostrar-contraseña');

    if (contraseñaInput.type === 'password') {
        contraseñaInput.type = 'text';
        iconoMostrar.classList.remove('fa-eye');
        iconoMostrar.classList.add('fa-eye-slash');
    } else {
        contraseñaInput.type = 'password';
        iconoMostrar.classList.remove('fa-eye-slash');
        iconoMostrar.classList.add('fa-eye');
    }
}