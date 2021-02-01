import React, { useState } from "react";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState({ name: "", Password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.Password == user.Password && details.name == user.name)
      console.log("logged in");
    else {
      console.log("credential errors");
    }
    setUser({
      name: details.name,
      Password: details.Password,
    });
  };

  const Logout = () => {
    console.log("logged out");
    setUser({ name: "", Password: "" });
  };

  return (
    <div className="App">
      {user.name && user.Password !== "" ? (
        <div className="welcome">
          <Dashboard />
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>logout</button>
        </div>
      ) : (
        <Form Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
