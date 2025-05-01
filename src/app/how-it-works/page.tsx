import React from "react";
import Navbar from "../../components/Navbar";

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-rich-black pt-28 pb-24 px-4 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute -top-64 -right-32 w-[600px] h-[600px] bg-rich-blue/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-2/3 -left-60 w-[500px] h-[500px] bg-rich-green/5 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 text-center tracking-tightest headline-shadow">
            <span className="headline-gradient">How It Works</span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-rich-gray-200 max-w-3xl mx-auto text-center mb-20">
            Alfred is an AI-powered coding assistant that works alongside your
            IDE. This guide explains the technology behind Alfred.
          </p>

          <div className="glass-card p-10 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white headline-shadow">
              System Architecture
            </h2>

            {/* Step 1 */}
            <div className="fade-in-section mb-16 transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center border border-rich-blue/20 shadow-blue-glow/10">
                    <span className="text-xl text-rich-blue font-semibold">
                      1
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Screen Capture & Analysis
                  </h3>
                  <p className="text-xl text-rich-gray-300 leading-relaxed">
                    Alfred captures your screen in real time and uses
                    computer-vision (OpenCV/Tesseract.js) to detect and extract
                    code snippets.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="fade-in-section mb-16 transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center border border-rich-blue/20 shadow-blue-glow/10">
                    <span className="text-xl text-rich-blue font-semibold">
                      2
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Local AI Processing
                  </h3>
                  <p className="text-xl text-rich-gray-300 leading-relaxed">
                    The extracted code is processed by a locally-hosted LLM
                    (like a Llama model via llama.cpp), keeping your code
                    private and secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="fade-in-section mb-16 transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center border border-rich-blue/20 shadow-blue-glow/10">
                    <span className="text-xl text-rich-blue font-semibold">
                      3
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Real-time Overlay UI
                  </h3>
                  <p className="text-xl text-rich-gray-300 leading-relaxed">
                    Suggestions appear in an unobtrusive overlay built with
                    React, Tailwind CSS, and daisyUI without leaving your
                    editor.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="fade-in-section transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center border border-rich-blue/20 shadow-blue-glow/10">
                    <span className="text-xl text-rich-blue font-semibold">
                      4
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-6">
                    Core Technology Stack
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="glass-card p-4 bg-glass-dark border-glass-white transform transition-all duration-300 hover:shadow-blue-glow/20 hover:border-rich-blue/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Demo or visualization section */}
          <div className="glass-card p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center headline-shadow">
              See It In Action
            </h2>

            <div className="terminal-mockup w-full mb-10">
              <div>
                <div className="mb-2">
                  <span className="text-rich-gray-400">$</span>
                  <span className="text-rich-gray-300 ml-2">
                    npm install ai-fred
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-rich-gray-400">$</span>
                  <span className="text-rich-gray-300 ml-2">
                    npx ai-fred start
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-rich-green ml-2">
                    {">"} AI Fred is watching your screen
                  </span>
                </div>
                <div>
                  <span className="text-rich-green ml-2">
                    {">"} Ready to provide suggestions!
                  </span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="#watch-demo"
                className="button-premium group flex items-center px-6 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Data for the page
const techStack = [
  "Electron/Tauri for cross-platform support",
  "OpenCV/Tesseract.js for image processing",
  "llama.cpp for on-device AI inference",
  "React + Tailwind + daisyUI for UI",
];
