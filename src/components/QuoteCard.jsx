import React from "react";
import users from "../assets/tweetuser.svg";
import like from "../assets/likedark.svg";
import comment from "../assets/comment.svg";
import share from "../assets/send.svg";

const QuoteCard = () => {
  return (
    <div className="py-5 px-5 bg-primary text-white flex gap-4 w-max">
      <div>
        <img src={users} alt="" />
      </div>
      <div>
        <h4 className="mb-3 w-max">Mahatma Gandhi</h4>
        <div className="mb-4">
          Forgiveness is choosing to love. It is the first skill of self-giving
          love.
        </div>
        <div className="flex gap-8 mb-4">
          <img src={like} alt="" />

          <img src={comment} alt="" />

          <img src={share} alt="" />
        </div>
        <div className="opacity-25 text-sm">wisdom . love</div>
      </div>
    </div>
  );
};

export default QuoteCard;
