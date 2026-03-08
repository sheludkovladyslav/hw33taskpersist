import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const handleModal = () => {
    if (modal.isOpen === true) {
      dispatch(closeModal());
    }
    if (modal.isOpen === false) {
      dispatch(openModal());
    }
  };

  return (
    <>
      {modal.isOpen && (
        <div>
          <h2>Модальне вікно</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus cumque omnis tenetur beatae vitae nemo expedita
            aperiam. Possimus at, accusantium ut harum atque sunt, minus facere
            enim perferendis molestias omnis.
          </p>
        </div>
      )}

      <button onClick={handleModal}>
        {modal.isOpen ? "Закрити модальне вікно" : "Відкрити модальне вікно"}
      </button>
    </>
  );
}
