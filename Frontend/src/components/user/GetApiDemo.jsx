import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const GetApiDemo = () => {
    const [users, setusers] = useState([])

    const getUsers = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log("response...",res);
        setusers(res.data.data)
    }

    const onDelete = async(id)=>{
        try{
            const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)    
            console.log("delete response...",res)
            getUsers()
        }catch(err){
            console.log("error in delete",err)
        }
    }
    //component --> load --> useEffec call --> function call..
    useEffect(()=>{
        //api logic..
        getUsers()
    },[])
  return (
    <div className='text-center'>
        <table className='border-collapse border-2 border-zinc-700 m-auto mt-5 w-4/5'>
            <thead>
                <tr>
                    <th className='border-zinc-700 p-8'>ID</th>
                    <th className='border-zinc-700 p-8'>Name</th>
                    <th className='border-zinc-700 p-8'>Email</th>
                    <th className='border-zinc-700 p-8'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user._id}>
                        <td className='border-zinc-700 p-8'>{user._id}</td>
                        <td className='border-zinc-700 p-8'>{user.name}</td>
                        <td className='border-zinc-700 p-8'>{user.email}</td>
                        <td className='border-zinc-700 p-8'><button className='bg-red-500 px-4 rounded-lg text-white py-2 cursor-pointer' onClick={() => onDelete(user._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}