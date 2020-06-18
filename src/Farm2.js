import React, { useContext } from 'react';
import { MyContext } from './contextData/MyContext';



const Farm2 = () => {
    const { state } = useContext(MyContext)
    return (
        <div>
            <p>{JSON.stringify(state, null, 4)}</p>
        </div>
    )
}

export default Farm2
