//toFixed para limitar casas decimais)
function calcularImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

// Função Matemática: Água
function calcularMetaAgua(peso) {
  return peso * 35;
}

// Função Matemática: Calorias
function calcularCalorias(
  peso,
  altura,
  idade,
  sexo,
  multiplicadorAtividade,
  objetivo,
) {
  let tmb;

  // Calcula a Taxa Metabólica Basal (TMB)
  if (sexo === "Masculino") {
    tmb = 10 * peso + 6.25 * (altura * 100) - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * (altura * 100) - 5 * idade - 161;
  }

  // Calcula o Gasto Energético Total (GET)
  const gastoTotal = tmb * multiplicadorAtividade;

  // Aplica o objetivo sobre o gasto real
  if (objetivo === "Deficit") {
    return (gastoTotal - 500).toFixed(0);
  } else if (objetivo === "Superavit") {
    return (gastoTotal + 500).toFixed(0);
  }

  return gastoTotal.toFixed(0); // Manutenção
}

// Função Orquestradora
function calcularResultados(event) {
  if (event) event.preventDefault();
  // Como os dados vem em formato de string,trsnsformamos em int
  // Captura e Conversão dos dados do HTML
  const nome = document.getElementById("Nome").value;
  const peso = parseFloat(document.getElementById("Peso").value);
  const altura = parseFloat(document.getElementById("Altura").value);
  const idade = parseInt(document.getElementById("Idade").value);
  const sexo = document.getElementById("Sexo").value;
  const atividade = parseFloat(document.getElementById("Atividade").value);

  const objetivoSelecionado = document.querySelector(
    'input[name="opcoesObj"]:checked',
  );
  const objetivo = objetivoSelecionado ? objetivoSelecionado.id : null;

  // Validação: Impede que o cálculo continue se faltarem dados essenciais
  if (!peso || !altura || !idade || !sexo || !atividade || !objetivo) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Passagem dos dados para as funções matemáticas
  const imc = calcularImc(peso, altura);
  const agua = calcularMetaAgua(peso);
  const calorias = calcularCalorias(
    peso,
    altura,
    idade,
    sexo,
    atividade,
    objetivo,
  );

  // Criação do Objeto estruturado com os resultados
  const relatorioPaciente = {
    dadosPessoais: {
      nome: nome,
      idade: idade,
      sexo: sexo,
    },
    metricasCalculadas: {
      imc: parseFloat(imc),
      aguaRecomendadaMl: agua,
      caloriasDiarias: parseInt(calorias),
    },
    dataCalculo: new Date().toISOString(),
  };

  const relatorioJSON = JSON.stringify(relatorioPaciente, null, 2);
  console.log(relatorioJSON);

  // Salva o JSON no navegador para a tela resultado.html poder ler depois
  localStorage.setItem("dadosNutriFit", relatorioJSON);

  window.location.href = "./resultado.html";
}
