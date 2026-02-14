import { useState } from "react";
import ChatInterface from "../components/ChatInterface";

export default function Chat() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Light website content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Chat with Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Open the chat interface on the right to start a conversation. The dark, immersive chat space
          overlays the light website, creating a focused experience.
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Features
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Dark immersive interface</li>
              <li>✓ Smooth animations</li>
              <li>✓ Responsive design</li>
              <li>✓ Message history</li>
              <li>✓ Typing indicator</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Experience
            </h2>
            <p className="text-gray-600 text-sm">
              The chat interface is designed to feel like entering a focused, calm space. 
              The dark aesthetic contrasts beautifully with the light website, creating 
              a premium, immersive experience.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}

      {/* Floating button to reopen chat */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        >
          💬
        </button>
      )}
    </div>
  );
}
