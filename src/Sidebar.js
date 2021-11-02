import React from "react";
import MyButton from "./MyButton"

export default function Sidebar({ setSelectedMode }) {
  const onButtonClick = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="sidebar">
      <MyButton onClick={() => onButtonClick("closed")}>CLOSED</MyButton>
      <MyButton onClick={() => onButtonClick("open")}>OPEN</MyButton>
      <MyButton onClick={() => onButtonClick("big")}>BIG</MyButton>
      <MyButton onClick={() => onButtonClick("normal")}>NORMAL</MyButton>
      <MyButton onClick={() => onButtonClick("small")}>SMALL</MyButton>
      <MyButton onClick={() => onButtonClick("rotate")}>ROTATE</MyButton>
      <MyButton onClick={() => onButtonClick("circle")}>CIRCLE</MyButton>
    </div>
  )
}
