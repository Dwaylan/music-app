import React, { useState } from "react";
import {
  Switch,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 250,
    height: 300,
  },
  card: {
    textAlign: "center,",
  },
});
function Cards(props) {
  const classes = useStyles();
  // card 1* Base level is false/off
  const [toggle, setToggle] = useState(false);
  // card 3*  Base level is set at normal
  const [zone, setZone] = useState(2);
  // card 2* Volume on slider at base level is set to 45
  const [level, setLevel] = useState(45);

  const handleToggleChange = (event, value) => {
    console.log("online switch was clicked", value);
    setToggle(event.target.checked);
  };

  const handleVolumeLevel = (event, newValue) => {
    console.log("volume level changed");
    setLevel(newValue);
  };

  const handleZoneChange = (event) => {
    console.log("quality zone changed");
    setZone(event.target.value);
  };

  return (
    <Grid container justify="center" direction="row" alignItems="center">
      <Card>
        <CardContent>
          <div className={classes.root}>
            <h3>Online Mode</h3>
            <p>Is this application connected to the internet?</p>
            <CardActions>
              <Switch
                checked={toggle}
                onChange={handleToggleChange}
                name="toggle"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </CardActions>
          </div>
        </CardContent>
      </Card>
      <Grid>
        <Card>
          <CardContent>
            <div className={classes.root}>
              <h3>Master Volume</h3>
              <p>Overrides all other sound settings in this application </p>
              <CardActions>
                <Slider
                  Value={level}
                  onChange={handleVolumeLevel}
                  aria-labelledby="discrete-slider-small-steps"
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <div className={classes.root}>
              <h3>Sound Quality</h3>
              <p>
                Manually controll the music quality in the event of a poor
                connection
              </p>
              <CardActions>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={zone}
                    onChange={handleZoneChange}
                  >
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Normal</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <h3>System Notifications</h3>

      {toggle === true ? (
        <p>You are Online.</p>
      ) : (
        <p>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      )}

      {level > 80 ? (
        <p>
          Warning: Listening to music at a high volume could cause long term
          hearing loss
        </p>
      ) : (
        <p></p>
      )}

      {zone === 1 ? (
        <p>
          Warning: Music quality is degraded. Increase quality if your
          connection allows it.
        </p>
      ) : (
        <p></p>
      )}
    </Grid>
  );
}

export default Cards;
