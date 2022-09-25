import React, {useState, useRef} from 'react'
import uniqid  from 'uniqid';
import './Textarea.scss'

function Textarea(props) {
    const [idAndFor, setIdAndFor] = useState(uniqid());
    
    const [rowsAndCols, setrowsAndCols] = useState(props.rowsAndCols || {
        rows: "4",
        cols: '50'
    })
    const [textArea, setTextArea] = useState(props.textArea)
    const xd = useRef(textArea)
    const changeText = () => {
        console.log(xd)
        console.log(props.textArea)
    }
    const renderTextArea = () => {
        console.log(props)
        // gdy nie ma tesktu wchodzimy w else i wytwarzamy textarea z paleholderem
        if(textArea !== undefined) {
            return (
                <div className='textArea'>
                <label htmlFor={idAndFor}>Review of W3Schools:</label>
    
                <textarea ref={xd} id={idAndFor} name="w3review" rows={rowsAndCols.rows} cols={rowsAndCols.cols} >
                   {textArea}
                </textarea>
    
            </div>
            )
        } else {
            return (
                <div className='textArea'>
                <label htmlFor={idAndFor}>Review of W3Schools:</label>
    
                <textarea id={idAndFor} name="w3review" rows={rowsAndCols.rows} cols={rowsAndCols.cols} placeholder="Wpisz tekst">
                </textarea>
    
            </div>
            )
        }
    }

    return (
        <>
        {renderTextArea()}

            <button onClick={changeText}>Zmina tekstu</button>
        </>
    )
}

export default Textarea