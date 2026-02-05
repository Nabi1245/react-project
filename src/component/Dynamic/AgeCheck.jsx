import React from 'react'

const AgeCheck = () => {
    const name = "Nabi Ahmad";
    const profession = "Software Developer";
    const city = "Mumbai";
    const age = 25;
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
        <p>City: {city}</p>
        <h1>{age > 18 ? "Adult" : "Child"}</h1>
    </div>
  )
}

export default AgeCheck;