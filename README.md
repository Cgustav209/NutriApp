# 🍏 NutriFit

O **NutriFit** é uma aplicação web focada em auxiliar os usuários no controle de seus dados corporais e nutricionais. Esta ferramenta realiza cálculos essenciais de saúde de forma automatizada, exibindo os resultados de maneira clara e mantendo um histórico completo das consultas diretamente no navegador do usuário.

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-success)
![Tecnologias](https://img.shields.io/badge/HTML5_|_CSS3_|_JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Funcionalidades (MVP)

A versão inicial do sistema (MVP) funciona de forma independente no navegador e conta com as seguintes ferramentas:

*   **Cadastro Rápido:** Inserção de dados básicos (Nome, Peso, Altura e Idade).
*   **Cálculo de Água:** Recomendação de consumo diário de água baseada no peso corporal (35ml por kg).
*   **Calculadora de IMC:** Cálculo do Índice de Massa Corporal com retorno da classificação oficial (Abaixo do peso, Peso normal, Sobrepeso, Obesidade).
*   **Gasto Calórico:** Estimativa de calorias diárias adaptada ao objetivo do usuário (Manutenção de peso, Déficit calórico ou Superávit calórico).
*   **Gerenciamento de Histórico (Cards):** As consultas são salvas e renderizadas em formato de *cards*. Cada card exibe o resumo da consulta e possui opções para:
    *   Visualizar dados completos
    *   Editar informações
    *   Excluir registro

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da web, focando em performance e acessibilidade sem a dependência de frameworks complexos nesta primeira etapa:

*   **HTML5 & CSS3:** Estruturação semântica e estilização da interface (Formulário, Resultados e Histórico).
*   **JavaScript (Vanilla):** Lógica de cálculos, manipulação do DOM e gerenciamento de estado.
*   **Web Storage API (LocalStorage):** Persistência de dados local, permitindo que o histórico do usuário seja salvo sem a necessidade de um banco de dados externo ou sistema de login.

## ⚙️ Como executar o projeto localmente

Como o projeto é executado inteiramente no lado do cliente (Client-side), não é necessária a instalação de dependências ou servidores complexos.

1. Clone o repositório em sua máquina:
```bash
git clone [https://github.com/Cgustav209/NutriFit.git](https://github.com/Cgustav209/NutriFit.git)
```
