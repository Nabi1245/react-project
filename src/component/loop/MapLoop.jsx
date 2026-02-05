import React, { use, useState } from "react";

const MapLoop = () => {
  const [showUsers, setShowUsers] = useState(false);
  const users = [
    {
      id: 1,
      name: "Nabi Ahmad",
      profession: "Sofrware Developer",
      city: "Mumbai",
    },
    { id: 2, name: "Haroon", profession: "Data Science", city: "Delhi" },
    { id: 3, name: "Rehan", profession: "Computer Science", city: "Pune" },
  ];
  return (
    <div>
      <h1>Show data loop using Map Loop</h1>
      <button 
        onClick={() => setShowUsers(!showUsers)}
      >
        {showUsers ? "Hide Users" : "Show Users"}
       
      </button>
      <br />
      <br />

      {showUsers &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "10px solid grey",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Name: {user.name}</h3>
            <h4>Profession: {user.profession}</h4>
            <p>City: {user.city}</p>
          </div>
        ))}
    </div>
  );
};

export default MapLoop;
