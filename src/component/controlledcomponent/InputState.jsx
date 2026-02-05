import React, { useState } from 'react'

const InputState = () => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [city, setCity] = useState('');
    //console.log(name);
    //console.log(profession)
    //console.log(city)
    
  return (
    <div>
        <h2>Input field ka value React state control karta hai.</h2>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Your name is: {name}</h2>
        <br /><br />
        <input type="text" placeholder="Enter profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
        <h3>Profession: {profession}</h3>
        <br /><br />
        <input type="text" placeholder='Enter your city' value={city} onChange={(e) => setCity(e.target.value)} />
        <h3>City: {city}</h3>
    </div>
  )
}

export default InputState;