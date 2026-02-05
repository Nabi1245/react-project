import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    //console.log(count);

    
    // useEffect(() =>{  
    //     console.log("Component Loaded")
    // },[count])

    // Home Work
    useEffect(() => {
        console.log("Count updated to:", count)
    },[count])

    
  return (
    <div>
        {/* <h1>{count}</h1> */}
        <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default UseEffect;