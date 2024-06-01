const ContactForm = () => {
  return (
    <section>
      <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
        <h1 className="items-center gap-16 py-8 text-4xl font-extrabold">
          Contact me
        </h1>
        <p>
          Please feel free to contact me about work or oppourtunities via my
          email or telephone number.
        </p>
        <p>
          <span>✉️</span> anniebookerillustration@gmail.com
        </p>
        <p>
          <span>📱</span> 07383085096
        </p>
        <p>
          As always I am keen to be involved in conservation, rewildling work in
          any way.
        </p>

        <form className="mt-10 space-y-6">
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
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-5 py-3 text-sm font-medium text-center text-white bg-gray-700 rounded-sm sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
