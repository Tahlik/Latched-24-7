import React from "react";
import useAxios from "axios-hooks";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
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

const Find = () => {
  const classes = useStyles();
  const [{ data }, refetch] = useAxios(`/.netlify/functions/getProvider`);
  const provider = (data && data.provider) || {};

  return (
    <Grid item xs={12}>
      <Paper className={classes.container}>
        <div className={classes.flex}>
          <div>
            <Typography variant="h6">{provider.name}</Typography>
            <Typography>{provider.credentials}</Typography>
            <Typography>{provider.phone}</Typography>
          </div>
          <Button href={`tel:${provider.phone}`}>Call</Button>
        </div>
      </Paper>

      <Button fullWidth variant="contained" color="primary" onClick={refetch}>NEW PROVIDER</Button>
    </Grid>
  );
};

export default Find;
