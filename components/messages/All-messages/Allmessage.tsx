"use client";
import React, { useContext } from "react";
import Person from "../../Person";
import { FiSearch } from "react-icons/fi";
import { MessageContext } from "@/context-api/MessageData";
import Link from "next/link";

const Allmessage = () => {
  const data = useContext(MessageContext);

  return (
    <div className=" bg-[#111427e7] px-3 sm:px-7 py-1.5 h-[93.3vh]">
      <h3 className="text-2xl sm:text-3xl font-semibold text-white sm:py-6 py-3">
        Messages
      </h3>
      <div className="flex w-[100%] p-3 bg-black rounded-md text-gray-400 gap-2">
        <FiSearch className="text-xl cursor-pointer " />
        <input className="bg-black" placeholder="Search..." />
      </div>
      <div className="mt-3 sm:mt-6 flex md:block gap-3 ">
        {data.messageData.map((items: any) => {
          return (
            <Link href={`/${items.id}`}>
              <Person data={items} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Allmessage;
