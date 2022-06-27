// Desafio 3 : função para validar o email e senha
const btnLogin = document.querySelector('#botao-login');
const inputEmail = document.querySelector('#inputEmail');
const inputSenha = document.querySelector('#input-senha');
const btnCheck = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
btnEnviar.disabled = true;
// function validEmail() {
btnLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnCheck.addEventListener('click', () => {
  if (btnCheck.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

const areaTexto = document.querySelector('#textarea');
let counter = 500;
const contador = document.querySelector('#counter');
contador.innerText = counter;
areaTexto.addEventListener('input', () => {
  const digitado = areaTexto.value;
  counter = 500 - digitado.length;
  contador.innerText = counter;
});

const buttonEnviar = document.querySelector('#submit-btn');

const inputMaterias = document.querySelectorAll('.conteudo');
const inputAvaliacao = document.querySelectorAll('.notas');

const inputFamilia = document.querySelectorAll('.nomeFamilia');

function family() {
  let familia = '';
  for (let i = 0; i < inputFamilia.length; i += 1) {
    if (inputFamilia[i].checked) {
      familia = inputFamilia[i].value;
    }
  }
  return familia;
}

function avalia() {
  let nota = '';
  for (let i = 0; i < inputAvaliacao.length; i += 1) {
    if (inputAvaliacao[i].checked) {
      nota = inputAvaliacao[i].value;
    }
  }
  return nota;
}

function materias() {
  const materia = [];
  for (let i = 0; i < inputMaterias.length; i += 1) {
    if (inputMaterias[i].checked) {
      materia.push(` ${inputMaterias[i].value}`);
    }
  }
  return materia;
}

buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const inputNome = document.querySelector('#input-name').value;
  const inputSobrenome = document.querySelector('#input-lastname').value;
  const inputtEmail = document.querySelector('#input-email').value;
  const inputCasa = document.querySelector('#house').value;
  const inputObservacoes = document.querySelector('#textarea').value;
  buttonEnviar.style.display = 'none';
  document.querySelector('#evaluation-form').innerText = `Nome: ${inputNome} ${inputSobrenome}
  Email: ${inputtEmail}
  Casa: ${inputCasa}
  Família: ${family()}
  Matérias: ${materias()}
  Avaliação: ${avalia()}
  Observações: ${inputObservacoes}`;
});
