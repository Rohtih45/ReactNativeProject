import React from "react";
import Delhi from "./Delhi";

const MainComponent = () => {
    return(
        <div>
            <h2 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // Full viewport height to center vertically
                marginTop: 100
            }}>MainComponent</h2>
            <Delhi/>
        </div>
    ); 
};

export default MainComponent;
