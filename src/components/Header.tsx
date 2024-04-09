import { notify, chat, setIcon } from "../utils";

const Header = () => {
  return (
    <div className=" flex  justify-between items-center">
      {/* //search */}
      <div className="  mt-5 px-10 ">
        <form className="flex justify-start max-w-lg mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="30"
                height="30"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                  stroke="#539BBB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.029 16.5295L19.5 19.0005"
                  stroke="#539BBB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className=" absolute text-sm left-4 -top-3 text-[#539BBB] px-1 bg-[#ededed]">
              Search
            </span>
            <input
              type="text"
              id="voice-search"
              className=" border border-gray-300 text-gray-900 text-sm placeholder:text-black rounded focus:ring-blue-500 focus:border-blue-500 block w-96 ps-10 p-2.5  bg-[#ededed] placeholder:px-2 
          placeholder-gray-400  "
              placeholder="Search  by profile,Settings,artifact,etc..."
              required
            />
            <button
              type="button"
              className="absolute inset-y-0  flex  end-0 items-center pe-3"
            >
              <svg
                fill="#539BBB"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* // other part  */}

      <div className=" mt-5 flex items-end gap-4 px-5 ">
        <div className="bg-white inline-block  m-1 p-2 rounded-lg shadow-right-bottom">
          <img src={notify} alt="" />
        </div>
        <div className="bg-white inline-block  m-1 p-2 rounded-lg shadow-right-bottom">
          <img src={chat} alt="" />
        </div>
        <div className="bg-white inline-block  m-1 p-2 rounded-lg shadow-right-bottom">
          <img src={setIcon} alt="" />
        </div>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
