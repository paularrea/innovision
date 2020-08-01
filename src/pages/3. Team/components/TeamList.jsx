import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";

const TeamList = (props) => {
  // const members = [
  //   {
  //     id: 1,
  //     img: "img1",
  //     position: "Chief Executive Officer",
  //     name: "DAVID BOWIE",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  //   {
  //     id: 2,
  //     img: "img2",
  //     position: "Chief Creative Officer",
  //     name: "BOB MARLEY",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  //   {
  //     id: 3,
  //     img: "img3",
  //     position: "Chief Client Services Officer",
  //     name: "FRANK SINATRA",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  //   {
  //     id: 4,
  //     img: "img4",
  //     position: "Chief Strategy Officer",
  //     name: "CARLOS SANTANA",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  //   {
  //     id: 5,
  //     img: "img5",
  //     position: "Chief Growth Officer",
  //     name: "ARETHA FRANKLIN",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  //   {
  //     id: 6,
  //     img: "img6",
  //     position: "Chief Business Development Officer",
  //     name: "AMY WINEHOUSE",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
  //   },
  // ];

  // const teamList = members.map((member) => (
  //   <div className="member-card col-12 col-md-6">
  //     <FadeInOnScroll>
  //       <div className="member-img">
  //         <img src={member.img} alt="" />
  //       </div>
  //       <div className="member-info">
  //         <p>{member.position}</p>
  //         <h3>{member.name}</h3>
  //         <p className="member-description">{member.description}</p>
  //       </div>
  //     </FadeInOnScroll>
  //   </div>
  // ));

  return (
    <div className="row teamList-wrapper">
      <div className="member-card col-12 col-md-6">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img1")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position1")}</p>
            <h3>{props.t("teamList.name1")}</h3>
            <p className="member-description">{props.t("teamList.description1")}</p>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-6">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img2")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position2")}</p>
            <h3>{props.t("teamList.name2")}</h3>
            <p className="member-description">{props.t("teamList.description2")}</p>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-6">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img3")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position3")}</p>
            <h3>{props.t("teamList.name3")}</h3>
            <p className="member-description">{props.t("teamList.description3")}</p>
          </div>
        </FadeInOnScroll>
        </div>
        <div className="member-card col-12 col-md-6">
        <FadeInOnScroll>
          <div className="member-img">
            <img src={props.t("teamList.img4")} alt="" />
          </div>
          <div className="member-info">
            <p>{props.t("teamList.position4")}</p>
            <h3>{props.t("teamList.name4")}</h3>
            <p className="member-description">{props.t("teamList.description4")}</p>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default TeamList;
