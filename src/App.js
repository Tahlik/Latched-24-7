import React, { useState } from "react";

import Home from "./Home";
import Find from "./Find";
import Verify from "./Verify";

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
      {showVerifyPage && <Verify />}
      {showStatusToggle && <div>toggle</div>}
    </div>
  );
};

export default App;
