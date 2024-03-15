import user from "../assets/user.svg";

const LeftCard = () => {
  return (
    <>
      <div className="bg-primary text-white h-screen w-1/3 flex flex-col gap-10">
        <div className="text-2xl self-center py-4">Quotverse</div>
        <div className="flex flex-col ml-16  ">
          <img src={user} className="w-16 h-16" alt="" />
          <p className="font-semibold text-2xl mt-6">John Doe</p>
          <p className="mt-2 text-sm">jhonedoe</p>
          <p className="mt-4 text-sm ">
            UI Developer | Let's redesign the world
          </p>
          <br />
          <p className="opacity-25 text-sm">2957 likes.</p>
        </div>
      </div>
    </>
  );
};

export default LeftCard;
