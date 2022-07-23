import React from "react";

import CheckEstados from "./CheckEstados";
import Inputs from "./Inputs";
import TextArea from "./TextArea";

class Form extends React.Component {
    constructor(){
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            alerta: 0,
        }
    }

    validador = (letra) => {
        const caractere = String.fromCharCode(letra.keyCode);
        if (caractere.match('[a-zA-Z0-9]')) {
            return caractere;
        }
    }

    eventBlur = ({target}) => {
        const numero = parseInt(target.value[0]);
        if (!isNaN(numero)) {
            this.setState({ [target.name]: "", });
            target.value = "";
        }
    }

    eventMouse = () => {
        if (this.state.alerta === 0) alert('Preencha com cuidado esta informação.');
        this.setState({ alerta: 1 });
    }

    handleGeneric = ({target}) => {
        const { name, value } = target;

        name === "endereco" ?
            this.setState({ [name]: this.validador(value.slice(-1))}):
            this.setState({ [name]: value, });

        name === "nome" ?
            this.setState({ [name]: value.toUpperCase(), }):
            this.setState({ [name]: value, });
    }

    render() {
        const { nome, email, cpf, endereco, cidade } = this.state;
        return (
            <form onSubmit="">
                <fieldset>
                    <legend>Dados Pessoais: </legend>
                    <Inputs
                        change={ this.handleGeneric }
                        value={ nome }
                        tipo="text"
                        name="nome"
                        max="40"
                        texto="Nome"
                    />
                    <Inputs
                        change={ this.handleGeneric }
                        value={ email }
                        tipo="email"
                        name="email"
                        max="50"
                        texto="Email"
                    />
                    <Inputs
                        change={ this.handleGeneric }
                        value={ cpf }
                        tipo="text"
                        name="cpf"
                        max="11"
                        texto="CPF"
                    />
                    <Inputs
                        change={ this.handleGeneric }
                        value={ endereco }
                        tipo="text"
                        name="endereco"
                        max="200"
                        texto="Endereço"
                    />
                    <Inputs
                        change={ this.handleGeneric }
                        value={ cidade }
                        blur={ this.eventBlur }
                        tipo="text"
                        name="cidade"
                        max="28"
                        texto="Cidade"
                    />
                    <CheckEstados />
                </fieldset>
                <fieldset>
                    <legend>Dados do ultimo emprego: </legend>
                    <TextArea texto="Resumo do Curriculo" name="resumo-curriculo" max="1000" />
                    <TextArea texto="Cargo" name="cargo" max="40" mouseEnter={ this.eventMouse } />
                    <TextArea texto="Descrição do cargo" name="descricao-cargo" max="500" />
                </fieldset>
                <div>
                    <button type="button" onClick={() => console.log(this.state)}>Finalizar</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
        );
    }
}
export default Form;
