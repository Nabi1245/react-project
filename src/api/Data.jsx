import React, { useEffect, useState } from 'react'

const Data = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    },[])

  return (
    <div>
        <h1>User List from API</h1>
        {users.map((user,index) => (
            <div 
            key={user?.id}
            style={{
                border:"1px solid grey",
                padding:"10px",
                marginBottom:"10px",
                borderRadius:"10px",
            }}
            >
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
            </div>
        ))}
    </div>
  )
}

export default Data;