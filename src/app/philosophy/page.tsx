import React from "react";
import Navbar from "../../components/Navbar";

const PhilosophyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-rich-black pt-28 pb-24 px-4 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute -top-60 left-1/4 w-[500px] h-[500px] bg-rich-blue/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 -right-60 w-[400px] h-[400px] bg-rich-green/5 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-12 text-center tracking-tightest headline-shadow">
            <span className="headline-gradient">Our Philosophy</span>
          </h1>

          {/* Introduction */}
          <div className="mb-20">
            <div className="glass-card p-8 md:p-10">
              <p className="text-xl md:text-2xl font-light text-rich-gray-200 leading-relaxed mb-8">
                In today&apos;s fast-paced development environment, we all
                appreciate tools that boost productivity. AI-powered coding
                assistants have shown immense promise, but often come with a
                trade-off: sending your code to the cloud, raising privacy
                concerns.
              </p>

              <p className="text-xl md:text-2xl font-light text-rich-gray-200 leading-relaxed">
                We believe you deserve intelligent assistance without
                compromise. That&apos;s why we&apos;re building
                <span className="font-medium text-white"> AIFred</span>: a
                real-time, on-screen AI coding assistant designed with{" "}
                <span className="font-medium text-white">
                  privacy and developer control
                </span>{" "}
                at its core. Imagine having a smart coding partner working
                alongside you, offering suggestions directly in your editor,
                browser, or terminal – all powered by AI models running
                <span className="font-medium text-white">
                  {" "}
                  entirely on your local machine.
                </span>
              </p>
            </div>
          </div>

          {/* How AIFred Works Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 headline-shadow">
              How AIFred Works:
              <br />
              <span className="text-rich-gray-300 font-light">
                Seamless Assistance, Right Where You Type
              </span>
            </h2>

            <p className="text-xl text-rich-gray-300 mb-10">
              AIFred integrates smoothly into your existing workflow:
            </p>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="glass-card p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-blue-glow/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rich-blue/10 flex items-center justify-center border border-rich-blue/20 shadow-blue-glow/10">
                        <span className="text-xl text-rich-blue font-semibold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-rich-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 headline-shadow">
              Key Features Making a Difference
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 transform transition-all duration-300 hover:shadow-blue-glow/20"
                >
                  <h3 className="text-xl font-medium text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-rich-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 headline-shadow">
              The Technology Powering AIFred
            </h2>

            <p className="text-xl text-rich-gray-300 mb-10">
              We&apos;ve chosen a modern, efficient technology stack to bring
              AIFred to life:
            </p>

            <div className="glass-card">
              <div className="grid grid-cols-1 divide-y divide-glass-white">
                {technologies.map((tech, index) => (
                  <div key={index} className="p-6 md:p-8">
                    <h3 className="text-xl font-medium text-white mb-3">
                      {tech.title}
                    </h3>
                    <p className="text-rich-gray-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="mb-24">
            <div className="glass-card p-8 md:p-10 border border-rich-green/20 shadow-green-glow/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 headline-shadow">
                Your Privacy and Control Come First
              </h2>

              <p className="text-xl text-rich-gray-200 leading-relaxed">
                This isn&apos;t just another feature; it&apos;s our foundation.
                Unlike cloud-based alternatives, AIFred processes everything
                locally. Your code snippets, your context, your interactions –
                they remain exclusively on your machine. You control the AI
                model, you control the data.
              </p>
            </div>
          </div>

          {/* Current Status Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 headline-shadow">
              Current Status & Roadmap
            </h2>

            <div className="glass-card p-8 md:p-10">
              <p className="text-xl text-rich-gray-300 mb-8 leading-relaxed">
                We are actively developing AIFred, initially focusing on
                providing a robust experience for{" "}
                <span className="font-medium text-white">Windows</span> users.
                Our roadmap includes expanding support for{" "}
                <span className="font-medium text-white">Linux and macOS</span>,
                continuously improving context detection, and releasing the
                project as
                <span className="font-medium text-white"> open-source</span> to
                foster community collaboration.
              </p>

              <div className="gradient-divider"></div>

              <p className="text-xl text-rich-gray-200 leading-relaxed pt-8">
                AIFred aims to be the go-to solution for developers seeking
                powerful AI coding assistance without compromising on privacy or
                control. Stay tuned for updates as we bring intelligent, local
                AI assistance seamlessly into your development workflow!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Data arrays for the Philosophy page
const workflowSteps = [
  {
    title: "Observes",
    description:
      "Running quietly in the background, AIFred monitors your active application and cursor position. It's designed to understand when and where you're working with code.",
  },
  {
    title: "Analyzes Context",
    description:
      "When you pause, select code, or use a custom hotkey, AIFred intelligently identifies the relevant code snippet you're focused on.",
  },
  {
    title: "Generates Locally",
    description:
      "This context is sent only to an AI language model (like Llama, Mistral, etc.) running locally on your machine via the popular Ollama framework. Your code never leaves your device. Ollama generates contextually relevant suggestions – code completion, explanations, debugging hints, and more.",
  },
  {
    title: "Displays Intelligently",
    description:
      "Suggestions instantly appear in a clean, unobtrusive overlay window positioned near your cursor. Need the suggestion? Great! Don't need it? It can be dismissed easily via hotkey or a simple click, disappearing without disrupting your flow.",
  },
];

const features = [
  {
    title: "Real-time Suggestions",
    description: "Get helpful AI insights exactly when you need them.",
  },
  {
    title: "Seamless Overlay UI",
    description:
      "A non-intrusive Kivy-based interface delivers suggestions without forcing you to switch windows.",
  },
  {
    title: "100% Local & Private",
    description:
      "Leverages Ollama to run powerful open-source LLMs directly on your hardware. Your code stays yours.",
  },
  {
    title: "Context-Aware",
    description:
      "AIFred focuses on the code you're actively working on, providing relevant assistance.",
  },
  {
    title: "Customizable Hotkeys",
    description:
      "Define your own keyboard shortcuts to instantly request suggestions or dismiss the overlay.",
  },
  {
    title: "Works Across Applications",
    description:
      "Designed to assist wherever you code – IDEs, text editors, web browsers, and more.",
  },
  {
    title: "Configurable Experience",
    description:
      "Choose your preferred Ollama model, customize hotkeys, and toggle the assistant on/off easily.",
  },
];

const technologies = [
  {
    title: "Core Language (Python)",
    description:
      "Leveraging Python's extensive AI/ML ecosystem and rapid development capabilities allows us to build and iterate quickly.",
  },
  {
    title: "AI Engine (Ollama & Local LLMs)",
    description:
      "At the heart of AIFred is Ollama, enabling easy management and efficient execution of state-of-the-art open-source Large Language Models (like Llama 3, Mistral, CodeLlama) locally on your CPU or GPU. This is key to our privacy-first approach.",
  },
  {
    title: "User Interface (Kivy)",
    description:
      "We utilize the Kivy framework to create the responsive, customizable, and potentially cross-platform overlay interface.",
  },
  {
    title: "Screen Interaction (mss, pynput, etc.)",
    description:
      "Using efficient libraries for screen capture and global keyboard monitoring allows AIFred to understand your context and respond to your commands system-wide.",
  },
  {
    title: "Responsiveness (asyncio)",
    description:
      "Python's asyncio framework ensures that background tasks like communicating with Ollama or monitoring the screen don't block the user interface, keeping AIFred responsive.",
  },
];

export default PhilosophyPage;
