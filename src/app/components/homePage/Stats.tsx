
import React from "react";

const Stats = () => {
  return (
    <div className="w-full bg-[#9F62F2]">
      <div className="container mx-auto px-4 py-15">

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by Millions, Built for You
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className=" p-8 text-center  ">
            <p className="text-white/80">Total Downloads</p>
            <h3 className="text-5xl font-bold text-white mt-3">29.6M</h3>
            <p className="text-white/70 text-sm mt-3">
              21% more than last month
            </p>
          </div>

          <div className=" p-8 text-center ">
            <p className="text-white/80">Total Reviews</p>
            <h3 className="text-5xl font-bold text-white mt-3">906K</h3>
            <p className="text-white/70 text-sm mt-3">
              46% more than last month
            </p>
          </div>

          <div className=" p-8 text-center ">
            <p className="text-white/80">Active Apps</p>
            <h3 className="text-5xl font-bold text-white mt-3">132+</h3>
            <p className="text-white/70 text-sm mt-3">
              31 more will Launch
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Stats;
