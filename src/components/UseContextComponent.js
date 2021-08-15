import React, {useState, createContext} from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null);

const UseContextComponent = () => {
    const [input, setInput] = useState("")
    return (
        <div>
            <AppContext.Provider value={{input, setInput}}>
            <Login />
                <User />
                
            </AppContext.Provider>
        </div>
    )
}

export default UseContextComponent
