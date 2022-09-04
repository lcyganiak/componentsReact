import './buttonPraimary.scss';
import React, { useState } from 'react';

function ButtonPraimary(props) {
    const [opisButtona, setOpisButtona] = useState(props.value || 'brak Opisu')
    const [propsTablica, setPropsTablica] = useState(props.tablica || [])
    const [disable] = useState(props.disabel || true)

    return (
        <div>
            <button disabled={disable} className='btn-praimary'>{opisButtona.toUpperCase()}</button>
        </div>

    )

}

export default ButtonPraimary;