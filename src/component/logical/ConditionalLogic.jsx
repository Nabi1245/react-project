import React, { useState } from 'react'

const ConditionalLogic = () => {
    const [show, setShow] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
        {show ? <h2>Hello Nabi 👋</h2> : null}
        {/* {show && <h2>Hello Nabi 👋</h2>} */}
        <button onClick={()=> setShow(!show)}>Click</button>
        <br /><br />

        <button onClick={()=> setIsLogin(!isLogin)}> {isLogin ? "Logout" : "Login"} </button>
        <h3>{isLogin ? "Welcome User" : "Please Login"}</h3>
    </div>
  )
}

export default ConditionalLogic;