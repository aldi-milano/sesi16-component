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
        <div id="count">
            <button onClick={pengurangan}>-</button>            
            <span>{count}</span>
            <button onClick={pertambahan}>+</button>            
        </div>
    )

}

export default Count