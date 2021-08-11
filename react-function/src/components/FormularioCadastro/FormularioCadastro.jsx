import React, { useState } from 'react';
import { Button, FormControlLabel, TextField, Switch } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, testeConsole, validarCpf }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const [erros, setErros] = useState(
        {
            cpf: {
                valido: true,
                textoAjuda: '',
            }
        }
    );

    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
                testeConsole();
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
                    if (tmpNome.length >= 12) {
                        tmpNome = tmpNome.substr(0, 12);
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
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.textoAjuda}
                onBlur={(event) => {
                    const ehValido = validarCpf(event.target.value);
                    setErros(
                        {
                            cpf: ehValido
                        }
                    )
                }}
            />

            <FormControlLabel
                label="Promoçoes"
                control={
                    <Switch
                        name="promocoes"
                        checked={promocoes}
                        color="primary"
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        checked={novidades}
                        color="primary"
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
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