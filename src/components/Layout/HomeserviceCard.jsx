import React from "react";
import "./HomeserviceCard.css";
import service from "../../assets/Services/renovation.jpg";
import { Link } from "react-router-dom";

const HomeserviceCard = ({}) => {
  return (
    <div className="HomeserviceCard-container">
      <img src={service} alt="serviceimage" className="servicecardImg" />
      <div className="ServiceCardInfowrapper">
        <span className="serviceCardName">Renovation</span>
        <span className="serviceCardPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet
          repellendus ad magnam, vel dolorem maxime! Perferendis, error animi.
          Dolores consectetur vitae aut ipsam ratione perspiciatis, cupiditate
          velit laborum amet.
        </span>
        <Link className="linktoservice" to={"/"}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default HomeserviceCard;
