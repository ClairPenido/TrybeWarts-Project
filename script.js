const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnHeader = document.getElementById('btnHeader');
const checkAcordo = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const conteudoForm = document.getElementById('evaluation-form');
// const name = document.getElementById('input-name');
// const lastName = document.getElementById('input-name');


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

// 21

function getSelected() {
  const family = document.querySelectorAll('.family');
  let familiaEscolhida = '';
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      familiaEscolhida = family[i].value;
    }
  }
  return familiaEscolhida;
}

function getSelectedRate() {
  const rate = document.querySelectorAll('.rate');
  let ratingValue = '';
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked === true) {
      ratingValue = rate[i].value;
    }
  }
  return ratingValue;
}

function getChecked() {
  const subject = document.querySelectorAll('.subject');
  const materiasEscolhidas = [];

  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked === true) {
      materiasEscolhidas.push(` ${subject[i].value}`);
    }
  }
  return materiasEscolhidas;
}

function trocaValores(event) {
  event.preventDefault();
  const name = document.getElementById('input-name');
  const lastname = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const observacoes = document.getElementById('textarea');
  conteudoForm.innerText = `Nome: ${name.value} ${lastname.value}
    Email: ${email.value}
    Casa: ${casa.value} 
    Família: ${getSelected()}
    Matérias: ${getChecked()}
    Avaliação: ${getSelectedRate()}
    Observações: ${observacoes.value}`;
  console.log(conteudoForm);
}

btnEnviar.addEventListener('click', trocaValores);

// falta: família, matéria, rate e observação Família: ${getSelected()}

// Avaliação: ${avaliacao.checked}
