var elem = document.documentElement;

window.onload = function(){
    initialize();
};

function initialize(){
    //Evento que se activa al entrar en pantalla completa o salir de la misma.
    elem.addEventListener('fullscreenchange', function(){
        let text = document.getElementById('text');
        if(window.fullScreen) text.innerText = "Estamos en pantalla completa";
        else text.innerHTML = "";
    })

    //Eventos para los botones, con sus funciones de entrar y salir en pantalla completa.
    let enterFullScreen = document.getElementById('full-screen');
    enterFullScreen.addEventListener('click', openFullscreen, false);
    let exitFullScreen = document.getElementById('exit-full-screen');
    exitFullScreen.addEventListener('click', closeFullscreen, false);
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {  /* Para el navegador Safari */
        elem.webkitRequestFullscreen();         /* Para el navegador Safari */
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Para el navegador Safari */
        document.webkitExitFullscreen();        /* Para el navegador Safari */
    }
}