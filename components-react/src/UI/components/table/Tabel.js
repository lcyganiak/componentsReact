import React, { useState, useEffect } from 'react'
import './Tabel.scss'

function Tabel(props) {
    const [caption, setCaption] = useState(props.caption || "Brak tytułu")
    const [tHead, setThead] = useState(props.tHead || [])
    const [tData, setTdata] = useState(props.tData || [])

    const [liczba, setLiczba] = useState(0)



    const createdTHead = () => {
        const tHeadAddMoreBtn = [...tHead]
        tHeadAddMoreBtn.push("więcej")
        // setThead(tHeadAddMoreBtn)
        console.log(tHead)
        return tHeadAddMoreBtn.map((item, index) => <th key={index}>{item}</th>)
    }
    const showMor = (info) => {
        console.log(info)
    }
    const modyfikator = () => {
        setTdata([...tData, {
            name: "Janiana",
            nazwisko: "Dobrawolska",
            podstawa: 4500,
            premia: 2000,
            kwotaLaczna: 6500,
            wiek: 20,
            stanowisko: 'prezes',
            staz: 0,
            urlop: 25,
            przelozony: "Krzysztof Jarzyna",
            email: "a.nowak@sthspzpoo.pl",
            telefon: "856859658"
        }])
    }
    const createdTdata = () => {
        return tData.map((item, index) => {
            // const [name, nazwisko, podstawa, premia, kwotaLaczna] = item
            // destrukturyzacja polega na stworzeniu zmiennych o takie samej 
            // nazwie jak klucze w objekcie po znaku rónawm się

            return (
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.nazwisko}
                    </td>
                    <td>
                        {item.podstawa}
                    </td>
                    <td>
                        {item.premia}
                    </td>
                    <td>
                        {item.kwotaLaczna}
                    </td>
                    <td>
                        <button onClick={() => showMor(item)}> więcej info</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1>{caption}</h1>

            <table>
                <tr>
                    {createdTHead()}
                </tr>
                {createdTdata()}
            </table>

            <div>
                <button onClick={() => modyfikator()} >Dodawanie</button>
                <p>{liczba}</p>
            </div>
        </div>
    )
}

export default Tabel