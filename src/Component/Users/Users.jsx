// import React from 'react';
// import PropTypes from 'prop-types';
"use client"
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-3 my-12">
            {
                users.map((user)=>{
                    return <div key={user.id} >
                       <div className="bg-white rounded-lg p-4 text-center w-full">
                       <p className="text-2xl text-black font-bold">{user.name}</p>
                        <p className="text-lg text-black font-bold">Email: {user.email}</p>
                        <p className="text-lg text-black font-bold">Address: {user.address.street},{user.address.suite},{user.address.city} </p>
                        <p className="text-lg text-black font-bold">Phone: {user.phone}</p>
                        <p className="text-lg text-black font-bold">Website: {user.website}</p>
                       </div>
                    </div>
                })
            }
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;