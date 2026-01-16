import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(
        "Email service isn't configured. Please add EmailJS env vars (VITE_APP_EMAILJS_SERVICE_ID / VITE_APP_EMAILJS_TEMPLATE_ID / VITE_APP_EMAILJS_PUBLIC_KEY)."
      );
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill out name, email, and message.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Samandeep Bishnoi",
          from_email: form.email,
          to_email: "samandeepbishnoi@gmail.com",
          message: form.message,
        },
        publicKey
      );

      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (_) {
      setErrorMsg("Couldn't send your message. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Social Buttons */}
        <div className="mt-4 mb-8  flex flex-wrap justify-center items-center  md:justify-center gap-5">
          <a
            href="https://github.com/samandeepbishnoi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-900 py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saman29/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary flex items-center gap-2"
          >
            <FaLinkedin className="text-lg" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          {errorMsg ? (
            <p className="text-red-400 text-sm -mb-2">{errorMsg}</p>
          ) : null}

          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
