import React, { useState } from "react";
import Burger from "react-css-burger";
import Modal from "@material-ui/core/Modal";
import Menu from "./menu";

const BurguerMenu = () => {
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
        onClose={closeModal}
        style={{backgroundColor:'none'}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Menu closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default BurguerMenu;
