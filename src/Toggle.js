import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Switch, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Off</Grid>
          <Grid item>
            <Switch
              checked={isOnlineToggle} 
              onChange={event => setOnline(event.target.checked)}
              color="primary"
              alignItems="center"
              />
          </Grid>
          <Grid item>On</Grid>
        </Grid>
      </Typography>
    </Grid>
  );
};

export default Toggle;
