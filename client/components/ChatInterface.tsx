import { useState, useRef, useEffect } from "react";
import { Send, X, Loader } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export default function ChatInterface({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Utkarsh's AI assistant. Ask me anything about my background, experience, skills, or projects!",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message || "Sorry, I couldn't generate a response. Please try again.",
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please check the server logs and make sure your API key is configured correctly.",
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Scroll after setting loading to false
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', zIndex: 99999, overflow: 'hidden' }}>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpMobile {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .message-enter {
          animation: slideUp 0.3s ease-out;
        }

        .typing-indicator span {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #9CA3AF;
          margin: 0 2px;
          animation: bounce 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* Custom scrollbar */
        .messages-container::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Gradient fade at top/bottom */
        .messages-fade-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: linear-gradient(to bottom, #050505, transparent);
          pointer-events: none;
          border-radius: 28px 28px 0 0;
          z-index: 10;
        }

        .messages-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: linear-gradient(to top, #050505, transparent);
          pointer-events: none;
          z-index: 10;
        }

        /* Mobile slide animation */
        @media (max-width: 768px) {
          .chat-panel-mobile {
            animation: slideUpMobile 0.3s ease-out;
          }
        }
      `}</style>

      {/* OVERLAY - Single overlay for both desktop and mobile */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-[8px] z-40 cursor-pointer"
        onClick={onClose}
      />

      {/* DESKTOP VERSION - Fullscreen */}
      <div className="hidden md:flex fixed inset-0 z-50 flex-col bg-[#050505]" onClick={(e) => e.stopPropagation()}>
          {/* HEADER */}
          <div className="h-14 bg-[#121212] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DC2626] to-[#991B1B] flex items-center justify-center">
                <span className="text-xs font-bold text-white">UK</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#E5E7EB]">Utkarsh</p>
                <p className="text-xs text-[#9CA3AF]">Active</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} className="text-[#9CA3AF]" />
            </button>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 overflow-y-auto messages-container relative">
            <div className="messages-fade-top" />
            <div className="p-5 space-y-3.5">
              {messages.map((msg) => (
                <div key={msg.id} className="message-enter">
                  <div
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-[20px] ${
                        msg.sender === "user"
                          ? "bg-[#DC2626] text-white"
                          : "bg-[#1F1F1F] text-[#E5E7EB]"
                      }`}
                    >
                      <p className="text-sm break-words">{msg.text}</p>
                      <p className="text-xs opacity-40 mt-1">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start message-enter">
                  <div className="bg-[#1F1F1F] rounded-[20px] px-4 py-3 flex items-center gap-2">
                    <Loader size={16} className="text-[#9CA3AF] animate-spin" />
                    <span className="text-sm text-[#9CA3AF]">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
            <div className="messages-fade-bottom" />
          </div>

          {/* INPUT AREA */}
          <div className="bg-[#121212] border-t border-[rgba(255,255,255,0.05)] p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder="Type your message..."
                className="flex-1 bg-[#1F1F1F] text-[#E5E7EB] placeholder-[#6B7280] rounded-[999px] px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#DC2626]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#DC2626] disabled:hover:scale-100"
              >
                {isLoading ? (
                  <Loader size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </div>
        </div>

      {/* MOBILE VERSION - Hidden on desktop */}
      <div className="md:hidden chat-panel-mobile fixed bottom-0 left-0 right-0 z-50 h-[85vh] bg-[#050505] rounded-t-[28px] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="h-14 bg-[#121212] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DC2626] to-[#991B1B] flex items-center justify-center">
              <span className="text-xs font-bold text-white">UK</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#E5E7EB]">Utkarsh</p>
              <p className="text-xs text-[#9CA3AF]">Active</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={20} className="text-[#9CA3AF]" />
          </button>
        </div>

        {/* MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto messages-container relative">
          <div className="messages-fade-top" />
          <div className="p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className="message-enter">
                <div
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-[20px] ${
                      msg.sender === "user"
                        ? "bg-[#DC2626] text-white"
                        : "bg-[#1F1F1F] text-[#E5E7EB]"
                    }`}
                  >
                    <p className="text-sm break-words">{msg.text}</p>
                    <p className="text-xs opacity-40 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start message-enter">
                <div className="bg-[#1F1F1F] rounded-[20px] px-4 py-3 flex items-center gap-2">
                  <Loader size={16} className="text-[#9CA3AF] animate-spin" />
                  <span className="text-sm text-[#9CA3AF]">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
          <div className="messages-fade-bottom" />
        </div>

        {/* INPUT AREA */}
        <div className="bg-[#121212] border-t border-[rgba(255,255,255,0.05)] p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              placeholder="Type your message..."
              className="flex-1 bg-[#2A2A2A] text-[#E5E7EB] placeholder-[#6B7280] rounded-[999px] px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#DC2626]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#DC2626] disabled:hover:scale-100"
            >
              {isLoading ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
