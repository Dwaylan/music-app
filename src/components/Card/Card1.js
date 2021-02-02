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
        <CardContent>
          <div className={classes.root}>
            <h3>Online Mode</h3>
            <p>Is this application connected to the internet?</p>
            <CardActions>
              <Switch
                checked={state.Online}
                onChange={handleChange}
                name="Online"
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
                  defaultValue={0.00000005}
                  aria-labelledby="discrete-slider-small-steps"
                  step={5}
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
                  >
                    <MenuItem>Low</MenuItem>
                    <MenuItem>Normal</MenuItem>
                    <MenuItem>High</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Cards;
