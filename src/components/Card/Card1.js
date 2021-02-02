import React, { useState } from "react";
import { Switch } from "@material-ui/core";
function Switches() {
  const [state, setState] = useState({
    Online: true,
    Offline: false,
  });

  const handleChange = (event, val) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("switch was clicked");
    console.log(val);
  };

  return (
    <div>
      <h3>Online Mode</h3>
      <p>Is this application connected to the internet?</p>
      <Switch checked={state.Online} onChange={handleChange} name="Online" />
    </div>
  );
}

export default Switches;
