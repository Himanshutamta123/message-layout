import Image from "next/image";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { useContext } from "react";
import { MessageContext } from "@/context-api/MessageData";

const index = () => {
  const profileData = useContext(MessageContext);
  const attachment = [
    { heading: "Very important file.figma", image: "/image.png" },
    { heading: "Some file.scratch", image: "/image.jpeg" },
    { heading: "List of something.xd", image: "/images.png" },
    { heading: "Very important file.svg", image: "/image.png" },
  ];

  const members = [
    { member: "Novita", image: "/images.jpeg" },
    { member: "Milie Nose", image: "/logo1.jpg" },
    { member: "Ikhsan SD", image: "/logo.webp" },
    { member: "Aditya", image: "/images.jpeg" },
  ];
  return (
    <div className=" py-7 px-10 ">
      {profileData.routData.map((items: any) => {
        return (
          <div className="mb-4 flex flex-col items-center h-[100%]">
            <Image
              src={items.image}
              alt="logo"
              width={100}
              height={100}
              className="h-20 w-20 rounded-full transition ease-in-out hover:scale-125 duration-300 cursor-pointer"
            />
            <h3 className="text-white my-2">{items.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{items.email}</p>
          </div>
        );
      })}
      <div>
        <div className="flex justify-between text-gray-600 font-semibold">
          <h1>Attachments</h1>
          <FiChevronDown className="text-xl" />
        </div>
        {attachment.map((items, index) => {
          return (
            <div
              key={index}
              className="flex my-4 gap-2 hover:bg-black p-1 rounded-md cursor-pointer"
            >
              <Image
                src={items.image}
                alt="logo"
                height={100}
                width={100}
                className="w-10 h-10 rounded-full bg-white"
              />
              <div>
                <h2 className="text-sm font-semibold text-gray-300">
                  {items.heading}
                </h2>
                <p className="text-sm text-gray-500">
                  7.5 MB 3.22.22, 11:15 AM
                </p>
              </div>
            </div>
          );
        })}
        <p className="text-blue-500">view all</p>
      </div>
      <div>
        <div className="flex justify-between text-gray-600 font-semibold my-4">
          <h1>Members</h1>
          <FiChevronDown className="text-xl" />
        </div>
        <div className="flex text-blue-500 gap-4 mb-3 cursor-pointer px-2">
          <div className="h-8 w-8 bg-slate-200 rounded-full text-xl pl-2 pt-[2px] font-bold">
            +
          </div>
          Add Member
        </div>
        {members.map((items, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-3 py-2 cursor-pointer hover:bg-black rounded-md px-2"
            >
              <Image
                src={items.image}
                alt="logo"
                height={100}
                width={100}
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-white">{items.member}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
