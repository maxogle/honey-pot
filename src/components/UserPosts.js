import { React, useState, useEffect } from 'react'
import UserCard from "./UserCard"

const UserPosts = () =>{
    const [userData, setUserData] = useState([])
    useEffect(() => {
        (async()=> {
            let req = await fetch('http://localhost:8000/posts')
            let res = await req.json()
            setUserData(res)
            
        })()
    }, [])
    console.log(userData)
    return(
        <div>
            {
                userData.map((element) => {
                    return(
                        <UserCard element={element}/>
                    )
                })
            }
        </div>
    )
}

export default UserPosts