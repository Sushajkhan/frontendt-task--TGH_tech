import user from "../assets/user.svg";
import home from "../assets/homeicon.svg";
import like from "../assets/like.svg";
const RightCard = () => {
  return (
    <div>
      <div className="bg-primary text-white h-screen  flex flex-col gap-10">
        <div className="text-2xl flex justify-center gap-80 py-4">
          <div>
            <img src={home} alt="" />
          </div>
          <div>
            <img src={like} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
