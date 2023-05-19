import "react-tabs/style/react-tabs.css";
import Header from "./Layouts/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
