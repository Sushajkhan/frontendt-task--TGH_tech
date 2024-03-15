import React from "react";
import menu from "../assets/menu.svg";
import settings from "../assets/settings.svg";

const RightCard = () => {
  return (
    <>
      <div className="bg-primary text-white h-screen  flex flex-col gap-10">
        <div className="flex justify-end px-4 py-4">
          <img src={menu} className="w-6 h-5 " alt="" />
        </div>
        <div className="flex flex-col ml-16  ">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl mb-8 ">Trending Topics</h1>

            <img className=" mb-9 px-5" src={settings} alt="" />
          </div>
          <div>
            <p className="text-blue mb-5">show all quotes</p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="opacity-25">AGE</p>
              <p>#age</p>
              <p className="opacity-25">#123 quotes</p>
            </div>
            <div>
              <p className="opacity-25">AGE</p>
              <p>#age</p>
              <p className="opacity-25">#123 quotes</p>
            </div>{" "}
            <div>
              <p className="opacity-25">AGE</p>
              <p>#age</p>
              <p className="opacity-25">#123 quotes</p>
            </div>{" "}
            <div>
              <p className="opacity-25">AGE</p>
              <p>#age</p>
              <p className="opacity-25">#123 quotes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCard;
