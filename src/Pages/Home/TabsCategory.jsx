import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategory = () => {
  return (
    <div className="custom-container">
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Subcategory 1</Tab>
              <Tab>Subcategory 2</Tab>
              <Tab>Subcategory 3</Tab>
            </TabList>

            <TabPanel>
              <h3>Content of Subcategory 1</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 2</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 3</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Subcategory 4</Tab>
              <Tab>Subcategory 5</Tab>
              <Tab>Subcategory 6</Tab>
            </TabList>

            <TabPanel>
              <h3>Content of Subcategory 4</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 5</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 6</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Subcategory 7</Tab>
              <Tab>Subcategory 8</Tab>
              <Tab>Subcategory 9</Tab>
            </TabList>

            <TabPanel>
              <h3>Content of Subcategory 7</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 8</h3>
            </TabPanel>
            <TabPanel>
              <h3>Content of Subcategory 9</h3>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
