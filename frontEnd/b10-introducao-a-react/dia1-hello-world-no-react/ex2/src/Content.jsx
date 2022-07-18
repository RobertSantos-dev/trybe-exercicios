import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return(
            <section>
                {conteudos.map((e, i) => {
                    return (
                        <div key={i}>
                            <p>O <strong>{Object.keys(e)[0]}</strong> é: {e.conteudo}</p>
                            <p><strong>{Object.keys(e)[1]}</strong>: {e.status}`</p>
                            <p><strong>{Object.keys(e)[2]}</strong>: {e.bloco}`</p>
                            <hr />
                        </div>
                    )
                })}
            </section>
        )
    }
}
export default Content;