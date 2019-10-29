import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Button, Grid, TextField } from "@material-ui/core";
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

const Verify = ({ setIsVerified }) => {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [{ data }, verify] = useAxios(
    `/.netlify/functions/verifyProvider?phone=${phone}`,
    { manual: true }
  );
  const successful = (data && data === true) || false;

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Phone Number"
        helperText="Ex: 8131234567"
        onChange={event => setPhone(event.target.value)}
        value={phone}
        variant="outlined"
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => setIsVerified(true)}
      >
        SEND
      </Button>
    </Grid>
  );
};

export default Verify;
