import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NestedTabs from "./Test";
import Header from "./Layouts/Header";
import Form from "./Test";
import AddToy from "./Pages/AddToy/AddToy";
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
