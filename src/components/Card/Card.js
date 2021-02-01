import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
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
    <Switch checked={state.Online} onChange={handleChange} name="Online" />
  );
}
