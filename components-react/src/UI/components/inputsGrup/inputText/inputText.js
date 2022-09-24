import './inputText.scss'
import React, {useState} from 'react';
import Label from '../Label/label'

function InputText(props) {
const [idandFor, setidandFor] =useState(props.idandFor)
const [placeholderText, setplaceholder] = useState(props.placeholder || 'nie ma opisu')
const [tekst, settekst] = useState(props.text || 'nie ma opisu')

const [required, setrequired] = useState(props.required || false)
// jeżeli chemy uzywać componentu w componecie, nalezy stworzyć funkcję, która zwróci component i 
 // dopiero uzyć 
const labelRender = () => {
    return <Label for={idandFor} tekst={tekst} required={required} ></Label>
}
    return (
        <> 
            {labelRender()}
            <input type="text" id={idandFor} placeholder={placeholderText} required ={required}/>
            
            
            <label htmlFor={idandFor}>
            {tekst} 
            </label>
            <input type="text" id={idandFor} placeholder={placeholderText} required/>
        </>
    )
}

export default InputText;