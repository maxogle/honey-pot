import React, { useState } from 'react'

const Card = ({element}) =>{
    return(
        <div>
            <h1>{element.title}</h1>
            <img src={element.images[0].original} />
            <h2>{element.warning_message}</h2>
        </div>
    )

}





export default Card 