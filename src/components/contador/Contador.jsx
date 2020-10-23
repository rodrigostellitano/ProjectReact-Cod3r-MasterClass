import './Contador.css'
import React, { Component } from 'react'


export default class Contador extends Component {



    constructor(props) {
        super(props)
        this.state = {
            contador: props.contador || 1,
            valor: 10
        }

    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.contador
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.contador
        })
    }
    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>

                <div>
                    <label for='passoInput'> Passo: </label>
                    <input id="passoInput" value={this.state.contador} type="number"
                        onChange={e => this.setState({ contador: +e.target.value })} />

                    <h4>Valor: {this.state.valor}</h4>
                </div>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>

            </div>
        )
    }
}


