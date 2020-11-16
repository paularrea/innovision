import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";

const TeamList = (props) => {
  
  return (
    <div className="row teamList-wrapper">
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img1")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position1")}</p>
            <h3>{props.t("teamList.name1")}</h3>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img2")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position2")}</p>
            <h3>{props.t("teamList.name2")}</h3>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img3")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position3")}</p>
            <h3>{props.t("teamList.name3")}</h3>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img4")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position4")}</p>
            <h3>{props.t("teamList.name4")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img5")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position5")}</p>
            <h3>{props.t("teamList.name5")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img6")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position6")}</p>
            <h3>{props.t("teamList.name6")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img7")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position7")}</p>
            <h3>{props.t("teamList.name7")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img8")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position8")}</p>
            <h3>{props.t("teamList.name8")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img9")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position9")}</p>
            <h3>{props.t("teamList.name9")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default TeamList;
