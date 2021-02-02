import React, { useState } from "react";
import {
  Switch,
  Slider,
  Grid,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
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
    <Grid container justify="center" direction="row" alignItems="center">
      <Card>
        <div className={classes.root}>
          <h3>Online Mode</h3>
          <p>Is this application connected to the internet?</p>
          <Switch
            checked={state.Online}
            onChange={handleChange}
            name="Online"
          />
        </div>
      </Card>
      <Grid>
        <Card>
          <div className={classes.root}>
            <h3>Master Volume</h3>
            <p>Overrides all other sound settings in this application </p>
            <Slider
              defaultValue={0.00000005}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-small-steps"
              step={0.00000001}
              marks
              min={-0.00000005}
              max={0.0000001}
              valueLabelDisplay="auto"
            />
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Switches;
