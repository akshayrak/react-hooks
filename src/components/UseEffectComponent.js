import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UseEffectComponent = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setData(response.data.slice(6))
        })
    },[])


    return (
        <div>
            <h1>useEffect</h1>
            {
                data.map(x=><p key={x.id}>{x.username}</p>)
            }
        </div>
    )
}

export default UseEffectComponent
