"use strict";
class message {
    constructor (autor, texto) {
        this.autor = autor;
        this.texto = texto;
        this.fecha = new Date();
        this.fechaFormateada = this.fecha.getDate() + " del " + this.fecha.getMonth() + " de " + this.fecha.getFullYear() + " a las " + this.fecha.getHours() + ":" +  this.fecha.getMinutes();
    }
}

window.onload = () => {
    document.getElementById('nombre-usuario').addEventListener('keydown', function(e) {
        //
        //Evitar que el usuario pueda hacer salto de linea en el campo de usario
        //
        if (e.key == "Enter") {
            e.preventDefault();
        }
    })
    document.getElementById('comentario-usuario').addEventListener('keydown', function(e) {
        if (e.key == "Enter") {
            subirComentario();
            e.preventDefault();
        }
    })
}

function subirComentario () {
    let divMensajes = document.getElementById('lista-mensajes');
    let autor = document.getElementById('nombre-usuario').value;
    let comentario = document.getElementById('comentario-usuario').value;
    document.getElementById('comentario-usuario').value = "";
    //-----Creacion del mensaje-----
    if (autor && comentario) {
        let mensaje = new message(autor,comentario)
        divMensajes.innerHTML += "<p id='mensaje'><strong>" + mensaje.autor + ":</strong> " + mensaje.texto + "\t<span>(" + mensaje.fechaFormateada + ").</span></p>";
        comentario = "";
    }
}
function eliminarComentarios () {
    document.getElementById('lista-mensajes').innerHTML = "";
}