import { React, useState, useEffect } from 'react'
import UserCard from "./UserCard"
import Form from "./Form"

const UserPosts = () =>{
    const [userData, setUserData] = useState([])
    const [postModal, setPostModal] = useState(false)
    

    const togglePost = () => {
        setPostModal(!postModal)
    }
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
            {
                postModal ? <Form setUserData={setUserData} postModal={postModal} setPostModal={setPostModal}/> : <img className="modal-button" src="post.png" alt ="post-button" onClick={togglePost}/>
            }
            
        </div>
    )
}

export default UserPosts