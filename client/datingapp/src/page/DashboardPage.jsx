import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CardComponent } from "../components/CardComponent";
import ResponsiveAppBar from "../components/NavBarComponent";
import GetUsers from "../components/user/getAllUsers";
import GetFilteredUsers from "../components/user/getFilteredUsers";
import FilterDialog from "../components/dialog/FilterDialog";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <FilterDialog />
      </div>
      <div>
        <GetUsers />
      </div>
    </div>
  );
};

export default DashboardPage;
