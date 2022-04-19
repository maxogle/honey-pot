import {React, useState} from 'react'

import Card from './Card.js'

const CardContainer = ({ data }) => {
    
    let exists = data.filter((element) => {
        if (element.warning_message != null){
            return element;
        }
    })
    console.log(exists)
    return(
    <div>
        {exists.map((element) => {
            return (
                <Card element={element} />
            )
        })}
    </div>
)}

// const[criminals,setCriminals]=useState([])
//     let list = []
//     for (const warning_message of data){
//         if (warning_message=''){
//             list.push(data[warning_message])
//         }
//     }
//     setCriminals(list)
//     console.log(criminals)
 
export default CardContainer