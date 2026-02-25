"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Loader, GripHorizontal } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatInterfaceProps {
  onClose?: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
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
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Widget dragging state
  const [position, setPosition] = useState({ x: typeof window !== "undefined" ? window.innerWidth - 420 : 0, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const widgetRef = useRef<HTMLDivElement>(null);

  // Desktop only - hide on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mouse down handler for drag
  const handleDragStart = (e: React.MouseEvent) => {
    if (!isMinimized) return;
    
    const drag = e.currentTarget as HTMLDivElement;
    const rect = drag.getBoundingClientRect();
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Mouse move handler
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition((prev) => ({
        x: Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - 320)),
        y: Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - 60)),
      }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

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
    <>
      <style>{`
        @keyframes slideInsert {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .chat-widget {
          animation: slideInsert 0.3s ease-out;
        }

        .message-enter {
          animation: slideInsert 0.3s ease-out;
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
        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* Draggable Widget - Desktop Only */}
      {!isMobile && (
        <div
          ref={widgetRef}
          className="chat-widget fixed z-[98]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "default",
          }}
        >
          {isMinimized ? (
            // Minimized Widget
            <button
              onMouseDown={handleDragStart}
              onClick={() => setIsMinimized(false)}
              className="group flex items-center gap-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all px-5 py-3.5 cursor-grab active:cursor-grabbing hover:border-gray-300"
            >
              <div className="flex-shrink-0 cursor-grab">
                <GripHorizontal size={16} className="text-gray-400 group-hover:text-gray-600" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">UK</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Chat</p>
                  <p className="text-xs text-gray-600">Ask me anything</p>
                </div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600">↑</div>
            </button>
          ) : (
            // Expanded Widget
            <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col max-h-[600px]">
              {/* Header */}
              <div
                onMouseDown={handleDragStart}
                className="h-14 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-between px-5 cursor-grab active:cursor-grabbing border-b border-gray-700"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">UK</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">Utkarsh</p>
                    <p className="text-xs text-gray-400">Usually replies quickly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={18} className="text-gray-300" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto chat-messages p-4 space-y-3 bg-white">
                {messages.map((msg) => (
                  <div key={msg.id} className="message-enter">
                    <div
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2.5 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-gray-900 text-white rounded-br-none"
                            : "bg-gray-100 text-gray-900 rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm break-words">{msg.text}</p>
                        <p
                          className={`text-xs mt-1.5 ${
                            msg.sender === "user"
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
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
                    <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center gap-2">
                      <Loader size={14} className="text-gray-600 animate-spin" />
                      <span className="text-sm text-gray-600">Thinking...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="bg-white border-t border-gray-200 p-4 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-gray-900 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <Loader size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Powered by AI
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
