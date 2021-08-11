import React, { useState } from 'react';
import { Button, FormControlLabel, TextField, Switch } from '@material-ui/core';

function FormularioCadastro() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
            }}
        >

            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={nome}
                onChange={event => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                }}
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoçoes"
                control={
                    <Switch
                        name="promocoes"
                        defaultChecked
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        defaultChecked
                        color="primary"
                    />
                }
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>

        </form>

    );

}

export default FormularioCadastro;