import {React, useState} from 'react'

import Card from './Card.js'

// Object.keys(element).includes('warning_message')
const CardContainer = ({ data }) => {
    // const[criminals,setCriminals] = useState([])
    let exists = data.filter((element) => {
        if (element.warning_message != null){
            return element;
        }
    
    })
    console.log(exists)
    // setCriminals(exists)
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