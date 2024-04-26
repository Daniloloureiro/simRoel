function mostrar(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    document.getElementById('texto').innerHTML = "Olá, " + nome + "!";
}
