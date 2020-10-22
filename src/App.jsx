import './App.css'
import React from 'react'


import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default props => (
    <div className="App">

        <Card titulo='Exercicio #5'>
            <Condicional numero='11' />
        </Card>

        <Card titulo='Exercicio #4'>
            <Repeticao />
        </Card>

        <Card titulo='Exercicio #3'>
            <Primeiro />
        </Card>

        <Card titulo='Exercicio #2'>
            <ComParametro titulo="Esse é o titulo" Subtitulo="Subtitulo" />
        </Card>

        <Card titulo='Exercicio #1'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                </ul>
            </ComFilhos>
        </Card>

    </div>
)