import React from "react";

const PhilosophyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Our Philosophy
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-8">
            In today&apos;s fast-paced development environment, we all
            appreciate tools that boost productivity. AI-powered coding
            assistants have shown immense promise, but often come with a
            trade-off: sending your code to the cloud, raising privacy concerns.
          </p>

          <p className="text-gray-300 text-lg mb-8">
            We believe you deserve intelligent assistance without compromise.
            That&apos;s why we&apos;re building
            <span className="font-bold text-white"> AIFred</span>: a real-time,
            on-screen AI coding assistant designed with{" "}
            <span className="font-bold text-white">
              privacy and developer control
            </span>{" "}
            at its core. Imagine having a smart coding partner working alongside
            you, offering suggestions directly in your editor, browser, or
            terminal – all powered by AI models running
            <span className="font-bold text-white">
              {" "}
              entirely on your local machine.
            </span>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
            How AIFred Works: Seamless Assistance, Right Where You Type
          </h2>

          <p className="text-gray-300 mb-6">
            AIFred integrates smoothly into your existing workflow:
          </p>

          <ol className="list-decimal pl-6 text-gray-300 space-y-4 mb-8">
            <li className="pl-2">
              <span className="font-semibold text-white">Observes:</span>{" "}
              Running quietly in the background, AIFred monitors your active
              application and cursor position. It&apos;s designed to understand
              when and where you&apos;re working with code.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Analyzes Context:
              </span>{" "}
              When you pause, select code, or use a custom hotkey, AIFred
              intelligently identifies the relevant code snippet you&apos;re
              focused on.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Generates Locally:
              </span>{" "}
              This context is sent
              <em> only</em> to an AI language model (like Llama, Mistral, etc.)
              running locally on your machine via the popular{" "}
              <span className="font-semibold text-white">Ollama</span>{" "}
              framework. Your code never leaves your device. Ollama generates
              contextually relevant suggestions – code completion, explanations,
              debugging hints, and more.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Displays Intelligently:
              </span>{" "}
              Suggestions instantly appear in a clean, unobtrusive overlay
              window positioned near your cursor. Need the suggestion? Great!
              Don&apos;t need it? It can be dismissed easily via hotkey or a
              simple click, disappearing without disrupting your flow.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
            Key Features Making a Difference
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-8">
            <li className="pl-2">
              <span className="font-semibold text-white">
                Real-time Suggestions:
              </span>{" "}
              Get helpful AI insights exactly when you need them.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Seamless Overlay UI:
              </span>{" "}
              A non-intrusive Kivy-based interface delivers suggestions without
              forcing you to switch windows.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                100% Local & Private:
              </span>{" "}
              Leverages Ollama to run powerful open-source LLMs directly on your
              hardware. Your code stays yours.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">Context-Aware:</span>{" "}
              AIFred focuses on the code you&apos;re actively working on,
              providing relevant assistance.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Customizable Hotkeys:
              </span>{" "}
              Define your own keyboard shortcuts to instantly request
              suggestions or dismiss the overlay.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Works Across Applications:
              </span>{" "}
              Designed to assist wherever you code – IDEs, text editors, web
              browsers, and more.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Configurable Experience:
              </span>{" "}
              Choose your preferred Ollama model, customize hotkeys, and toggle
              the assistant on/off easily.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
            The Technology Powering AIFred
          </h2>

          <p className="text-gray-300 mb-6">
            We&apos;ve chosen a modern, efficient technology stack to bring
            AIFred to life:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-8">
            <li className="pl-2">
              <span className="font-semibold text-white">
                Core Language (Python):
              </span>{" "}
              Leveraging Python&apos;s extensive AI/ML ecosystem and rapid
              development capabilities allows us to build and iterate quickly.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                AI Engine (Ollama & Local LLMs):
              </span>{" "}
              At the heart of AIFred is Ollama, enabling easy management and
              efficient execution of state-of-the-art open-source Large Language
              Models (like Llama 3, Mistral, CodeLlama) locally on your CPU or
              GPU. This is key to our privacy-first approach.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                User Interface (Kivy):
              </span>{" "}
              We utilize the Kivy framework to create the responsive,
              customizable, and potentially cross-platform overlay interface.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Screen Interaction (mss, pynput, etc.):
              </span>{" "}
              Using efficient libraries for screen capture and global keyboard
              monitoring allows AIFred to understand your context and respond to
              your commands system-wide.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Responsiveness (asyncio):
              </span>{" "}
              Python&apos;s asyncio framework ensures that background tasks like
              communicating with Ollama or monitoring the screen don&apos;t
              block the user interface, keeping AIFred responsive.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
            Your Privacy and Control Come First
          </h2>

          <p className="text-gray-300 mb-8">
            This isn&apos;t just another feature; it&apos;s our foundation.
            Unlike cloud-based alternatives, AIFred processes everything
            locally. Your code snippets, your context, your interactions – they
            remain exclusively on your machine. You control the AI model, you
            control the data.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
            Current Status & Roadmap
          </h2>

          <p className="text-gray-300 mb-8">
            We are actively developing AIFred, initially focusing on providing a
            robust experience for{" "}
            <span className="font-semibold text-white">Windows</span> users. Our
            roadmap includes expanding support for{" "}
            <span className="font-semibold text-white">Linux and macOS</span>,
            continuously improving context detection, and releasing the project
            as
            <span className="font-semibold text-white"> open-source</span> to
            foster community collaboration.
          </p>

          <p className="text-gray-300 text-lg">
            AIFred aims to be the go-to solution for developers seeking powerful
            AI coding assistance without compromising on privacy or control.
            Stay tuned for updates as we bring intelligent, local AI assistance
            seamlessly into your development workflow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
