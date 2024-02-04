import React from "react";
import Example from "../Example";
import PartFormEditor from "../PartEditor/PartFormEditor";

const App = () => {
  return (
    <React.StrictMode>
      <Example />
      <PartFormEditor partId={"modern-door123"} />
    </React.StrictMode>
  );
};

export default App;
