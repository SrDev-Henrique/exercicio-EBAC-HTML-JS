const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.getElementById('form-campos');
const audioSucesso = new Audio('./imagens/rigth.mp3');
const audioErro = new Audio('./imagens/wrong.mp3');
let formEValido = false;

function validaCampo(campoA, campoB) {
    let numeroA = Number(campoA.value);
    let numeroB = Number(campoB.value);
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = '<img src="./Imagens/right.jpeg" alt="acertô, miseravi" />';
    const mensagemErro = '<img src="./Imagens/wrong.png" alt="Erroowww" width="800px" />';

    formEValido = validaCampo(campoA, campoB);
    
    if (formEValido) {
        const containerImagemSucesso = document.querySelector('.success-message');
        containerImagemSucesso.innerHTML = mensagemSucesso;
        containerImagemSucesso.style.display = 'block';

        audioSucesso.play();

        campoA.value = '';
        campoB.value = '';

        setTimeout(function() {
            containerImagemSucesso.style.display = 'none';
        }, 3000);
    } else {
        const containerImagemErro = document.querySelector('.error-message');
        containerImagemErro.innerHTML = mensagemErro;
        containerImagemErro.style.display = 'block';

        audioErro.play();

        campoA.value = '';
        campoB.value = '';

        setTimeout(function() {
            containerImagemErro.style.display = 'none';
        }, 3000);
    }
});