import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/nandanav",
    href: "https://www.linkedin.com/in/nandanav",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/nandanaraju",
    href: "https://github.com/nandanaraju",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: "Email",
    value: "nandanav0074@gmail.com",
    href: "mailto:nandanav0074@gmail.com",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: <FaPhone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 95392 51394",
    href: "tel:+919539251394",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[#07071a] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase">Let's Talk</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Reach me via</h3>
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform duration-200`}
              >
                <div className={`${item.color}`}>{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                  <p className={`font-medium ${item.color}`}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-2">Send a message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none text-sm"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.01]"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Nandana V. All rights reserved.</p>
        <p className="mt-1">Built with <span className="text-yellow-400">♥</span> using React & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
