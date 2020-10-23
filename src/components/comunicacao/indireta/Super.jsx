import React, { useState } from 'react'

import Sub from './Sub'

export default (props) => {

    const [texto, setTexto] = useState(0)
    const [num, setNum] = useState(0)

    function quandoClicar(valorRandom, fim) {
        setNum(valorRandom)
        setTexto(fim)
    }

    return (
        <div>
            <h4> Valor: {num}</h4>
            <h4> Text: {texto}</h4>
            <Sub onClicker={quandoClicar}></Sub>
        </div>
    )
}
