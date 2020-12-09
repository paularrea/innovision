import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";
import georgeZhou from "../../../img/team-members/georgeZhou.jpg";
import bennyYou from "../../../img/team-members/bennyYou.png";
import lufanChen from "../../../img/team-members/lufanChen.png";
import weihaoZhang from "../../../img/team-members/weihaoZhang.png";

const TeamList = (props) => {
  
  return (
    <div className="row teamList-wrapper">
      <div className="member-card col-12 col-md-4">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={georgeZhou} alt="George Zhou profile" />
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
          <img src={bennyYou} alt="Benny You profile" />
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
          <img src={lufanChen} alt="Lufan Chen profile" />
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
          <img src={weihaoZhang} alt="Weihao Zhang profile" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position4")}</p>
            <h3>{props.t("teamList.name4")}</h3>
          </div>
        </FadeInOnScroll>
      </div>
      {/* <div className="member-card col-12 col-md-4">
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
      </div> */}
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
