import React from 'react'
import { useState, useEffect } from 'react'
import CardContainer from './CardContainer.js'
import Form from './Form.js'
import Header from './Header.js'
import UserPosts from './UserPosts.js'

const HomePage = () => {
    let [data, setData] = useState([])
    let [allData,setAllData] = useState([])
    useEffect(() => {
        (async() =>{
            let req = await fetch('https://api.fbi.gov/wanted/v1/list')
            let res = await req.json()
            setData(res.items)
            setAllData(res)
        })()
    }, [])
    console.log(allData)
    return(
        <div>
            <Header/>
            <img className="page-header" src="./HONEYPOT.png" alt='header' />
           <CardContainer data={data}/> 
           <Form setData={setData}></Form>
           <UserPosts />
        </div>
    )
}





export default HomePage 