"use client";

import { useSectionInView } from "@/app/libs/hook";
import React from "react";
import SubmitBtn from "@/app/inputs/SubmitBtn";
import Select from "react-select";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";

const optionsFind = [
  { value: "Google Search", label: "Google Search" },
  { value: "Linkedin", label: "LinkedIn" },
  { value: "Instagram", label: "Instagram" },
  { value: "Facebook", label: "Facebook" },
  { value: "*", label: "Other" },
];

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.25);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 sm:px-24 px-6 w-full flex flex-col items-center text-center"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-full sm:px-10 px-0 py-5 border shadow-xl "
      >
        <h2 className="text-4xl text-neutral-950 font-bold md:text-start text-center">Contact us</h2>
        <div className="w-full">
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!.", {
                style: {
                  border: "1px solid #0FCC00",
                  padding: "10px",
                  color: "#0FCC00",
                },
                iconTheme: {
                  primary: "#0FCC00",
                  secondary: "#FFFAEE",
                },
              });
            }}
            className="mt-5 flex flex-col mx-10 sm:mx-0"
          >
            <textarea
              name="message"
              className="h-44 my-2 border-2 hover:border-red-900 transition border-black/10 p-4"
              placeholder="Tell us a bit about your requirement *"
              required
              maxLength={5000}
            />
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row mb-2">
              <input
                name="name"
                className="h-14 px-4 sm:mr-2 mb-2 sm:mb-0 border-2 hover:border-red-900 transition border-black/10 lg:w-1/2 w-full"
                type="text"
                required
                maxLength={500}
                placeholder="Full Name *"
              />
              <input
                name="senderEmail"
                className="h-14 px-4 border-2 hover:border-red-900 transition border-black/ lg:w-1/2 w-full"
                type="email"
                required
                maxLength={500}
                placeholder="Your email *"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row">
              <input
                name="phone"
                className="h-14 px-4 sm:mr-2 mb-2 sm:mb-0 border-2 hover:border-red-900 transition border-black/10 lg:w-1/2 w-full"
                type="text"
                required
                placeholder="Your Phone *"
              />
              <input
                name="country"
                className="h-14 px-4 border-2 hover:border-red-900 transition border-black/10 mb-2 lg:w-1/2 w-full"
                type="text"
                maxLength={500}
                required
                placeholder="Address (Street, City, Zip Code) *"
              />
            </div>

            <label className="flex flex-col ">
              <span className="flex flex-start">How did your heart about us</span>
              <Select
                required
                options={optionsFind}
                name="findus"
                placeholder="- Select -"
                isSearchable={false}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "red" : "red",
                    transition: "ease .5s",
                    textAlign: "start",
                    marginBottom: "0.5rem",
                    height: "3.5rem"
                  }),
                }}
              />
            </label>

            <SubmitBtn />
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
