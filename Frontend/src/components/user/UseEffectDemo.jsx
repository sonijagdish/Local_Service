import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setcount] = useState(0)
    // useEffect(()=>{
    //     console.log("use effect called...")
    // },[])

    useEffect(()=>{
        console.log("use effect called...")
    },[count]) 
    //[count] --> if any changes happens with count variable useEffect will call again..
    //()=>{} call back function
    //[] --> depedancy array


  return (
    <div className='text-center'>
        <h1>UseEffectDemo</h1>
        <button onClick={()=>{setcount(count+1)}}><h1 className='underline text-green-500 bg-red-200'>Increment</h1></button>
        <p>Count: {count}</p>
    </div>
  )
}