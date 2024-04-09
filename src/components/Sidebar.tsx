import { logo,brand,arrow,home,activity,analytics,transformation,library,setting,logout} from "../utils"

const Sidebar = () => {
  return (
    <div className="bg-[#2F667F] h-[95vh] w-full  p-3 rounded-[30px] text-sm shadow-right-bottom">
      {/* nav */}
      <div className="flex justify-end py-4">
        <img src={arrow} alt="hide-sidebar" />
      </div>
      {/* Logo section */}
      <div className="flex justify-center gap-2 ">
        <img src={logo} alt="logo" />
        <img src={brand} alt="brand" />
      </div>

      {/* navigation */}

      <div className="flex flex-col text-white py-4 w-full ">
        <ul className="flex flex-col items-start  mx-5 justify-center">
          <li className="flex  gap-4 py-4 px-10 hover:bg-[#539BBB] rounded-lg hover:cursor-pointer ">
            <div className="flex gap-4 justify-center">
            <span>
              <img src={home} alt="pic1" />
            </span>
            <p>Home</p>
            </div>
          </li>
          <li className="flex gap-4 py-4  px-10  hover:bg-[#539BBB] rounded-lg hover:cursor-pointer ">
            <span>
              <img src={activity} alt="pic2" />
            </span>
            Activities
          </li>
          <li className="flex  gap-4 py-4   px-10 hover:bg-[#539BBB] rounded-lg hover:cursor-pointer ">
            <span>
              <img src={analytics} alt="pi3" />
            </span>
            Analytics
          </li>
          <li className="flex  gap-4 py-4 px-10  hover:bg-[#539BBB] rounded-lg  hover:cursor-pointer ">
            <span>
              <img src={transformation} alt="pi4" />
            </span>
            <p>Transformation</p>
          </li>
          <li className="flex gap-4 py-4 px-10 hover:bg-[#539BBB] rounded-lg hover:cursor-pointer ">
            <span>
              <img src={library} alt="pic5" />
            </span>
            Library
          </li>
        </ul>
        <hr className="w-full mt-16" />
        <ul className="flex flex-col  items-start mx-5 pt-1 ">
          <li className="flex items-center gap-4 py-4 px-10 hover:bg-[#539BBB] rounded-lg  hover:cursor-pointer  ">
            <span>
              <img src={setting} alt="pic1" />
            </span>
            <p className="">Settings</p>
          </li>
          <li className="flex items-center gap-4 py-4 px-10 hover:bg-[#539BBB] rounded-lg  hover:cursor-pointer ">
            <span>
              <img src={logout} alt="pic2" />
            </span>
            <p className="">Logout</p>
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Sidebar;


