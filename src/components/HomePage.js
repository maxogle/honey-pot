import React from 'react'
import { useState, useEffect } from 'react'
import CardContainer from './CardContainer.js'

const HomePage = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        (async() =>{
            let req = await fetch('https://api.fbi.gov/wanted/v1/list')
            let res = await req.json()
            setData(res.items)
        })()
    }, [])
    
    return(
        <div>
            <img src="/home/max/Development/code/phase-2/honey-pot/public/HONEYPOT.png" alt='header' />
           <CardContainer data={data}/> 
        </div>
    )
}





export default HomePage 