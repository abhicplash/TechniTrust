import React from "react";
import "./HomeAbout.css";
import homeaboutImg from "../../assets/home/abouthome.png";

const HomeAbout = () => {
  return (
    <div className="homeaboutContainer">
      <div className="HomeAbout-mainwrapper">
        <img src={homeaboutImg} alt="" className="homeaboutImg" />
        <div className="homeAboutWrapper">
          <span className="homeaboutHead">
            Welcome To <br /> TechniTrust
          </span>
          <p className="homeaboutPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            ullam. Totam explicabo aut exercitationem, adipisci alias nobis
            nemo. Quisquam laborum impedit id nesciunt omnis accusantium optio,
            ex earum eaque repellat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam, ullam. Totam explicabo aut exercitationem,
            adipisci alias nobis nemo. Quisquam laborum impedit id nesciunt
            omnis accusantium optio, ex earum eaque repellat? Lorem ipsum dolor
            sit amet consectetur
          </p>
          <div className="homebtnWrapper">
            <button>Explore More</button>
            <button>requet a Demo</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeAbout;
