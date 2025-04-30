import React, { useContext, useState, useEffect, useMemo } from "react";
import { LgnContext } from "../context/LgnContextProvider";

const Delhi = () => {
  // useContext: Access login data from LgnContext
  const login = useContext(LgnContext);

  // useState: Manage local state for toggling login details visibility
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  // useEffect: Handle side effects when login changes
  useEffect(() => {
    console.log("Login data updated:", login);
    // Example: Perform an action when login changes (e.g., fetch data, update UI)
    if (login?.isAuthenticated) {
      console.log("User is authenticated!");
    }
  }, [login]); // Dependency array: Run effect when login changes

  // useMemo: Memoize formatted login data to avoid unnecessary re-computation
  const formattedLogin = useMemo(() => {
    if (!login) return "No login data available";
    return login.isAuthenticated
      ? `User: ${login.user || "Unknown"}, Status: Logged in`
      : "User: Not logged in";
  }, [login]); // Recompute only when login changes

  // Toggle login details visibility
  const toggleLoginDetails = () => {
    setShowLoginDetails((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: 0,
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h3>Delhi</h3>
      <button
        onClick={toggleLoginDetails}
        style={{ margin: "10px", padding: "5px 10px" }}
      >
        {showLoginDetails ? "Hide Login Details" : "Show Login Details"}
      </button>
      {showLoginDetails && <p>{formattedLogin}</p>}
    </div>
  );
};

export default Delhi;