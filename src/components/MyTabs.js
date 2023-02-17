import { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";

import MenuList from "./MenuList";

export default function MyTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <div>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Tab 1" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Tab 2" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="Tab 3" id="tab-0" aria-controls="tabpanel-2" />{" "}
          <Tab label="Tab 4" id="tab-0" aria-controls="tabpanel-3" />{" "}
          <Tab label="Tab 5" id="tab-0" aria-controls="tabpanel-4" />{" "}
          <Tab label="Tab 6" id="tab-0" aria-controls="tabpanel-5" />{" "}
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        {/* Render your component here */}
        <MenuList />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        {/* Render another component here */}
        <MenuList />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        {/* Render another component here */}
        <MenuList />
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        {/* Render another component here */}
        <MenuList />
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
        {/* Render another component here */}
        <MenuList />
      </TabPanel>
      <TabPanel value={selectedTab} index={5}>
        {/* Render another component here */}
        <MenuList />
      </TabPanel>
    </div>
  );
}
