import React, { useState } from "react";
import CompletedHackathons from "./CompletedHackathons";
import data from "../data";
import InReviewHackathons from "./InReviewHackathons";

const WorkHistory = () => {
  const [completedHackathons, setCompletedHackathons] = useState(data);

  // console.log(data);

  function handleChange(hack) {
    if (hack === "All") {
      return setCompletedHackathons(data);
    }
    setCompletedHackathons(data.filter(hackathon =>
      hackathon.tags.some(tagObj => tagObj.tag === hack)
    ));
  }
  return (
    <>
      <div className="w-[950px] pl-[100px] pr-[100px] mb-4  border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium border-b text-center w-[950px]"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg">
              Work History
            </button>
            <div className="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
          </li>

          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Completed
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              In-Review
            </button>
          </li>

          <li className="flex items-end ml-auto mr-[100px] mb-[15px]">
            <select
            onChange={(e) => handleChange(e.target.value)}
              id="pricingType"
              name="pricingType"
              className="w-full h-8 border-2 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            >
              <option value="All" selected="">
                All
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Design">Design</option>
              <option value="Content">Content</option>
            </select>
          </li>
        </ul>
      </div>

      <div id="default-styled-tab-content" className="pl-[100px] pr-[500px]">
        <div id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
          {completedHackathons.map((hacks, i) => {
            return <CompletedHackathons data={hacks} />;
          })}
        </div>

        <div
          
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {completedHackathons.map((hacks, i) => {
            return <InReviewHackathons data={hacks} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WorkHistory;
