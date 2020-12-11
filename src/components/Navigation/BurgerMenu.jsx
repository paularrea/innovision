import React, { useState } from "react";
import Burger from "react-css-burger";
import Modal from "@material-ui/core/Modal";
import Menu from "./menu";

const BurgerMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [activeEn, setActiveEn] = useState(true);
  const [activeEs, setActiveEs] = useState(false);

  const onClickEnglish = () => {
    props.handleClick("en");
    setActiveEn(true);
    setActiveEs(false);
  };

  const onClickSpanish = () => {
    props.handleClick("es");
    setActiveEn(false);
    setActiveEs(true);
  };

  const openModal = () => {
    setOpen(!open);
  };
  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Burger
        onClick={openModal}
        active={open}
        burger="spring"
        color="black"
        hoverOpacity={0.8}
        scale={0.6}
      />
      <Modal
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        open={open}
        className="animated fadeInLeft"
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Menu
          activeEn={activeEn}
          activeEs={activeEs}
          onClickEnglish={onClickEnglish}
          onClickSpanish={onClickSpanish}
          handleClick={props.handleClick}
          t={props.t}
          closeModal={closeModal}
          executeScrollToAbout={props.executeScrollToAbout}
          executeScrollToHome={props.executeScrollToHome}
          executeScrollToProducts={props.executeScrollToProducts}
          executeScrollToTeam={props.executeScrollToTeam}
          executeScrollToContact={props.executeScrollToContact}
        />
      </Modal>
    </div>
  );
};

export default BurgerMenu;
