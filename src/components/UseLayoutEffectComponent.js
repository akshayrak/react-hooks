import React, {useLayoutEffect,useState} from 'react'
import axios from 'axios'

const UseLayoutEffectComponent = () => {
    const [data,setData] = useState([])
    useLayoutEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setData(response.data.slice(6))
        })
    },[])


    return (
        <div>
            <h1>useLayoutEffect</h1>
            {
                data.map(x=><p key={x.id}>{x.username}</p>)
            }
        </div>
    )
}

export default UseLayoutEffectComponent
