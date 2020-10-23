import React from 'react'

import Filho from './Filho'

export default props =>
    <div>
        <h3>Componente filho</h3>
        <Filho sobrenome={props.sobrenome}>Rodrigo</Filho>
        <Filho sobrenome="Stellitano">Rafael</Filho>
        <Filho sobrenome="Stellitano">Joao</Filho>
    </div>