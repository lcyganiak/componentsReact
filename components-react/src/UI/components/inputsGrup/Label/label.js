import React, { useState } from 'react';

function Label(props) {
    const [fors, setfor] = useState(props.for || null)
    const [tekst, settekst] = useState(props.tekst || 'Brak opisu')
    return (
        <>
        <label for={fors}>
            {tekst}
        </label>
        </>
    )
}
export default Label;