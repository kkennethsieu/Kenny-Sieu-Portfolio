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
        className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2"
      >
        <label className="flex flex-col col-span-2 sm:col-span-1">
          <span className="mb-2 text-sm font-medium">Name</span>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col col-span-2 sm:col-span-1">
          <span className="mb-2 text-sm font-medium">Email</span>
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col col-span-2">
          <span className="mb-2 text-sm font-medium">Message</span>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="5"
            placeholder="Write your message here..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.message && (
            <span className="text-sm text-red-500">
              {errors.message.message}
            </span>
          )}
        </label>
        <div className="flex justify-end col-span-2">
          {successMessage ? (
            <div className="rounded-lg">
              <strong>{successMessage}</strong>
            </div>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 font-medium text-white transition duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:scale-105"
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
