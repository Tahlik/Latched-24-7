import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import Home from "./Home";
import Find from "./Find";

const App = () => {
  const [isProvider, setIsProvider] = useState(null);
  let isOnline = null;
  let isVerified = null;

  const shouldShowHome = isProvider === null;
  const shouldShowFind = isProvider === false;
  const showVerifyPage = isProvider && !isVerified;
  const showStatusToggle = isProvider && isVerified;

  return (
    <div>
      {shouldShowHome && <Home setIsProvider={setIsProvider} />}
      {shouldShowFind && <Find />}
      {showVerifyPage && <div>verify</div>}
      {showStatusToggle && <div>toggle</div>}
    </div>
  );
};

export default App;
