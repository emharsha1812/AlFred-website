// app/how-it-works/page.tsx
export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">How It Works</h1>
      <p className="text-gray-300 text-center max-w-2xl mb-12">
        Alfred is an AI-powered coding assistant that works alongside your IDE.
        This guide explains the technology behind Alfred.
      </p>

      <div className="max-w-3xl w-full bg-zinc-900 rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-8">System Architecture</h2>

        {/* Step 1 */}
        <div className="flex items-start gap-4 mb-8">
          <div className="bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="font-semibold">1</span>
          </div>
          <div>
            <h3 className="text-xl font-medium">Screen Capture & Analysis</h3>
            <p className="text-gray-300 mt-2">
              Alfred captures your screen in real time and uses computer-vision
              (OpenCV/Tesseract.js) to detect and extract code snippets.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 mb-8">
          <div className="bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="font-semibold">2</span>
          </div>
          <div>
            <h3 className="text-xl font-medium">Local AI Processing</h3>
            <p className="text-gray-300 mt-2">
              The extracted code is processed by a locally-hosted LLM (like a
              Llama model via llama.cpp), keeping your code private and secure.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 mb-8">
          <div className="bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="font-semibold">3</span>
          </div>
          <div>
            <h3 className="text-xl font-medium">Real-time Overlay UI</h3>
            <p className="text-gray-300 mt-2">
              Suggestions appear in an unobtrusive overlay built with React,
              Tailwind CSS, and daisyUI without leaving your editor.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex items-start gap-4">
          <div className="bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            <span className="font-semibold">4</span>
          </div>
          <div>
            <h3 className="text-xl font-medium">Core Technology Stack</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <li className="bg-zinc-800 p-3 rounded-lg">
                Electron/Tauri for cross-platform support
              </li>
              <li className="bg-zinc-800 p-3 rounded-lg">
                OpenCV/Tesseract.js for image processing
              </li>
              <li className="bg-zinc-800 p-3 rounded-lg">
                llama.cpp for on-device AI inference
              </li>
              <li className="bg-zinc-800 p-3 rounded-lg">
                React + Tailwind + daisyUI for UI
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo or visualization section */}
      <div className="max-w-3xl w-full bg-zinc-900 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">See It In Action</h2>
        <div className="border-2 border-yellow-500/30 rounded-lg overflow-hidden">
          <div className="mockup-code bg-black text-white">
            <pre data-prefix="$">
              <code>npm install ai-fred</code>
            </pre>
            <pre data-prefix="$">
              <code>npx ai-fred start</code>
            </pre>
            <pre data-prefix=">" className="text-green-400">
              <code>AI Fred is watching your screen</code>
            </pre>
            <pre data-prefix=">" className="text-green-400">
              <code>Ready to provide suggestions!</code>
            </pre>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="#watch-demo"
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
  );
}
