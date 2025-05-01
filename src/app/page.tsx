"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ollama from "../../assets/ollama.svg";
import gemini from "../../assets/gemini.svg";

export default function Page() {
  // Refs for fade-in animations
  const heroRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Hero Section */}
      <main className="pt-24 min-h-screen bg-rich-black bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rich-black via-rich-blue/5 to-rich-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-rich-blue/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-60 -right-40 w-96 h-96 bg-rich-green/10 rounded-full filter blur-3xl opacity-20"></div>

        {/* Hero content */}
        <div
          ref={heroRef}
          className="fade-in-section max-w-4xl mx-auto text-center z-10 mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tightest text-white headline-shadow mb-6">
            <span className="headline-gradient">Fully local</span>
            <br />
            coding assistant
          </h1>
          <p className="text-xl md:text-2xl font-light text-rich-gray-200 max-w-2xl mx-auto mb-12">
            A sophisticated AI tool that enhances your development
            workflow—without sending your code to the cloud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="button-premium flex items-center group">
              Download for Mac
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button className="button-premium-outline flex items-center group">
              Download for Windows
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Feature highlights */}
        <div
          ref={featuresRef}
          className="fade-in-section w-full max-w-5xl mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
              <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rich-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Privacy First
              </h3>
              <p className="text-rich-gray-300">
                All processing happens on your device. Your code remains
                completely private and secure.
              </p>
            </div>

            <div className="glass-card p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
              <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rich-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Lightning Fast
              </h3>
              <p className="text-rich-gray-300">
                Get real-time suggestions without network latency. Enhance your
                workflow with instant AI assistance.
              </p>
            </div>

            <div className="glass-card p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-blue-glow/20">
              <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rich-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Works Everywhere
              </h3>
              <p className="text-rich-gray-300">
                Compatible with any IDE, browser, or text editor. Alfred adapts
                to your development environment.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div ref={techStackRef} className="fade-in-section w-full max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white headline-shadow">
            Built with modern tools
          </h2>
          <p className="text-xl text-rich-gray-300 text-center mb-12">
            Leveraging cutting-edge technologies for a seamless experience
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Python */}
            <div className="group tech-card">
              <div className="glass-card p-5 flex flex-col items-center w-32 h-32 justify-center transform transition-all duration-500 hover:border-rich-blue/30">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Python"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                    unoptimized
                  />
                </div>
                <span className="text-gray-200 font-medium">Python</span>
              </div>
            </div>

            {/* Ollama */}
            <div className="group tech-card">
              <div className="glass-card p-5 flex flex-col items-center w-32 h-32 justify-center transform transition-all duration-500 hover:border-rich-blue/30">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <Image
                    src={ollama}
                    alt="Ollama"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                </div>
                <span className="text-gray-200 font-medium">Ollama</span>
              </div>
            </div>

            {/* Electron */}
            <div className="group tech-card">
              <div className="glass-card p-5 flex flex-col items-center w-32 h-32 justify-center transform transition-all duration-500 hover:border-rich-blue/30">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
                    alt="Electron"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                    unoptimized
                  />
                </div>
                <span className="text-gray-200 font-medium">Electron</span>
              </div>
            </div>

            {/* Gemini */}
            <div className="group tech-card">
              <div className="glass-card p-5 flex flex-col items-center w-32 h-32 justify-center transform transition-all duration-500 hover:border-rich-blue/30">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <Image
                    src={gemini}
                    alt="Gemini"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                </div>
                <span className="text-gray-200 font-medium">Gemini</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal mockup section */}
        <div className="w-full max-w-5xl my-32 px-4">
          <div className="terminal-mockup w-full">
            <div className="space-y-2">
              <div className="text-rich-gray-300">
                <span className="code-highlight-function">alfred</span>
                <span className="text-white">.</span>
                <span className="code-highlight-function">analyze</span>
                <span className="text-white">(</span>
                <span className="code-highlight-string">
                  &quot;selected_code&quot;
                </span>
                <span className="text-white">)</span>
              </div>
              <div className="text-rich-gray-400 ml-4">
                <span className="code-highlight-comment">
                  # Analyzing code pattern...
                </span>
              </div>
              <div className="text-rich-gray-300 ml-4">
                <span className="code-highlight-keyword">def</span>{" "}
                <span className="code-highlight-function">fibonacci</span>
                <span className="text-white">(</span>n
                <span className="text-white">):</span>
              </div>
              <div className="text-rich-gray-300 ml-8">
                <span className="code-highlight-keyword">if</span> n{" "}
                <span className="text-white">&lt;=</span>{" "}
                <span className="code-highlight-variable">1</span>
                <span className="text-white">:</span>
              </div>
              <div className="text-rich-gray-300 ml-12">
                <span className="code-highlight-keyword">return</span> n
              </div>
              <div className="text-rich-gray-300 ml-8">
                <span className="code-highlight-keyword">return</span>{" "}
                <span className="code-highlight-function">fibonacci</span>
                <span className="text-white">(</span>n
                <span className="text-white">-</span>
                <span className="code-highlight-variable">1</span>
                <span className="text-white">)</span>{" "}
                <span className="text-white">+</span>{" "}
                <span className="code-highlight-function">fibonacci</span>
                <span className="text-white">(</span>n
                <span className="text-white">-</span>
                <span className="code-highlight-variable">2</span>
                <span className="text-white">)</span>
              </div>
              <div className="h-6"></div>
              <div className="text-rich-blue ml-4">
                <span className="font-semibold">Alfred suggests:</span> This
                recursive implementation has exponential time complexity.
                Consider using memoization or an iterative approach for better
                performance<span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-rich-black/80 border-t border-glass-white py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rich-blue to-rich-blue-dark flex items-center justify-center shadow-blue-glow">
                <Image
                  src="/favicon.ico"
                  alt="Alfred Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-semibold text-white">Alfred</span>
            </div>
            <p className="text-rich-gray-300 max-w-xs text-sm">
              A fully local, privacy-focused AI coding assistant for developers
              who value control and security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white font-medium mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/key-shortcuts"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Shortcuts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/philosophy"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-me"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-rich-gray-300 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-12 pt-6 border-t border-glass-white flex flex-col md:flex-row justify-between items-center">
          <p className="text-rich-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Alfred AI. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/emharsha1812/AIFred"
              className="text-rich-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-rich-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
