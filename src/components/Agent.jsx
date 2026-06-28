import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Bot,
  User,
  Loader,
  MessageSquare,
  Trash2,
} from 'lucide-react';
import { useAgent } from '../context/AgentContext';

const suggestionPrompts = [
  "What legal services do you offer?",
  "How can AI help with contract review?",
  "Tell me about your pricing",
  "How secure is the platform?",
  "Request a demo",
  "What makes you different?",
];

const Agent = () => {
  const { isOpen, closeAgent, messages, isLoading, sendMessage, clearConversation } = useAgent();
  const [input, setInput] = useState('');
  const [, setShowSuggestions] = useState(messages.length === 0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    setShowSuggestions(false);
    sendMessage(input.trim());
    setInput('');
  };

  const handleSuggestionClick = (prompt) => {
    setShowSuggestions(false);
    sendMessage(prompt);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            onClick={closeAgent}
          />

          {/* Agent Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[100] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-gradient-to-r from-accent to-highlight p-4 text-white">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Bot size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">AskFides AI</h3>
                    <div className="flex items-center space-x-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                      <span className="text-xs text-white/80">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {messages.length > 0 && (
                    <button
                      onClick={clearConversation}
                      className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                      title="Clear conversation"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <button
                    onClick={closeAgent}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-highlight rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <MessageSquare size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">How can I help you?</h4>
                  <p className="text-sm text-gray-500 mb-6">
                    Ask me anything about AskFides and how we can transform your legal workflow.
                  </p>
                  <div className="grid grid-cols-1 gap-2 w-full max-w-xs">
                    {suggestionPrompts.map((prompt, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSuggestionClick(prompt)}
                        className="text-left px-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:border-accent hover:text-accent hover:shadow-sm transition-all"
                      >
                        {prompt}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        msg.type === 'user'
                          ? 'bg-gray-200'
                          : 'bg-gradient-to-br from-accent to-highlight'
                      }`}
                    >
                      {msg.type === 'user' ? (
                        <User size={16} className="text-gray-600" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        msg.type === 'user'
                          ? 'bg-accent text-white rounded-tr-none'
                          : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.content}</p>
                      <div
                        className={`text-xs mt-1.5 ${
                          msg.type === 'user' ? 'text-white/60' : 'text-gray-400'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 border border-gray-200 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Loader size={16} className="text-accent animate-spin" />
                        <span className="text-sm text-gray-500">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 border-t border-gray-200 bg-white p-4">
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    style={{ minHeight: '44px', maxHeight: '120px' }}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                    input.trim() && !isLoading
                      ? 'bg-gradient-to-r from-accent to-highlight text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 text-center">
                Powered by AskFides AI — Responses are AI-generated
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Agent;
