import React from 'react'
import { useParams } from 'react-router-dom';

const DynamicUser = () => {
    const params = useParams();
    //console.log("params", params);
  return (
    <div>Hello {params.userName} 👋</div>
  )
}

export default DynamicUser;