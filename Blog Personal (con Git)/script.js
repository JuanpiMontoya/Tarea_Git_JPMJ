function comentarios(){
    let favorito,opinion,comentario;
    favorito= document.getElementById("obraGusto").value;
    opinion = document.getElementById("opinion").value;
    comentario = "Comentario: " + opinion +" Obra que más le intereso: " + favorito;
    document.getElementById("Comentarios").innerHTML = comentario;
    alert(comentario);
}