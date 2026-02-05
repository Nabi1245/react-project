import React from 'react'

const UserProps = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Profession: {props.profession}</p>
        <p>City: {props.city}</p>
    </div>
  )
}

export default UserProps;