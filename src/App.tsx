import React from "react";
import Routes from "./routes";
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="layout-grid h-100">
      <Routes />
    </div>
  );
};

export default App;
