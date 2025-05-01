// app/contact-me/page.tsx
import React from "react";
import Navbar from "../../components/Navbar";

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-rich-black pt-28 pb-24 px-4 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rich-blue/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 -left-60 w-[400px] h-[400px] bg-rich-green/5 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 text-center tracking-tightest headline-shadow">
            <span className="headline-gradient">Get in Touch</span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-rich-gray-200 max-w-3xl mx-auto text-center mb-20">
            Have questions or feedback about Alfred? We&apos;d love to hear from
            you.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-10 md:p-12 border border-glass-white shadow-glass-lg">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-rich-gray-300 mb-2 block font-medium"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-glass-dark border border-glass-white rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-rich-blue/50 focus:border-rich-blue/50 transition-all duration-300 outline-none placeholder:text-rich-gray-500"
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none shadow-inner-glow opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-rich-gray-300 mb-2 block font-medium"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-glass-dark border border-glass-white rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-rich-blue/50 focus:border-rich-blue/50 transition-all duration-300 outline-none placeholder:text-rich-gray-500"
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none shadow-inner-glow opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm text-rich-gray-300 mb-2 block font-medium"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full bg-glass-dark border border-glass-white rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-rich-blue/50 focus:border-rich-blue/50 transition-all duration-300 outline-none appearance-none"
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-rich-gray-500"
                      >
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-rich-gray-400">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-rich-gray-300 mb-2 block font-medium"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={6}
                      className="w-full bg-glass-dark border border-glass-white rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-rich-blue/50 focus:border-rich-blue/50 transition-all duration-300 outline-none placeholder:text-rich-gray-500 resize-none"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl pointer-events-none shadow-inner-glow opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="button-premium self-start flex items-center group px-8 py-4"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center headline-shadow">
              Other Ways to Connect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* GitHub */}
              <div className="glass-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-rich-blue"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    GitHub
                  </h3>
                  <p className="text-rich-gray-300 mb-4">
                    Follow our development and contribute to the project
                  </p>
                  <a
                    href="https://github.com/emharsha1812/AIFred"
                    className="text-rich-blue hover:text-rich-blue-light transition-colors inline-flex items-center"
                  >
                    View Repository
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-rich-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Email</h3>
                  <p className="text-rich-gray-300 mb-4">
                    Contact us directly for specific inquiries
                  </p>
                  <a
                    href="mailto:contact@alfred-ai.com"
                    className="text-rich-blue hover:text-rich-blue-light transition-colors"
                  >
                    contact@alfred-ai.com
                  </a>
                </div>
              </div>

              {/* Documentation */}
              <div className="glass-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-rich-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Documentation
                  </h3>
                  <p className="text-rich-gray-300 mb-4">
                    Explore our docs for detailed information
                  </p>
                  <a
                    href="#"
                    className="text-rich-blue hover:text-rich-blue-light transition-colors inline-flex items-center"
                  >
                    Read Docs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
