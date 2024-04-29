function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a aba desejada ao carregar a página
window.onload = function () {
    openTab(event, 'Tab1');
}

const formEl = document.getElementById('form')

formEl.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    console.log(data);
})