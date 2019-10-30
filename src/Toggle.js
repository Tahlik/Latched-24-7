import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Switch, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

const useStyles = makeStyles({
  checkbox: {
    marginRight: 16
  },
  container: {
    height: 100,
    padding: 50
  },
  flex: {
    display: "flex",
    alignItems: "center"
  }
});

const Toggle = () => {
  const classes = useStyles();
  const [isOnlineToggle, setIsOnlineToggle] = useState(true);
  const [_, setStatus] = useAxios(
    `/.netlify/functions/setStatus?is_online=${isOnlineToggle}`,
    { manual: true }
  );

  const setOnline = status => {
    setIsOnlineToggle(status);
    setStatus(status);
  }

  return (
    <Grid item xs={6}>
      <Button fullWidth  className={classes.button}
        startIcon={<HomeSharpIcon/>}
        variant="contained" 
        color="primary" 
        href={`https://zealous-booth-9032c9.netlify.com/`}>Latched 24/7</Button>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Offline</Grid>
          <Grid item>
            <Switch
              checked={isOnlineToggle} 
              onChange={event => setOnline(event.target.checked)}
              color="primary"
              alignItems="center"
              />
          </Grid>
          <Grid item>Online</Grid>
        </Grid>
      </Typography>
    </Grid>
  );
};

export default Toggle;
