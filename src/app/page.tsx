"use client";

import Link from "next/link";
import Image from "next/image";
import ollama from "../../assets/ollama.svg";
import gemini from "../../assets/gemini.svg";

export default function Page() {
  return (
    <>
      {/* NAVBAR */}
      <div className="navbar bg-gray-900 fixed top-0 z-50 w-full shadow-md justify-between">
        <div className="px-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl text-gray-100"
          >
            <Image
              src="/favicon.ico"
              alt="Alfred Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span>Alfred</span>
          </Link>
        </div>

        <div className="flex"></div>

        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-200">
            <li>
              <Link href="/how-it-works">How it works?</Link>
            </li>
            <li>
              <Link href="/key-shortcuts">Keyboard Shortcuts</Link>
            </li>
            <li>
              <Link href="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link href="/contact-me">Contact me</Link>
            </li>
            <li className="ml-2">
              <Link
                href="https://github.com/emharsha1812/AIFred"
                className="btn bg-gray-700 hover:bg-gray-600 text-gray-100 border-gray-600"
              >
                Github Repository
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow text-gray-200"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works?</Link>
              </li>
              <li>
                <Link href="/contact-me">Contact me</Link>
              </li>
              <li>
                <Link href="/philosophy">Philosophy</Link>
              </li>
              <li>
                <Link href="/key-shortcuts">Keyboard Shortcuts</Link>{" "}
                {/* Add this line */}
              </li>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAIN HERO */}
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Fully local offline coding helper
        </h1>
        <p className="max-w-2xl text-gray-300 mb-8">
          A coding tool for your daily tasks. Compatible with any browser, IDE
          and platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold px-6 py-3 rounded-lg backdrop-blur-md border-gray-600">
            Download for Mac
          </button>
          <button className="btn btn-ghost border border-gray-600 hover:bg-gray-700/50 text-gray-300 font-semibold px-6 py-3 rounded-lg backdrop-blur-md">
            Download for Windows
          </button>
        </div>

        {/* TECHNOLOGY STACK SECTION - ADD THIS */}
        <div className="mt-32 w-full max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Built with modern tools including
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Python */}
            <div className="group tech-card">
              <div className="bg-gray-800 bg-opacity-70 rounded-xl p-5 flex flex-col items-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-700">
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
              <div className="bg-gray-800 bg-opacity-70 rounded-xl p-5 flex flex-col items-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-700">
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

            {/* Qt */}
            <div className="group tech-card">
              <div className="bg-gray-800 bg-opacity-70 rounded-xl p-5 flex flex-col items-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-700">
                <div className="h-16 w-16 flex items-center justify-center mb-3">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg"
                    alt="Qt"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                    unoptimized
                  />
                </div>
                <span className="text-gray-200 font-medium">Qt</span>
              </div>
            </div>

            {/* Gemini */}
            <div className="group tech-card">
              <div className="bg-gray-800 bg-opacity-70 rounded-xl p-5 flex flex-col items-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-green-500/20 border border-gray-700">
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
      </main>
    </>
  );
}
