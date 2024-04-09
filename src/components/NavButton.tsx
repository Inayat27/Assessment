const NavButton = () => {
  return (
    <div className="text-white py-4 flex  justify-evenly">
      <button className="bg-[#2F667F] rounded-full w-[200px] flex py-2 justify-center items-center gap-2 border-gray-100">
        <span>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4838 10.0712H10.3212V15.2338H8.84618V10.0712H3.68359V8.59618H8.84618V3.43359H10.3212V8.59618H15.4838V10.0712Z"
              fill="white"
            />
          </svg>
        </span>
        <p> Create Report</p>
      </button>
      <button className=" rounded-full w-[200px] flex py-2 justify-center items-center gap-1 border-[#6C6F6B] border">
        <p className="text-[#2F667F]"> Share this dashboard</p>
      </button>
      <button className=" rounded-full w-[200px] flex py-2 justify-center items-center gap-1 border-[#6C6F6B] border">
        <p className="text-[#6C6F6B]"> Select Duration </p>
      </button>
      <button className=" rounded-full w-[200px] flex py-2 justify-center items-center gap-1 border-[#6C6F6B] border">
        <p className="text-[#6C6F6B]"> Compare with Duration</p>
      </button>
    </div>
  );
};

export default NavButton;
