"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const KeyShortcuts: React.FC = () => {
  // Fade-in animation effect
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
      <div className="min-h-screen bg-rich-black pt-28 pb-24 px-4 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-rich-blue/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-60 right-20 w-[400px] h-[400px] bg-rich-green/5 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 text-center tracking-tightest headline-shadow">
            <span className="headline-gradient">Keyboard Shortcuts</span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-rich-gray-200 max-w-3xl mx-auto text-center mb-20">
            These carefully designed commands are intuitive and easy to
            remember, enhancing your workflow with Alfred.
          </p>

          <div className="glass-card p-10 md:p-12 fade-in-section">
            <div className="grid gap-y-16">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between group"
                >
                  <div className="mb-6 md:mb-0 md:pr-6">
                    <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-rich-blue transition-colors duration-300">
                      {shortcut.title}
                    </h2>
                    <p className="text-lg text-rich-gray-300">
                      {shortcut.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    {shortcut.keys.map((key, keyIndex) => (
                      <React.Fragment key={keyIndex}>
                        <KeyButton keyText={key} isPrimary={keyIndex === 0} />
                        {keyIndex < shortcut.keys.length - 1 && (
                          <span className="text-2xl text-rich-gray-400">+</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-20 glass-card p-10 fade-in-section">
            <h2 className="text-3xl font-bold text-white mb-6 headline-shadow">
              Customizing Shortcuts
            </h2>

            <p className="text-lg text-rich-gray-300 mb-4 leading-relaxed">
              You can customize these keyboard shortcuts in the settings panel.
              Alfred allows you to create a personalized experience that fits
              perfectly into your development workflow.
            </p>

            <div className="terminal-mockup mt-8">
              <div className="space-y-2">
                <div>
                  <span className="code-highlight-comment">
                    # Example configuration in ~/.alfred/config.json
                  </span>
                </div>
                <div>
                  <span className="code-highlight-keyword">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="code-highlight-string">
                    &quot;shortcuts&quot;
                  </span>
                  <span className="text-white">: {" {"}</span>
                </div>
                <div className="ml-8">
                  <span className="code-highlight-string">
                    &quot;open_assistant&quot;
                  </span>
                  <span className="text-white">: </span>
                  <span className="code-highlight-string">
                    &quot;alt+c&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-8">
                  <span className="code-highlight-string">
                    &quot;hide_assistant&quot;
                  </span>
                  <span className="text-white">: </span>
                  <span className="code-highlight-string">
                    &quot;alt+h&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-8">
                  <span className="code-highlight-string">
                    &quot;quit_assistant&quot;
                  </span>
                  <span className="text-white">: </span>
                  <span className="code-highlight-string">
                    &quot;alt+q&quot;
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-white">{"}"}</span>
                </div>
                <div>
                  <span className="code-highlight-keyword">{"}"}</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Productivity Tips */}
          <div className="mt-20 glass-card p-10 fade-in-section">
            <h2 className="text-3xl font-bold text-white mb-6 headline-shadow">
              Productivity Tips
            </h2>

            <ul className="premium-list space-y-6 text-lg">
              <li className="text-rich-gray-300 leading-relaxed">
                <span className="font-medium text-white">Quick Toggle:</span>{" "}
                Double-tap Alt+C to temporarily show and hide the assistant
                without closing it.
              </li>
              <li className="text-rich-gray-300 leading-relaxed">
                <span className="font-medium text-white">Code Selection:</span>{" "}
                Highlight a code snippet first, then press Alt+C for more
                targeted assistance.
              </li>
              <li className="text-rich-gray-300 leading-relaxed">
                <span className="font-medium text-white">
                  Combine with IDE shortcuts:
                </span>{" "}
                For maximum efficiency, learn how Alfred shortcuts complement
                your favorite IDE&apos;s keyboard commands.
              </li>
            </ul>

            <div className="mt-10 p-4 bg-glass-blue/10 border border-glass-white rounded-xl">
              <p className="text-rich-gray-200 leading-relaxed flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rich-blue mr-2 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                After quitting Alfred with Alt+Q, you can always restart it from
                your system tray or by running the Alfred application again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Key button component
const KeyButton = ({
  keyText,
  isPrimary = false,
}: {
  keyText: string;
  isPrimary?: boolean;
}) => {
  return (
    <button
      className={`
        flex items-center justify-center
        ${
          isPrimary
            ? "bg-gradient-to-b from-rich-blue/90 to-rich-blue-dark/90 shadow-blue-glow/30"
            : "bg-gradient-to-b from-glass-dark to-rich-black border border-glass-white"
        }
        rounded-xl
        px-5 py-3 min-w-[90px]
        text-xl
        text-white
        font-medium
        transition-all duration-300
        hover:translate-y-[-2px]
        hover:shadow-lg
        ${
          isPrimary
            ? "hover:shadow-blue-glow/50"
            : "hover:shadow-glass-white/30"
        }
        active:translate-y-[1px]
      `}
    >
      {keyText}
    </button>
  );
};

// Data for the page
const shortcuts = [
  {
    title: "Open Code Assistant",
    description: "Opens up the code assistant overlay for suggestions",
    keys: ["Alt", "C"],
  },
  {
    title: "Take Screenshot",
    description: "Captures the current code context for analysis",
    keys: ["Alt", "S"],
  },
  {
    title: "Hide Assistant",
    description: "Temporarily hide the assistant interface",
    keys: ["Alt", "H"],
  },
  {
    title: "Quit Assistant",
    description: "Completely exit the application",
    keys: ["Alt", "Q"],
  },
];

export default KeyShortcuts;
