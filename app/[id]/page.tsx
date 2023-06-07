"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { TbPhoto } from "react-icons/tb";
import { BiSmile } from "react-icons/bi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import { MessageContext } from "@/context-api/MessageData";
import Profile from "../../components/Profile";
import styled from "styled-components";

const LIMIT = -15;

const Chat = () => {
  const chatsData = useContext(MessageContext);
  const singleRoute = chatsData.routData[0];
  const [profileShow, setProfileShow] = useState(false);
  const observerTarget = useRef(null);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log("rann obsever");
    let timer: any;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (LIMIT * page < chatsData.filterChats.length) {
            setLoadMore(true);
            timer = setTimeout(() => {
              setPage((p) => p + 1);
              setLoadMore(false);
            }, 1000);
          }
        }
      },
      { threshold: 1 }
    );

    console.log(observer);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
      clearTimeout(timer);
    };
  }, [observerTarget]);

  useEffect(() => {
    // console.log("bottomRef.current.scrollIntoView BEFORE");
    if (page > 1) return;
    if (bottomRef.current) {
      // console.log(bottomRef.current.scrollIntoView());
      bottomRef.current.scrollIntoView();
    }
  }, [page]);

  console.log("messages", chatsData.filterChats.slice(LIMIT * page));

  return (
    <Root className="flex w-[100%] ">
      <div className="px-3 sm:px-5 pt-4 text-white relative h-[100%] w-[100%] xl:w-[100%] md:w-[60%] bg-black">
        <div className="flex justify-between items-center">
          <div
            className="flex gap-1 sm:gap-4 cursor-pointer"
            onClick={() => setProfileShow(!profileShow)}
          >
            <Image
              src={singleRoute.image}
              alt="logo"
              height={100}
              width={100}
              className="w-14 h-14 rounded-full bg-white transition ease-in-out hover:scale-105 duration-300"
            />
            <div>
              <h1 className="sm:text-2xl cursor-pointer">{singleRoute.name}</h1>
              <p className="text-xs sm:text-sm text-gray-500">
                60 member, 10 online
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex relative">
              <div className="w-8 h-8 cursor-pointer rounded-full absolute -left-[80px] border-black border-[1px] bg-white -top-4 sm:top-0"></div>
              <div className="w-8 h-8 cursor-pointer rounded-full absolute -left-[57px] border-black border-[1px] bg-red-400 -top-4 sm:top-0"></div>
              <div className="w-8 h-8 cursor-pointer rounded-full absolute -left-[30px] border-black border-[1px] bg-blue-400 -top-4 sm:top-0"></div>
            </div>
            <div className="bg-gray-600 w-8 h-8 pl-2.5 pt-1 rounded-full hidden sm:block cursor-pointer">
              +
            </div>
          </div>
        </div>
        <div className="scroll-tab h-[77.5vh] overflow-y-scroll">
          <div ref={observerTarget} />
          {loadMore && (
            <div className="w-full flex items-center justify-center p-10">
              loading...
            </div>
          )}
          {chatsData.filterChats.slice(LIMIT * page).map((items: any) => {
            return (
              <div className="">
                {items.sent === true ? (
                  <div className="flex justify-end mt-4">
                    <div className="flex gap-3">
                      <div className="space-y-1 ">
                        {items.id === items.user.id ? (
                          <div className="flex gap-7 items-end justify-end mt-4">
                            <p className="text-xs text-gray-500">10:12 AM</p>
                            <h2 className="text-sm cursor-pointer">
                              {items.user.name}
                            </h2>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="text-xs text-white text-right mt-0">
                          {items.id === items.user.id ? (
                            <h1 className="p-2 px-4 bg-blue-700 rounded-l-lg rounded-br-lg">
                              {items.message}
                            </h1>
                          ) : (
                            <h1 className="p-2 px-4 bg-blue-700 rounded-md mr-[53px] -mt-3">
                              {items.message}
                            </h1>
                          )}
                        </div>
                      </div>
                      {items.id === items.user.id ? (
                        <Image
                          src={items.user.pic}
                          alt="logo"
                          height={100}
                          width={100}
                          className="w-10 h-10 rounded-full cursor-pointer"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex mt-4 gap-3">
                    {items.id === items.user.id ? (
                      <Image
                        src={items.user.pic}
                        alt="logo"
                        height={100}
                        width={100}
                        className="w-10 h-10 rounded-full cursor-pointer"
                      />
                    ) : (
                      ""
                    )}
                    <div className="space-y-1">
                      {items.id === items.user.id ? (
                        <div className="flex gap-7 items-end">
                          <h2 className="text-sm cursor-pointer">
                            {items.user.name}
                          </h2>
                          <p className="text-xs text-gray-500">10:12 AM</p>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="text-xs text-white ">
                        {items.id === items.user.id ? (
                          <h1 className="p-2 bg-blue-700 rounded-r-lg rounded-bl-lg">
                            {items.message}
                          </h1>
                        ) : (
                          <h1 className="p-2 px-4 bg-blue-700  rounded-md ml-[53px] -mt-3">
                            {items.message}
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div ref={bottomRef}></div>
        </div>

        <div className="w-[100%] bottom-0  sm:-ml-5 sm:px-9 px-3 bg-gray-700 py-4 ">
          <div className="flex justify-between bg-[#111427e7] py-3 px-5 rounded-full">
            <div className="flex gap-2 text-gray-500">
              <BsFillMicFill />
              <input
                placeholder="Add your comment..."
                className="bg-[#111427e7] sm:text-sm text-xs"
              />
            </div>
            <div className="flex text-lg gap-2 sm:text-2xl sm:gap-3 text-gray-500">
              <TbPhoto />
              <BiSmile />
              <TiLocationArrowOutline />
              <HiLocationMarker />
            </div>
          </div>
        </div>
      </div>
      {profileShow ? (
        <div className="w-[40%] bg-[#111427e7]">
          <Profile />
        </div>
      ) : (
        ""
      )}
    </Root>
  );
};

export default Chat;

const Root = styled.div`
  .scroll-tab {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
