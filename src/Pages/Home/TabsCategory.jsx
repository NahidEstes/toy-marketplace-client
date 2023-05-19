import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategory = () => (
  <>
    <div className="custom-container mt-16">
      <h1 className="text-center text-3xl font-bold">Shop Category</h1>
      <div className="mt-5">
        <Tabs>
          <TabList>
            <Tab>Police Car</Tab>
            <Tab>Truck</Tab>
            <Tab>Sports Car</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  </>
);

export default TabCategory;
