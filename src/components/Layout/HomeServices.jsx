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
          <HomeserviceCard
            key={index}
            ServiceName={list.name}
            image={list.image}
            desc={list.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
