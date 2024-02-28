

function contact() {
  return (
    <div className="pl-[280px] mb-10">
      <div className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-semibold mb-4">Feedback Us</h2>
      <p className="text-gray-600 mb-6">
        Have questions or concerns? Reach out to us using the form below, and well get back to you as soon as possible.
      </p>
      <section className="py-10">
      <form className="mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form></section>
    </div>
    </div>
  )
}

export default contact
