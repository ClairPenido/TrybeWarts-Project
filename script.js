const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnHeader = document.getElementById('btnHeader');
const checkAcordo = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
// const counter = document.getElementById('counter');

// 3 Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos."

function verificaInput() {
  const valorEmail = inputEmail.value;
  const valorSenha = inputSenha.value;

  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnHeader.addEventListener('click', verificaInput);
function verificaAcordo() {
  if (checkAcordo.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

checkAcordo.addEventListener('click', verificaAcordo);

// 20 criar um counter referência: https://stackoverflow.com/questions/27211205/count-characters-in-textfield-on-keydown-event

function contaCaracteres() {
  const texto = document.getElementById('textarea').value;
  const counterTexto = texto.length;
  document.getElementById('counter').innerHTML = 500 - counterTexto;
}

contaCaracteres();
