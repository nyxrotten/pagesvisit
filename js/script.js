let contador = document.getElementById('contadorVisitas');
let boton = document.getElementById('btnReestablecer');

if (localStorage === undefined) {
    localStorage = 1;
}
else {
    localStorage ++;
}

    if (localStorage.carga === undefined) {
        localStorage.carga = 1;
    } else {
        localStorage.carga = Number(localStorage.carga)+1;
    }
    contador.innerText = localStorage.carga;

    boton.addEventListener('click', function restablecer() {
        contador.innerText = 0;
        localStorage.removeItem('carga');
    });