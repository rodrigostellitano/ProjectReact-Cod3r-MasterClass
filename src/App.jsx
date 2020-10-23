import './App.css'
import React from 'react'


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'

import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default props => (
    <div className="App">
        <h1>FUNDAMENTOS REACT</h1>

        <div className='Cards'>

            <Card titulo='Exercicio #10' color="#21D775">
                <Mega qtdNumero={6} />
            </Card>

            <Card titulo='Exercicio #9' color="#601F61">
                <Contador contador={100} />
            </Card>

            <Card titulo='Exercicio #8' color="#FA3133">
                <Input />
            </Card>

            <Card titulo='Exercicio #7' color="#FA6777">
                <Super />
            </Card>

            <Card titulo='Exercicio #6' color="#AAA">
                <Pai sobrenome='Freitas' />
            </Card>

            <Card titulo='Exercicio #5' color="#FA6900">
                <Condicional numero='11' />
            </Card>

            <Card titulo='Exercicio #4' color="#FFf100">
                <Repeticao />
            </Card>

            <Card titulo='Exercicio #3' color="#BCEAAA">
                <Primeiro />
            </Card>

            <Card titulo='Exercicio #2' color="#D7312C">
                <ComParametro titulo="Esse é o titulo" Subtitulo="Subtitulo" />
            </Card>

            <Card titulo='Exercicio #1' color="#25B0DB">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                    </ul>
                </ComFilhos>
            </Card>
        </div>
    </div>
)