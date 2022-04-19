import React from 'react'
import { useState } from 'react'
import Card from './Card.js'

const CardContainer = ({ data }) => {
    console.log(data)
    return(
    <div>
        {data.map((element) => {
            return (
                <Card element={element} />
            )
        })}
    </div>
)}














export default CardContainer