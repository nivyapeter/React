import React, { useState } from "react";
import "./users.css";
import axios from "axios";

export default function Users() {
    const [data,setData] = useState();

const fetchUsers =async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    setData(response.data);
}

  return <div className="users">Users
  <div className=""> 
    <button onClick={fetchUsers}>Get Users</button>
    {data ?.map((user) => {
        return(
        <div key={user.id}>
            {user.name}
            
        </div>
        );
    })}
  </div>
  </div>;
}
