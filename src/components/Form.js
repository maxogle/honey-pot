import {React, useState} from 'react'
const Form = ({setData}) => {
    const [id, setId] = useState(0)
    const [post, setPost] = useState([])
    const[form,setForm]=useState({
        id: id,
        title: '',
        img: '',
        warning_message: ''
    })
return (
    <div>
        <form onSubmit={async(e)=> {
            e.preventDefault()
            let req = await fetch("http://localhost:8000/posts", {
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(form)
        })
        let res = await req.json()
        setPost((whatever)=> [...whatever, res])

        }}>
    <div>
        <label>Name</label>
        <input type="text" name="title" onChange={(e)=>{setForm({...form, title: e.target.value})}}/>
        <label>"Profile" Photo</label>
        <input type="text" name="img" onChange={(e)=>{setForm({...form, img: e.target.value})}}/>
        <label>What you'd be wanted for ;)</label>
        <input type="text" name="warning_message" onChange={(e)=>{setForm({...form, warning_message: e.target.value})}}/>
    </div>
    <button type="submit" onClick={(()=> {
        setId(id+1)
    
    })}>
          Add ya terrorist self
        </button>

        </form>
    </div>    
)
}
export default Form;