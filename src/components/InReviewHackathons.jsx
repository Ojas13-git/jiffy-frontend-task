import React from 'react'

const InReviewHackathons = ({data}) => {
  return (
    <div
          className=" p-4 ml-[-30px] rounded-lg dark:bg-gray-800"
        >
          <div class="sm:w-[95%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-100 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-start justify-left">
            <img
              src={data.img}
              alt="profile"
              class="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-teal-400/20 rounded-xl"
            />
            <div class="w-[85%] flex flex-col gap-1 pt-[10px]">
              <div class="text-left text-lg font-semibold text-black dark:text-black">
              {data.title} <span className="text-sm text-gray-400">by</span> <span className="text-lg text-gray-400">{data.author}</span>
                <span className="pl-[230px] text-right text-gray-500 font-thin">
                {data.date}
                </span>
              </div>
              
              <div class="flex text-left text-md dark:text-gray-600 text-gray-300">
                     
                {
                    data.tags.map((btns, i)=> {
                        return(
                            <button type="button" style={{
                                backgroundColor: btns.color,color:btns.textColor}
                            } class={`w-auto h-[28px] bg-[${btns.color}] font-small rounded-lg text-xs px-2 text-center me-2 mb-2 text-[${btns.textColor}]`}>{btns.tag}</button>
                        )
                    })
                }
                  <span className="pl-[410px] text-right text-gray-500">
                    <span className="font-bold text-lg text-gray-900">{data.participants} </span>Participants
                  </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default InReviewHackathons