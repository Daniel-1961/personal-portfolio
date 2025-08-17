
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto">
        {/* Contact Text */}
        <p className="text-center text-gray-600 mb-8">
          Have a project in mind or just want to say hi? Fill out the form
          below, or connect with me through my socials.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree endpoint
          method="POST"
          className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-red-600 hover:text-red-800 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
