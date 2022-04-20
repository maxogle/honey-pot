import React from 'react'
import { useState, useEffect } from 'react'
import CardContainer from './CardContainer.js'
import Form from './Form.js'
import About from './About.js'
import UserPosts from './UserPosts.js'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js"


const HomePage = () => {
    let [data, setData] = useState([])
    let [allData,setAllData] = useState([])
    let [page, setPage] = useState('/')
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
            {/* <img className="page-header" src="./HONEYPOT.png" alt='header' /> */}
            <NavBar onChangePage={setPage}/>
             <Switch>
                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/Home">
                    <CardContainer data={data}/> 
                </Route>
                
                <Route path="/UserPosts"> 
                    <UserPosts />
                </Route>
            </Switch>
            
        </div>
    )
}





export default HomePage 