import React from 'react'
import { useState, useEffect } from 'react'

const HomePage = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        (async() =>{
            let req = await fetch('https://api.fbi.gov/wanted/v1/list')
            let res = await req.json()
            setData(res)
        })()
    }, [])
    console.log(data)
    return(
        <div>

        </div>
    )
}





export default HomePage 