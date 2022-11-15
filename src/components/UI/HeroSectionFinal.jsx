import React from "react";

const HeroSectionFinal = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto md:flex-row p-6">
        <div className="flex flex-col space-y-5 lg:space-y-10 md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-center md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="text-darkGrayishBlue max-w-sm mx-auto md:mx-0 text-center md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex flex-row justify-center md:justify-start">
            <button className="bg-brightRed text-white p-3 px-6 pt-2 rounded-3xl hover:bg-brightRedLight">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="src\img\illustration-intro.svg" alt="chart illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFinal;
