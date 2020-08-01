import React, { useState } from "react";
import Burger from "react-css-burger";
import Modal from "@material-ui/core/Modal";
import Menu from "./menu";

const BurguerMenu = (props) => {
  const [open, setOpen] = useState(false);

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
        scale={0.8}
      />
      <Modal
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        open={open}
        className='animated fadeInLeft'
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Menu
          closeModal={closeModal}
          executeScrollToAbout={props.executeScrollToAbout}
          executeScrollToHome={props.executeScrollToHome}
          executeScrollToProducts={props.executeScrollToProducts}
          executeScrollToProjects={props.executeScrollToProjects}
          executeScrollToTeam={props.executeScrollToTeam}
          executeScrollToContact={props.executeScrollToContact}
        />
      </Modal>
    </div>
  );
};

export default BurguerMenu;
