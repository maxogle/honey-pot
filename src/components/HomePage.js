import React from 'react'
import { useState, useEffect } from 'react'
import CardContainer from './CardContainer.js'
import Form from './Form.js'
import About from './About.js'
import UserPosts from './UserPosts.js'
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js"


const HomePage = ({darkMode, setDarkMode}) => {
    let [data, setData] = useState([])
    let [allData,setAllData] = useState([])
    let [page, setPage] = useState('/')
    let toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
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
            {
                darkMode ? <img  src="./LightMode.png" alt="Light-Mode-Button" className="dark-mode-btn" onClick={toggleDarkMode}/> : <img  src="./DarkMode.png" alt="Dark-Mode-Button" className="dark-mode-btn" onClick={toggleDarkMode}/>
            }
            <NavBar onChangePage={setPage}/>
             <Switch>
                <Route path="/about">
                    <About darkMode={darkMode} setDarkMode={setDarkMode}/>
                </Route>

                <Route exact path="/">
                    <CardContainer data={data} darkMode={darkMode} setDarkMode={setDarkMode}/> 
                </Route>
                
                <Route path="/UserPosts"> 
                    <UserPosts />
                </Route>
            </Switch>
            
        </div>
    )
}





export default HomePage 