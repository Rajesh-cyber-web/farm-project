import React, { createContext } from 'react';
import useFarmHooks from '../UseFarmHooks'

export const MyContext = createContext();
export const MyProvider = props => {
    return (
        <MyContext.Provider value={{ ...useFarmHooks() }}>
            {props.children}
        </MyContext.Provider>
    )
}