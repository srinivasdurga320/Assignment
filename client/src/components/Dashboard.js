import React from "react";
import "./Dashboard.css";
import Card from "./Card";
import Table from "./Table";
import Chart from './Chart'
import CarouselFadeExample from "./CarouselFadeExample";
const Dashboard = ({ data ,name }) => {
  return (
    <div>
      <div className="container">
        <div className="primary-banner">
          <div className="sub-primary-banner1">
            <div className="card1">
              <Card title={"$31,541,901"} desc={"Total sales"} />
              <Card title={"607"} desc={"Total orders"} />
              <Card title={"75"} desc={"Total Customers"} />
            </div>
          </div>
          <div className="sub-primary-banner2">
            <CarouselFadeExample />
          </div>
          <div className="sub-primary-banner3">
              <Chart ChartData={data} name={name}/>
          </div>
        </div>
        <div className="secondary-banner">
          <div className="card">
            <h1>Car Sales  Data</h1>
            <Table Tabledata={data} name={name}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
