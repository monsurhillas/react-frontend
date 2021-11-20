import React from "react";
import UserList from "../components/UserList";

const Users = () => {
    const USERS =[{id: 'u1',name: 'Monsur', 
    image:'https://github.com/monsurhillas007/monsurhillas007.github.io/blob/main/assets/images/monsurself.png', places: 3}]

    return (
    
    <p> <UserList items ={USERS}/> </p>
    
    )
    
}

export default Users;