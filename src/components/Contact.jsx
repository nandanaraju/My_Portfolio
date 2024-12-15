import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact</h2>
          <p className="text-lg leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* LinkedIn */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaLinkedin className="text-yellow-400 w-6 h-6" />
            </div>
            <p className="font-semibold">LINKEDIN</p>
            <a
              href="https://www.linkedin.com/in/nandanav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400"
            >
              https://www.linkedin.com/in/nandanav
            </a>
          </div>
          {/* Contact Number */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaPhone className="text-yellow-400 w-6 h-6" />
            </div>
            <p className="font-semibold">CONTACT NUMBER</p>
            <p className="text-gray-400">+91 9539251394</p>
          </div>
          {/* Email Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaEnvelope className="text-yellow-400 w-6 h-6" />
            </div>
            <p className="font-semibold">EMAIL ADDRESS</p>
            <a href="mailto:nandanav0074@gmail.com" className="text-gray-400">
              nandanav0074@gmail.com
            </a>
          </div>
          {/* Website */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaGithub className="text-yellow-400 w-6 h-6" />
            </div>
            <p className="font-semibold">GITHUB</p>
            <a
              href="https://github.com/nandanaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400"
            >
              https://github.com/nandanaraju
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 mb-6 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-4 mb-6 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 py-6">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Nandana V. All rights reserved.
            </p>
            <p>
              Developed with <span className="text-yellow-400">&hearts;</span> by Nandana V
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
