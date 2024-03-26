import React from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";
import { useDataContext } from '../context/Datacontext';
import Dashboard from "../components/Dashboard";
const Homepage = ({name}) => {
const { data } = useDataContext();
  return (
    <>
    <Navbar/>
    <Dashboard data = {data} name={name}/>
    </>
  )
};

export default Homepage;
