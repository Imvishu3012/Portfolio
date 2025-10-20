"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
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

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
        setAlertType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="pb-16 pt-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ✨ Left Section Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-gray-200 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Schedule a call with me to see if I can help
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-400">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>

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

            {/* ✨ Social Icons with Staggered Animation */}
            <motion.div
              className="flex items-center mt-8 space-x-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  href: "https://github.com/Imvishu3012",
                  icon: <FiGithub className="text-white h-6 w-6" />,
                  bg: "hover:ring-2 hover:ring-white hover:bg-gray-900",
                },
                {
                  href: "https://shorturl.at/jBl6Y",
                  icon: <FiLinkedin className="text-white h-6 w-6" />,
                  bg: "hover:bg-blue-600",
                },
                {
                  href: "https://twitter.com/your-username",
                  icon: <FiTwitter className="text-white h-6 w-6" />,
                  bg: "hover:bg-sky-400",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer ${social.bg} transition-all duration-300`}
                    >
                      {social.icon}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ✨ Form Section Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:p-10 p-5 bg-[#131332] rounded-lg relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3.5 font-semibold bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 py-3.5 font-semibold bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70 w-full"
            />
            <input
              type="text"
              name="mobil"
              placeholder="Mobile Number (Optional)"
              className="px-4 py-3.5 font-semibold bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70 w-full"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="px-4 py-3.5 font-semibold bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70 w-full h-[10rem]"
            />

            <div className="relative flex items-center justify-between mt-2">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
              >
                Send Message
              </motion.button>

              {/* ✨ Floating Right Alert */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={status ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={`absolute right-0 -top-12 sm:-top-14 text-sm sm:text-base px-4 py-2 rounded-md font-medium shadow-md text-white backdrop-blur-md border border-white/10 ${
                  alertType === "success"
                    ? "bg-green-500/80 text-white"
                    : "bg-red-400/80 text-white"
                } ${!status ? "hidden" : ""}`}
              >
                {status}
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
