import React from "react";

const CompletedHackathons = ({ data }) => {
  return (
    <div className="p-4 ml-[-30px] rounded-lg flex items-center hover:bg-gray-100 hover:shadow-lg transition duration-300">
  <div className="sm:w-[95%] xs:w-[94%] mx-auto p-4 rounded-md flex sm:gap-4 xs:gap-2 items-start justify-left">
    <img
      src={data.img}
      alt="profile"
      className="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-teal-400/20 rounded-xl"
    />
    <div className="w-[85%] flex flex-col gap-1 pt-[10px]">
      <div className="text-left text-lg font-semibold text-black dark:text-black">
        {data.title} <span className="text-sm text-gray-400">by</span>{" "}
        <span className="text-lg text-gray-400">{data.author}</span>
      </div>

      <div className="flex text-left text-md dark:text-gray-600 text-gray-300">
        {data.dollar && data.position && (
          <>
            <img
              src="https://i.ibb.co/bNXjbDK/image.png"
              className="mt-[9px] w-3 h-3"
              alt=""
            />{" "}
            <span className="text-lg text-gray-900 font-bold pl-[5px] w-[100px]">
              {data.dollar}{" "}
              <span className="text-gray-400 font-light">USDC</span>
            </span>
            <img
              src="https://i.ibb.co/KXX9pg7/Trophy.png"
              className="mt-[9px] ml-[20px] w-3 h-3"
              alt=""
            />
            <span className="text-gray-500 ml-[5px] mt-[2px] w-[80px]">
              {data.position}st Place{" "}
            </span>
          </>
        )}
        {data.tags.map((btns, i) => {
          return (
            <button
              key={i}
              type="button"
              style={{
                backgroundColor: btns.color,
                color: btns.textColor,
                marginLeft: "10px",
              }}
              className={`w-auto h-[28px] font-small rounded-lg text-xs px-2 text-center me-2 mb-2`}
            >
              {btns.tag}
            </button>
          );
        })}
      </div>
    </div>
  </div>

  <div className="flex flex-col p-2 w-[300px] mr-[50px]">
    <span className="text-right text-gray-500 font-thin">{data.date}</span>

    <span className="text-right text-gray-500">
      <span className="font-bold text-lg text-gray-700">
        {data.participants}{" "}
      </span>
      Participants
    </span>
  </div>
</div>

  );
};

export default CompletedHackathons;
