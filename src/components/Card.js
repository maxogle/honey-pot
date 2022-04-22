import React, { useState } from 'react'

const Card = ({element, darkMode, setDarkMode}) =>{
    const [like,setLike]=useState(false)
    let likes = like ? "w0w" : "ew"
    return(
        <div className={darkMode ? "card-div-dark" : "card-div"}>
            <h1>{element.title}</h1>
            <div className="card-img">
            <img src={element.images[0].original} />
            </div>
            <h2>{element.warning_message}</h2>
            <button type="button" onClick={
                (e)=> {
                    e.preventDefault()
                    setLike(!like)
                }
            }>{likes}</button>
        </div>
    )

}
export default Card 