import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "raava",
          from_email: form.email,
          to_email: "ben@raava.io",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row  flex-col-reverse overflow-hidden justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className={styles.sectionSubText}> Address: unit 1, 306 Alberts st, Brunswick</p>
        <br />
        <p>
          <a href="mailto:justin@raava.io">justin@raava.io</a> : 0425 630 832
        </p>
        <p>
          <a href="mailto:ben@raava.io">ben@raava.io</a> : 0404 055 850
        </p>

        
{/* 
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4 items-start justify-center w-full' // Adjusted for full width and left alignment
        >
          <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full' // Set width to full
            />
          </label>
          <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full' // Set width to full
            />
          </label>
          <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enquiry'
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full' // Set width to full
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary hover:bg-highlight-primary py-2 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary' // Set width to full
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
