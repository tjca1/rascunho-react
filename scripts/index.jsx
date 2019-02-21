import React from 'react'
import ReactDOM from 'react-dom'
import './estilo'
import Sala from './sala'
import Aluno from './aluno'



ReactDOM.render(
    <Sala turma='A'>
        <Aluno nome='Thiago' />
        <Aluno nome='José' />
        <Aluno nome='Araujo' />
    </Sala>,
    document.getElementById('app')
)





