import React, {useRef, useState} from 'react'

const UseRefComponent = () => {
    const [text,setText] = useState("")
    const inputRef = useRef(null)
    return (
        <div>
            <h1>useRef</h1>
            <br/>
            {text}
            <br/>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{
                setText(inputRef.current.value)
                inputRef.current.value=""
                inputRef.current.focus()
            }}>submit</button>
        </div>
    )
}

export default UseRefComponent
