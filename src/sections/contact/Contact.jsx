import SectionTitle from "../../components/SectionTitle";

function Contact() {
  return (
    <div id="contact" className="pt-16">
      <SectionTitle title="Contact" />
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-gray-700">Name</span>
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
        </label>
        <label className="flex flex-col md:col-span-2">
          <span className="mb-2 text-sm font-medium text-gray-700">
            Message
          </span>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-noneresize-none"
          />
        </label>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
