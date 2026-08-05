"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/components/utils/styles";
import { fadeIn, staggerContainer, textVariant } from "@/components/utils/motions";
import {ExternalLink, Mail} from "lucide-react";

function LinkedInLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
  )
}

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
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.sectionPadding} md:max-w-7xl md:mx-auto relative z-0 dark:text-slate-200 flex flex-col items-center justify-center`}
      id="contact"
    >
    <div className="overflow-hidden xl:max-w-[650px] xl:mx-auto">
      <div className="mx-auto">
        {/* <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Let's talk</p>
        </motion.div> */}
        <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)}>
          {/* <form
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
          </form> */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                I build production multi-agent systems. If you have an interesting problem where AI is the right tool — let us talk
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={"mailto:timothyemail805@gmail.com"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full contact-bg-primary text-primary-foreground font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 active:brightness-95 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  timothyemail805@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/timothyurl/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/10 transition-colors duration-200 hover:bg-primary/5"
                >
                  <LinkedInLogo className="w-4 h-4 text-[hsl(var(--linkedin))]" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mt-12 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Timothy
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
};

export default ContactSection;
