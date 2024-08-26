import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTable from "./OrdersTable";
import ProductTableView from "./ProductTableView";
const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="shadow-md shadow-gray-600">
            <Achievement />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-md shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-md shadow-gray-600">
            <OrdersTable />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="shadow-md shadow-gray-600">
          <ProductTableView />
        </div>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
