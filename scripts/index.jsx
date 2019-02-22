import React from 'react'
import ReactDOM from 'react-dom'
import './estilo'
import Sala from './sala'
import Aluno from './aluno'



ReactDOM.render(
    <Sala turma='A'>
        <Aluno name='Thiago' />
        <Aluno name='Jose' />
        <Aluno name='Araujo' />
    </Sala>,
    document.getElementById('app')
)





