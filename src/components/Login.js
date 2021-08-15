import React,{useContext} from 'react'
import {AppContext} from './UseContextComponent'


const Login = () => {
    const {setInput} = useContext(AppContext)
    return (
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
        </div>
    )
}

export default Login
