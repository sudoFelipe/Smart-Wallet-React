import { useState } from 'react';
import './TextField.css'

const TextField = (props) => {

    const placeHolderConcatenado = `${props.placeholder}...`;

    const mudancaDeValor = (event) => {
        props.alterValue(event.target.value)
    }

    return (
        <div className="textField">
            <label>{props.label}</label>
            <input value={props.valor} onChange={mudancaDeValor} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField