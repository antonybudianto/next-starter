import React from "react";

import CustomRoute from "../../components/CustomRoute";
import DashboardView from "../../views/DashboardView";

function DashboardIndex() {
  return (
    <CustomRoute redirectNoAuth="/login">{() => <DashboardView />}</CustomRoute>
  );
}

export default DashboardIndex;
