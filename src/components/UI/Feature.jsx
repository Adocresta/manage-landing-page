import React from "react";
import FeatureList from "./FeatureList";

const Feature = () => {
  return (
    <section id="feature">
      <div className="container flex flex-col px-6 mx-auto mt-10 p-6 md:space-y-0 space-y-10 lg:space-x-20 md:space-x-10 md:flex-row">
        <div className="flex flex-col space-y-10 md:w-1/2">
          <h1 className="max-w-sm text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h1>
          <p className="max-w-sm text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            soluta non praesentium est quasi molestiae nihil ratione corrupti
            nam debitis omnis incidunt architecto laudantium et aperiam, sint
            accusamus a illum!
          </p>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default Feature;
