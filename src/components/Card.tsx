

const Card = ({ title, bgDiv, bgImg , chart }) => {
  return (
    <div className={`w-[200px] bg-[#${bgDiv}] border-2 text-white relative`}>
      <img className={`bg-[#${bgImg}] rounded-md`} src={chart} alt="chart" />
      <div className="absolute top-1 px-2">
        <span className="block leading-3">{title}</span>
        <span className="text-xs font-extralight text-white leading-[5px]">Lorem Ipusum</span>
        <span className="flex items-center">
          <span className="px-r-2">1.1921</span>
          <svg className="" fill="#ffffff" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
          </svg>
        </span>
        <span className="text-xs leading-3">+ 0.0015 (0.13%)</span>
        <span className="text-xs font-thin flex py-1">0.00 USD</span>
      </div>
    </div>
  );
};

export default Card;
