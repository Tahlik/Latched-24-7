import React from "react";
import useAxios from "axios-hooks";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
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
  },
  
});

const Find = () => {
  const classes = useStyles();
  const [{ data }, refetch] = useAxios(`/.netlify/functions/getProvider`);
  const provider = (data && data.provider) || {};
  
  return (
    
    <Grid item xs={12}>
      <Button fullWidth  className={classes.button}
        startIcon={<HomeSharpIcon/>}variant="contained" color="primary" href={`src/Home.js`}>Latched 24/7</Button>
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
