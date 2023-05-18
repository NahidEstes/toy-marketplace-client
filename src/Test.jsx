import React, { useState } from "react";

const Tab = ({ activeTab, label, onClick }) => {
  const isActive = activeTab === label;

  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

const TabContent = ({ activeTab, label, children }) => {
  if (activeTab !== label) {
    return null;
  }

  return <div className="tab-content">{children}</div>;
};

const NestedTabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div className="tabs">
        <Tab activeTab={activeTab} label="Tab 1" onClick={handleTabClick} />
        <Tab activeTab={activeTab} label="Tab 2" onClick={handleTabClick} />
        <Tab activeTab={activeTab} label="Tab 3" onClick={handleTabClick} />
      </div>

      <div className="tab-content-container">
        <TabContent activeTab={activeTab} label="Tab 1">
          <div>
            Content of Tab 1
            <NestedTabs /> {/* Render nested tabs */}
          </div>
        </TabContent>
        <TabContent activeTab={activeTab} label="Tab 2">
          Content of Tab 2
        </TabContent>
        <TabContent activeTab={activeTab} label="Tab 3">
          Content of Tab 3
        </TabContent>
      </div>
    </div>
  );
};

export default NestedTabs;
