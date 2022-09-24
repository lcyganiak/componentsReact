import React, { useState } from 'react'; 


function ListaUl(props) {
    const [elemty, setelementy] = useState(props.items|| ['Brak el. do wyświetlania'])

const elemntyLi = () => {
    return elemty.map((item, index) => <li key={index}>{item}</li>)
}

    return(
        <ul>
            {elemntyLi()}
        </ul>
    )
}

export default ListaUl;