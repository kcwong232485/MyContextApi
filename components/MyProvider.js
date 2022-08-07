import React, { useState } from 'react'
//import {MyContext} from './MyContext';

export const MyContext = React.createContext();

export const ContextProvider = ({children}) => {

    const [books, setbooks] = useState({
        id: 1,
        name:"Learning React",
        author:"John Doe",
        serialnumber: 1234
    })   

    const [profiles, setprofiles] = useState({
        company: "ABC.com",
        address:"Asia",
        tel:"12345678"
    })
    
    let passingValues = {
        book: [books, setbooks], 
        profile: [profiles, setprofiles]
    };

    return (
        <MyContext.Provider value={ passingValues }>
            {children}
        </MyContext.Provider>
    )
}
