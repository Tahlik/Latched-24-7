import React, { useState } from "react";

import Home from "./Home";
import Find from "./Find";
import Verify from "./Verify";
import Toggle from "./Toggle";

const App = () => {
  const [isProvider, setIsProvider] = useState(null);
  let isOnline = null;
  const [isVerified, setIsVerified] = useState(null);

  const shouldShowHome = isProvider === null;
  const shouldShowFind = isProvider === false;
  const showVerifyPage = isProvider && !isVerified;
  const showStatusToggle = isProvider && isVerified;

  return (
    <div>
      {shouldShowHome && <Home setIsProvider={setIsProvider} />}
      {shouldShowFind && <Find />}
      {showVerifyPage && <Verify setIsVerified={setIsVerified} />}
      {showStatusToggle && <Toggle />}
    </div>
  );
};

export default App;
