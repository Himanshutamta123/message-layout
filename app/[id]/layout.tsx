import Allmessage from "@/components/messages/All-messages/Allmessage";
import React from "react";
import Profile from "../../components/Profile";
import Chat from "./page";

const layout = () => {
  return (
    <div className="flex w-[100%]">
      <div className="w-[100%] xl:w-[25%] md:w-[40%]  md:block ">
        <Allmessage />
      </div>
      <div className="w-[100%] xl:w-[50%] md:w-[60%] bg-black 2xl:w-[100%]">
        <Chat />
      </div>
      {/* <div className='w-[25%] bg-[#111427e7] hidden xl:block'>
        <Profile />
      </div> */}
    </div>
  );
};

export default layout;
