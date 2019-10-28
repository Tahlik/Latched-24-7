import React from "react";
import useAxios from "axios-hooks";
import { Grid } from "@material-ui/core";

import Navigation from "./Navigation";
import Shelter from "./Shelter";

const App = () => {
  const [{ data }, refetch] = useAxios(`/.netlify/functions/getShelters`);
  const shelters = (data && data.shelters) || [];

  return (
    <div>
      <Navigation reloadShelters={refetch} />

      <Grid container spacing={1}>
        <p>Hello</p>
      </Grid>
    </div>
  );
};

export default App;
