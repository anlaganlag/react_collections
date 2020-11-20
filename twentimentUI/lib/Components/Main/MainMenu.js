import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const a11yProps = (index) => ({
  id: "full-width-tab-" + index,
  "aria-controls": "full-width-tabpanel-" + index,
});

const StyledTab = styled(Tab)`
  .mobile-menu-option {
    display: none;
  }
  @media (min-width: 600px) {
    min-width: 100px !important;
  }
  @media (max-width: 600px) {
    .mobile-menu-option {
      display: flex;
    }
    .desktop-menu-option {
      display: none;
    }
  }
`;

function MainMenu({ setView, configs, currentConfigIndex }) {
  const handleChange = (event, nextConfigIndex) =>
    setView(configs[nextConfigIndex].value);

  const responsiveLabel = (config) => (
    <Fragment>
      <span className="desktop-menu-option">{config.label}</span>
      <span className="mobile-menu-option">{config.altLabel}</span>
    </Fragment>
  );

  return (
    <AppBar position="static" color="inherit">
      <Tabs
        value={currentConfigIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="main menu"
      >
        {configs.map((config, index) => (
          <StyledTab
            key={index}
            label={responsiveLabel(config)}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default MainMenu;
