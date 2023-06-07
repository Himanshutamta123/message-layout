"use client";
import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { CiPlug1 } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import styled from "styled-components";

const index = () => {
  return (
    <NavDiv className="md:w-[6%] md:p-[10px] md:h-[897px]">
      <ul className="md:flex-col md:gap-[30px] md:mt-[90px] gap-[3%] ">
        <li>
          <AiOutlineAppstore />
        </li>
        <li>
          <CiPlug1 />
        </li>
        <li>
          <BsBook />
        </li>
        <li>
          <FiSettings />
        </li>
        <li>
          <BiSend />
        </li>
        <li>
          <AiOutlineFolderAdd />
        </li>
      </ul>
    </NavDiv>
  );
};

export default index;

const NavDiv = styled.div`
  background-color: black;
  padding: 10px 0 10px 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      color: #6e6ee6;
      font-size: 25px;
      font-weight: bold;
      padding: 10px;
      cursor: pointer;
      border-radius: 15px;
    }
    li:hover {
      background-color: #8477d7;
      color: white;
      transition: ease-in-out;
      transition-duration: 1s;
    }
  }
`;
