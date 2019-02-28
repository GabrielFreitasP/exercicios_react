import React from 'react'
import ReactDOM from 'react-dom'
import { Aluno, Professor } from './component'

ReactDOM.render(
    <div>
        <Aluno nome="Gabriel" />
        <Professor titulacao="Mestrado" />
    </div>,
    document.getElementById('app'))