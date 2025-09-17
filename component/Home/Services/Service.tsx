import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:5xl font-bold text-white">
        Collaborate with brands <br /> and agencies to create impactful <br />{" "}
        results
      </h1>
      <div 
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 
        items-center"
      >
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
          <ServiceCards
            icon="/Images/s1.png"
            name="UI and UX"
            description="Designing intuitive, user-focused interfaces that boost engagement and improve business outcomes."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" >
          <ServiceCards
            icon="/Images/s2.png"
            name="Web Applications"
            description="Building modern, responsive apps with React, Next.js, and cloud tech for scalable performance."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCards
            icon="/Images/s3.png"
            name="Design & Creative"
            description="Crafting compelling visuals and brand assets that enhance identity and drive audience engagement."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCards
            icon="/Images/s4.png"
            name="Development"
            description="Delivering clean, maintainable code with modern frameworks to ensure security, speed, and scalability."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
