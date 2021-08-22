import { useState } from "react";

function Count () {

    const [count, setCount] = useState(0)

    function pengurangan () {
        if(count <= 0) {
            return 0
        } else {
        setCount(count -1)
        }
    }

    function pertambahan () {
        setCount(count +1)
    }

    return (
        <>
            <button onClick={pengurangan}>-</button>            
            <h3>{count}</h3>
            <button onClick={pertambahan}>+</button>            
        </>
    )

}

export default Count