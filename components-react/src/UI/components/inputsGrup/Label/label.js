import React, { useState } from 'react';

function Label(props) {
    const [fors, setfor] = useState(props.for || null)
    const [tekst, settekst] = useState(props.tekst || 'Brak opisu')

    const opis = () => {
        console.log(props.required)
        if(props.required === true) {
            return <p>Wartość wymagana</p>
        } else {
            return <p>Wartość opcjonalna</p>
        }
    }
    return (
        <>
        <label htmlFor={fors}>
            {tekst} {opis()}
        </label>
        </>
    )
}
export default Label;