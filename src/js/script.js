document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector('form'); // Sincronizar Formulario
  const Dia = document.getElementById('day'); // Sincronizar Dia (Digitado)
  const Mes = document.getElementById('month'); // Sincronizar Mês (Digitado)
  const Ano = document.getElementById('year'); // Sincronizar Ano (Digitado)
  const MostraAno = document.querySelector('.age-information .year'); // Exibição Do Ano
  const MostraMes = document.querySelector('.age-information .month'); // Exibição Do Mês
  const MostraDia = document.querySelector('.age-information .day'); // Exibição Do Dia
  const hoje = new Date(); // Data Atual

  // Spans de erro
  const erroDia = Dia.nextElementSibling.nextElementSibling;
  const erroMes = Mes.nextElementSibling.nextElementSibling;
  const erroAno = Ano.nextElementSibling.nextElementSibling;

  formulario.addEventListener('submit', function (Calculo) {
    Calculo.preventDefault();

    const dia = parseInt(Dia.value);  // Dia Digitado
    const mes = parseInt(Mes.value);  // Mes Digitado
    const ano = parseInt(Ano.value);  // Ano Digitado

    // Resetar mensagens de erro
    erroDia.textContent = '';
    erroMes.textContent = '';
    erroAno.textContent = '';

    let erro = false;

    if (isNaN(dia) || dia < 1 || dia > 31) { // Verificação de Dia
      erroDia.textContent = 'Erro, insira um dia válido';
      erroDia.classList.remove('hide');
      erro = true;

    } else {
      erroDia.classList.add('hide');
    }

    if (isNaN(mes) || mes < 1 || mes > 12) { // Verificação de Mês
      erroMes.textContent = 'Erro, insira um mês válido';
      erroMes.classList.remove('hide');
      erro = true;

    } else {
      erroMes.classList.add('hide');
    }

    if (isNaN(ano) || ano > new Date().getFullYear() || ano < 1910) { // Verificação de Ano
      erroAno.textContent = 'Erro, insira um ano válido';
      erroAno.classList.remove('hide');
      erro = true;

    } else {
      erroAno.classList.add('hide');
    }

    if (erro) {  // Impede de realizar o calculo com erros
      return;
    }
    
    let idadeAno = hoje.getFullYear() - ano; // Calculo de Ano
    let idadeMes = hoje.getMonth() + 1 - mes; // Calculo de Mês (Janeiro é 0, então +1)
    let idadeDia = hoje.getDate() - dia; // Calculo de Dia

    if (idadeDia < 0) { // Verificação de Dia (Pós o Calculo)
      idadeMes--;
      idadeDia += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }

    if (idadeMes < 0) { // Verificação de Mês (Pós o Calculo)
      idadeAno--;
      idadeMes += 12;
    }

    MostraAno.textContent = idadeAno; // Exibir Quantos Anos De Vida
    MostraMes.textContent = idadeMes; // Exibir Quantos Mêses De Vida
    MostraDia.textContent = idadeDia; // Exibir Quantos Dias De Vida
  });
});