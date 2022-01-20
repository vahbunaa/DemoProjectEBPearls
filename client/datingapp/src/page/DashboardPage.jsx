import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CardComponent } from "../components/CardComponent";
import ResponsiveAppBar from "../components/NavBarComponent";
import GetUsers from "../components/getAllUsers";
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
        <GetUsers />
      </div>
    </div>
  );
};

export default DashboardPage;
