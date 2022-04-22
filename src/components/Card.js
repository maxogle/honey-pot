import React, { useState } from 'react'

const Card = ({element, darkMode, setDarkMode}) =>{
    const [like,setLike]=useState(false)
    let likes = like ? "w0w" : "ew"
    const toggleLike = () => {
        setLike(!like)
    }
    return(
        <div className={darkMode ? "card-div-dark" : "card-div"}>
            <h1>{element.title}</h1>
            <div className="card-img">
            <img src={element.images[0].original} />
            </div>
            <h2>{element.warning_message}</h2>
            {
                like ? <img className="like-btn" src="DisLikeButton.png" alt="a-sad-kitty" onClick={toggleLike}/> : <img className="like-btn" src="LikeButton.png" alt="a-happy-kitty" onClick={toggleLike}/> 
            }
        </div>
    )

}
export default Card 