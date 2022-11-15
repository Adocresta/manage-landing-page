import React from "react";

const HeroSectionTest = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-8 lg:space-y-10 md:space-y-5 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm md:mx-0 sm:mx-auto text-darkGrayishBlue text-center md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-brightRed rounded-3xl text-left p-3 px-6 pt-2 text-white hover:bg-brightRedLight self-baseline">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="src\img\illustration-intro.svg" alt="illustration-info" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTest;
