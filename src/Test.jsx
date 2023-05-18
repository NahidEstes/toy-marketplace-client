import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const NestedTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Content of Tab 1</h2>
        <Tabs>
          <TabList>
            <Tab>Sub Tab 1</Tab>
            <Tab>Sub Tab 2</Tab>
            <Tab>Sub Tab 3</Tab>
          </TabList>

          <TabPanel>
            <h3>Content of Sub Tab 1</h3>
          </TabPanel>
          <TabPanel>
            <h3>Content of Sub Tab 2</h3>
          </TabPanel>
          <TabPanel>
            <h3>Content of Sub Tab 3</h3>
          </TabPanel>
        </Tabs>
      </TabPanel>

      <TabPanel>
        <h2>Content of Tab 2</h2>
      </TabPanel>

      <TabPanel>
        <h2>Content of Tab 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default NestedTabs;
