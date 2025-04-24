import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import sendMessage from "../../services/apiMessage";
import { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    sendMessage(data)
      .then(() => {
        setSuccessMessage("Message successfully sent!");
        reset();
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div id="contact" className="pt-16">
      <SectionTitle title="Contact" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
      >
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-gray-700">Name</span>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-gray-700">Email</span>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col col-span-2">
          <span className="mb-2 text-sm font-medium text-gray-700">
            Message
          </span>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="5"
            placeholder="Write your message here..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </label>
        <div className="col-span-2 flex justify-end">
          {successMessage ? (
            <div className="rounded-lg">
              <strong>{successMessage}</strong>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transform hover:scale-105"
            >
              Send Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
