"use client";
import React, { useRef, useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_ID
        )
        .then(
          (result) => {
            setIsSent(true);
            setTimeout(() => {
              setIsSent(false);
              form.current?.reset();
            }, 5000);
            setMessage("Email successfully sent!");
          },
          (error) => {
            if (error.text) {
              setMessage(`Failed to send email. Error: ${error.text}`);
            } else {
              setMessage("Failed to send email. Please try again later.");
            }
          }
        );
    }
  };

  return (
    <section>
      <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
        <h1 className="text-4xl font-extrabold mb-4">Contact me</h1>
        <p className="mb-4">
          Please feel free to contact me about work or opportunities via my
          email or telephone number.
        </p>
        <p className="mb-4">
          <span>✉️</span>{" "}
          <a href="mailto&#58;a%&#54;&#69;%6&#69;ie&#98;ook&#101;ri&#108;lu%&#55;3tra&#116;&#105;on&#64;g%6Da%6&#57;%6C&#46;c%6&#70;m">
            anni&#101;b&#111;&#111;&#107;erillustra&#116;i&#111;n&#64;gm&#97;il&#46;com
          </a>
        </p>
        <p className="mb-4">
          <span>📱</span> 07383085096
        </p>
        <p className="mb-8">
          As always I am keen to be involved in conservation, rewilding work in
          any way.
        </p>

        {isClient && (
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-sm shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Write your message"
                rows={6}
                required
              ></textarea>
            </div>

            {isSent && (
              <p className="text-green-600">Email successfully sent!</p>
            )}
            {!isSent && message && <p>{message}</p>}

            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-center text-white bg-gray-700 rounded-sm sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
