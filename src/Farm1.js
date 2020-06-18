import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './contextData/MyContext';

const Farm1 = () => {
    const { state: { testing }, display } = useContext(MyContext);
    return (
        <div>
            {testing.map((a, i) => {
                return (
                    <Link to="/Farm2">  <button class="btn btn-primary" onClick={() => display(i)}>Button{i}</button></Link>
                )
            })}
        </div>
    )
}

export default Farm1