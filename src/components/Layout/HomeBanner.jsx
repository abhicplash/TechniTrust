import React from "react";
import "./HomeBanner.css";
import person from "../../assets/home/bnrimg.png";
import { GrUserWorker } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { RiEqualizerLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md"

const HomeBanner = () => {
  return (
    <div className="HomeBannerContainer">
      <div className="bannerShadow">
        <div className="bannerWrapper">
          <div className="bannerDetails">
            <span className="BannerHead">we are here to <br /> care you</span>
            <span className="bannerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis animi quidem unde error voluptatum mollitia odio
              repellendus
            </span>
            <div className="btnWrapper">
              <button>Explore More</button>
              <button>requet a Demo</button>
            </div>
          </div>
          <img src={person} alt="" className="homeBannerImg" />
        </div>
        <div className="bannerLow">
          <div className="bannerSpeciality1">
            <RiEqualizerLine className="serviceIcon" />
            <span>
              Personalized <br /> solutions
            </span>
          </div>
          <div className="bannerSpeciality2">
            <MdOutlineWorkspacePremium className="serviceIcon" />
            <span>
              100% <br /> Quality
            </span>
          </div>
          <div className="bannerSpeciality3">
            <GrUserWorker className="serviceIcon" />
            <span>
              Skilled <br /> professionals
            </span>
          </div>
          <div className="bannerSpeciality4">
            <FaShippingFast className="serviceIcon" />
            <span>
              Quick and <br /> trustworthy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
