import React from "react";
import Fade from "react-reveal/Fade";

const TeamList = (props) => {
  const members = [
    {
      id: 1,
      img: "img1",
      position: "Chief Executive Officer",
      name: "DAVID BOWIE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
    {
      id: 2,
      img: "img2",
      position: "Chief Creative Officer",
      name: "BOB MARLEY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
    {
      id: 3,
      img: "img3",
      position: "Chief Client Services Officer",
      name: "FRANK SINATRA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
    {
      id: 4,
      img: "img4",
      position: "Chief Strategy Officer",
      name: "CARLOS SANTANA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
    {
      id: 5,
      img: "img5",
      position: "Chief Growth Officer",
      name: "ARETHA FRANKLIN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
    {
      id: 6,
      img: "img6",
      position: "Chief Business Development Officer",
      name: "AMY WINEHOUSE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur, alias culpa vitae mollitia minus possimus fugit liber reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita distinctio corporis ab?",
    },
  ];

  const teamList = members.map((member) => (
    <Fade>
      <div className="member-card col-12 col-md-6">
        <div className="member-img">
          <img src={member.img} alt="" />
        </div>
        <div className='member-info'>
        <p>{member.position}</p>
        <h3>{member.name}</h3>
        <p className='member-description'>{member.description}</p>
        </div>
      </div>
    </Fade>
  ));

  return <div className="row teamList-wrapper">{teamList}</div>;
};

export default TeamList;
