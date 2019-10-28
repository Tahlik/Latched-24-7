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
        {shelters.map(shelter => (
          <Shelter
            name={shelter.name}
            address={shelter.address}
            phone={shelter.phone}
            key={shelter.id}
          />
        ))}

      </Grid>
    </div>
  );
};

export default App;
