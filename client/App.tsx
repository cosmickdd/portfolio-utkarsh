import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ChatInterface from "@/components/ChatInterface";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index onChatOpen={() => setShowChat(true)} />} />
            <Route path="/projects" element={<Projects onChatOpen={() => setShowChat(true)} />} />
            <Route path="/projects/:slug" element={<ProjectDetail onChatOpen={() => setShowChat(true)} />} />
            <Route path="/about" element={<About onChatOpen={() => setShowChat(true)} />} />
            <Route path="/resources" element={<Resources onChatOpen={() => setShowChat(true)} />} />
            <Route path="/contact" element={<Contact onChatOpen={() => setShowChat(true)} />} />
            <Route path="/blog" element={<Blog onChatOpen={() => setShowChat(true)} />} />
            <Route path="/blog/:slug" element={<BlogPost onChatOpen={() => setShowChat(true)} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Chat Modal - Rendered at root level to break free from Layout */}
        {showChat && (
          <ChatInterface onClose={() => setShowChat(false)} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
