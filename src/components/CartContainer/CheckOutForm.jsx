import React, { useState } from "react";
import Button from "../Button/Button";
import InputCheckout from "./InputCheckout";


function CheckOutForm({ onCheckout }) {
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setBuyerData({
      name: "",
      email: "",
      phone: "",
    });
    onCheckout(buyerData);
  }

  return (
    <div className="h-96">
      <h1 className="text-5xl text-center m-5 ">Realizar pedido</h1>
      <form className="flex flex-col gap-5">
        <InputCheckout
          value={buyerData.name}
          name="name"
          title="Nombre completo"
          onChange={handleInputChange}
        />
        <InputCheckout
          value={buyerData.email}
          name="email"
          title="Email"
          onChange={handleInputChange}
        />
        <InputCheckout
          value={buyerData.phone}
          name="phone"
          title="Tel"
          onChange={handleInputChange}
        />

        <Button text="Crear orden" className="flex justify-center" onClick={onSubmit}></Button>
      </form>
    </div>
  );
}
export default CheckOutForm