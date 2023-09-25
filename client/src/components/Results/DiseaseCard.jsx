import React from "react";
import DiseaseImg from "../../assets/Rectangle_20.png";
import Symbol from "../../assets/Group_11.png";
import "./disease_card.css";
function DiseaseCard() {
  return (
    <div className='disease-card'>
      <div className="disease-left">
        <p>
          <img src={Symbol} />{" "}
        </p>
        <p>Clinical Uses</p>
        <p>
          Seborrheic dermatitis,24 psoriasis vulgaris,25,26 genital herpes,27,28
          skin burns,5,29 diabetes (type 2),30 HIV infection,31 cancer
          prevention wound healing (results of aloe on wound healing are mixed
          with some studies reporting positive results35 and others showing no
          benefit36 or potential worsening37,38 ), pressure ulcers,36
          mucositis,39 radiation dermatitis,40 acne vulgaris,41 lichen planus,42
          frostbite,43 aphthous stomatitis,44 and constipation
        </p>
      </div>
      <div className="disease-right">
        <img src={DiseaseImg} className="disease-right-img"/>
      </div>
    </div>
  );
}

export default DiseaseCard;
