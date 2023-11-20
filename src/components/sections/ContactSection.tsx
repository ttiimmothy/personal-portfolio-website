import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/components/utils/styles";
import SectionWrapper from "../layout/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motions";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: string; value: any } }) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: process.env.NEXT_PUBLIC_TO_NAME,
            from_email: form.email,
            to_email: process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
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
    }
  };

  return (
    <div className="overflow-hidden xl:max-w-[650px] xl:mx-auto lg:min-h-[65vh]">
      <div className="md:mx-auto md:w-[350px] mx-3">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        </motion.div>
        <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="dark:text-white font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-contact py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="dark:text-white font-medium mb-4">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-contact py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="dark:text-white font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-contact py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-contact-button py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold self-center hover:bg-gray-400"
            >
              {loading ? "Sending" : "Say Hello"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactSection, "contact");
