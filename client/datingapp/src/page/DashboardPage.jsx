import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CardComponent } from "../components/CardComponent";
import ResponsiveAppBar from "../components/NavBarComponent";
import GetUsers from "../utilites/getAllUsers";
import GetFilteredUsers from "../utilites/getFilteredUsers";
import FilterUsers from "./FilterUsersPage";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <FilterUsers />
      </div>
      <div>
        <GetFilteredUsers />
      </div>
    </div>
  );
};

export default DashboardPage;
