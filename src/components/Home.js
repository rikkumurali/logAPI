import React from 'react'
import { useSelector } from "react-redux";

const Home = () => {

    const { message } = useSelector((state) => state.auth);
    console.log('Learning:', message)
    
    return (
        <>
            <div>{message}</div>
        </>
    )
}

export default Home