// app/contact-me/page.tsx
export default function ContactMe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
        Contact Me
      </h1>

      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl p-8 border border-gray-700/50">
        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-sm text-gray-300 mb-1 block">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm text-gray-300 mb-1 block"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can I help you?"
              rows={5}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-medium py-3 px-6 rounded-lg mt-2 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
