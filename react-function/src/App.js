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

        <FormularioCadastro />

      </Container>

    );
  }
}

export default App;
