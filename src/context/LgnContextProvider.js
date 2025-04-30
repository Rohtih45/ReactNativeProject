import React, { createContext, useState } from "react";

export const LgnContext = createContext();



const LgnContextProvider = ({ children }) => {
    const festival = React.createContext("Diwali");
    const [user, setUser] = useState("Hello World");
    return(
        <LgnContext.Provider value={festival}>

            {children}
        </LgnContext.Provider>
    )
}

export default LgnContextProvider;