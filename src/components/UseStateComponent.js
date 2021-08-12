import React, {useState} from 'react'

const UseStateComponent = () => {
    const [count,setCount] = useState(0)
    const [text, setText] = useState("something")
    return (
        <div>
            <h1>useState</h1>
            <br/>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>increase</button>
            <br/>
            <br/>
            <div>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default UseStateComponent
