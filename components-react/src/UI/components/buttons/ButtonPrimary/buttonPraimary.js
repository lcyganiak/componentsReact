import './buttonPraimary.scss';
import React, { useState } from 'react';

function ButtonPraimary(props) {
    const [opisButtona, setOpisButtona] = useState(props.value || 'brak Opisu')

    const [disabled, set] = useState(props.disabled || false)
    console.log(disabled, props.disabled)
    const paragraf = document.createElement('p')

    return (
        <div>
            <p></p>
            <button disabled={disabled}  className='btn-praimary'>{opisButtona.toUpperCase()}</button>
        </div>
    )
}
export default ButtonPraimary;