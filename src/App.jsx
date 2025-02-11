import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <div style={{ marginTop: 106 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
