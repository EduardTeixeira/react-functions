import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (

      <Container
        component="article"
        maxWidth="sm"
      >

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <Typography
          variant="h3"
          component="h1"
          align="center"
        >
          Formulário de Cadastro
        </Typography>

        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          testeConsole={testeConsoleApp}
          validarCpf={validarCpf}
        />

      </Container>

    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function testeConsoleApp() {
  console.log('testeConsole');
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, textoAjuda: 'CPF deve ter 11 dígitos.' };
  } else {
    return { valido: true, textoAjuda: '' };
  }
}

export default App;
