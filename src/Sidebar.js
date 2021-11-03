import React from "react";
import MyButton from "./MyButton";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  &&& > button {
    box-shadow: 0px 0px 10px rgb(236, 235, 148);
    border-radius: 8px;
    border: none;
    background-color: white;
    height: 90px;
    width: 200px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    color: black;
    cursor: pointer;
  }
  && button:hover {
    color: red;
  }
`;

const Sidebar = ({ setSelectedMode }) => {
  const onButtonClick = (mode) => {
    setSelectedMode(mode);
  };

  const options = [
    "closed",
    "open",
    "big",
    "normal",
    "small",
    "rotate",
    "circle",
  ];

  return (
    <SidebarContainer>
      {options.map((e) => (
        <MyButton onClick={() => onButtonClick(e)}>{e.toUpperCase()}</MyButton>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
