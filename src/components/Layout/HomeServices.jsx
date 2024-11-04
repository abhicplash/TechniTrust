import React from "react";
import "./HomeServices.css";
import { homeServicesList } from "../../utils/homeServices";
import HomeserviceCard from "./HomeserviceCard";

const HomeServices = () => {
  return (
    <div className="HomeServices-container">
      <h1 className="homeserviceHead">Our Featured Services</h1>
      <div className="HomeServices-deatils">
        {homeServicesList.map((list, index) => (
          <HomeserviceCard key={index}  />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
