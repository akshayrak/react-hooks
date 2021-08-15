import React, {useReducer} from 'react'

const reducer = (state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count+1 }
        case "UPDATE-TEXT":
            return { text: action.payload}
    
        default:
            break;
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer,{count: 0 ,text:""})
    return (
        <div>
            <h1>useReducer</h1>
            <br/>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>increase</button>
            <br/>
            <br/>
            <div>
                <input type="text" value={state.text} onChange={(e)=>dispatch({type:"UPDATE-TEXT",payload:e.target.value})} />
                <h3>{state.text}</h3>
            </div>
        </div>
    )
}

export default UseReducerComponent
