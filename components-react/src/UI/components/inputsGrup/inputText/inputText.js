import './inputText.scss'
import React, {useState} from 'react';
import Label from '../Label/label'

function InputText(props) {
const [idandFor, setidandFor] =useState(props.idandFor)
const [placeholderText, setplaceholder] = useState(props.placeholder || 'nie ma opisu')
const [tekst, settekst] = useState(props.text || 'nie ma opisu')
    return (
        <>
            <Label for={idandFor} tekst={tekst}></Label>
            <input type="text" id={idandFor} placeholder={placeholderText}/>
        </>
    )
}

export default InputText;