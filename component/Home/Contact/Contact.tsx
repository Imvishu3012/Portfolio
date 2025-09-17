import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


const Contact = () => {

  //Just to handle Form
 const [status, setStatus] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/xnnbkjwz", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) {
      setAlertType("success");
      setStatus("✅ Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setAlertType("error");
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  // Auto-hide alert after 5 sec when status changes
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
        setAlertType("");
      }, 5000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [status]);


  return (
    <div className="pb-16 pt-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-gray-200 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Schedule a call with me to see if I can help
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-400">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>
          {/* Info */}
          <div className="mt-7">
            <div className="flex space-x-2 items-center mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 text-xl font-bold">+91 9145774650</p>
            </div>
            <div className="flex space-x-2 items-center mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 text-xl font-bold">
                iamvishalprajapati18@gmail.com
              </p>
            </div>
            <div className="flex space-x-2 items-center mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-gray-400 text-xl font-bold">
                Mumbai, Maharashtra
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center mt-8 space-x-3">
      {/* GitHub */}
      <Link
        href="https://github.com/Imvishu3012"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer
          flex-col hover:bg-gray-900 hover:ring-2 hover:ring-white transition-all duration-300 "
        >
          <FiGithub className="text-white h-6 w-6" />
        </div>
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://shorturl.at/jBl6Y"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer
          flex-col hover:bg-blue-600 transition-all duration-300 "
        >
          <FiLinkedin className="text-white h-6 w-6" />
        </div>
      </Link>

      {/* Twitter */}
      <Link
        href="https://twitter.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer
          flex-col hover:bg-sky-400 transition-all duration-300 "
        >
          <FiTwitter className="text-white h-6 w-6" />
        </div>
      </Link>
    </div>
          </div>
        </div>
        {/* form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >  
        {/* Alert Banner */}
  {status && (
    <div
      className={`absolute -top-12 left-5 right-5 md:left-10 md:right-10 text-center px-6 py-3 rounded-full text-white font-medium shadow-md transition-all duration-500 ${
        alertType === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {status}
    </div>
  )}


          {/* Used formstree for data receiving through form on my email */}

          <form onSubmit={handleSubmit}>  
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3.5 mt-6 font-semibold bg-[#363659] text-white outline-none rounded-md
          placeholder:text-white/70 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 font-semibold mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md
          placeholder:text-white/70 w-full"
            />
            <input
              type="text"
              name="mobil"
              placeholder="Mobile Number"
              className="px-4 font-semibold mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md
          placeholder:text-white/70 w-full"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="px-4 font-semibold mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md
          placeholder:text-white/70 w-full h-[10rem]"
            />
            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer
          text-white rounded-full active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
