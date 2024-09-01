export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 my-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="contact-info">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Feel free to contact us using the form below or reach out to us at
            the following:
          </p>
          <ul className="list-disc pl-4 mb-8">
            <li className="text-gray-700">Email: example@yourcompany.com</li>
            <li className="text-gray-700">Phone: (555) 555-5555</li>
          </ul>
        </div>

        <form
          className="contact-form flex flex-col space-y-4"
          method="POST"
          action="/api/contact"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
