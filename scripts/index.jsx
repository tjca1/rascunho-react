import React from 'react'
import ReactDOM from 'react-dom'
import './estilo'
import Sala from './sala'
import Aluno from './aluno'
import {Cmp_1, Cmp_2} from './cmp_1'




ReactDOM.render(
    <Sala turma='A'>
        <Aluno name='Thiago' />
        <Aluno name='Jose' />
        <Aluno name='Araujo' />
        <Cmp_1 initialValue={0}></Cmp_1>
        <Cmp_2 initialValue='inicio' value='Cmp_2'></Cmp_2>
    </Sala>,
    document.getElementById('app')
)





