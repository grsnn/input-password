let iconHide = document.getElementById('iconHide');
let iconShow = document.getElementById('iconShow');
let inputPass = document.getElementById('password');
let message = document.querySelector('.message');

iconShow.addEventListener('click', () => {
    iconHide.classList.add('active')
    iconShow.classList.remove('active')
    inputPass.type = 'text';
});

iconHide.addEventListener('click', () => {
    iconHide.classList.remove('active')
    iconShow.classList.add('active')
    inputPass.type = 'password';
});

let pass = /^.{6,25}$/;

let validatePass = () => {
    if (!pass.test(inputPass.value)) {
        message.classList.remove('success');
        message.classList.add('error');
        message.innerHTML = '<i class="fas fa-times-circle"></i> Su contraseña debe tener entre 6 a 25 caracteres';
    } else {
        message.classList.add('success');
        message.innerHTML = '<i class="fas fa-check-circle"></i> Correcto';
    }
}

inputPass.addEventListener('keyup', validatePass);
inputPass.addEventListener('blur', validatePass);