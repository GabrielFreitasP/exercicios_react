import React from 'react'

const Aluno = props => (
    <h1>Aluno: {props.nome}</h1>
)

const Professor = props => (
    <h1>Professor: {props.titulacao}</h1>
)

export { Aluno, Professor }