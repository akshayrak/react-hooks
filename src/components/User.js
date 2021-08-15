import React,{useContext} from 'react'
import {AppContext} from './UseContextComponent'

const User = () => {
    const {input} = useContext(AppContext)
    return (
        <div>
            {input}
        </div>
    )
}

export default User
