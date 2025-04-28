"use client";

import React from "react";

const KeyShortcuts: React.FC = () => {
  const shortcuts = [
    {
      title: "Open Code Assistant",
      description: "Opens up the code assistant",
      keys: ["Alt", "C"],
    },
    {
      title: "Take Screenshot",
      description: "Captures a screenshot",
      keys: ["Alt", "S"],
    },
    {
      title: "Hide Assistant",
      description: "Hide the assistant interface",
      keys: ["Alt", "H"],
    },
    {
      title: "Quit Assistant",
      description: "Exit the application",
      keys: ["Alt", "Q"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-300 mb-4">
          Shortcuts for the assistant
        </h1>
        <p className="text-lg text-gray-400 text-center mb-16">
          These commands are designed to be natural and easy to remember.
        </p>

        <div className="space-y-10">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {shortcut.title}
                </h2>
                <p className="text-gray-400">{shortcut.description}</p>
              </div>

              <div className="flex items-center gap-2">
                {shortcut.keys.map((key, keyIndex) => (
                  <React.Fragment key={keyIndex}>
                    <button
                      className={`
                        inline-flex items-center justify-center
                        bg-gradient-to-b from-zinc-700 to-zinc-800
                        inset-ring-1 inset-ring-zinc-600
                        shadow-lg
                        rounded-lg
                        px-3.5 py-2.5 min-w-[80px]
                        text-lg sm:text-xl
                        text-zinc-200
                        font-medium
                        transition-all duration-200
                        hover:from-zinc-700/85
                        hover:to-zinc-800/85
                        hover:translate-y-[1.5px]
                        hover:inset-ring-zinc-600/40
                        active:translate-y-[3px]
                        active:shadow-md
                        active:from-zinc-700/75
                        active:to-zinc-800/75
                        ${
                          keyIndex === 0
                            ? "bg-gradient-to-b from-indigo-700 to-indigo-800 border-indigo-600"
                            : ""
                        }
                      `}
                    >
                      {key}
                    </button>
                    {keyIndex < shortcut.keys.length - 1 && (
                      <span className="text-xl text-gray-400">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyShortcuts;
