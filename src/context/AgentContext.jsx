import { createContext, useContext, useState, useCallback } from 'react';

const AgentContext = createContext();

export const AgentProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const openAgent = useCallback(() => {
    setIsOpen(true);
    // Add welcome message if no messages exist
    if (messages.length === 0) {
      setMessages([{
        id: 'welcome',
        type: 'agent',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date(),
      }]);
    }
  }, [messages.length]);

  const closeAgent = useCallback(() => {
    setIsOpen(false);
  }, []);

  const sendMessage = useCallback((content, type = 'user') => {
    const newMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);

    if (type === 'user') {
      setIsLoading(true);
      // Simulate AI response
      const responses = [
        "I understand your question. Let me help you with that.",
        "Based on what you've shared, here's what I think...",
        "I can see you're asking about legal matters. Here's my perspective:",
        "For your situation, here are some options worth considering.",
        "Let me break this down for you step by step:",
        "Here's how I would approach this problem:",
        "That's an important question. Here's what you should know:",
        "Every case is unique, but here are some general guidelines to consider:",
        "From a legal standpoint, you should be aware of a few key things.",
        "Great question! Here's my perspective on that."
      ];
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'agent',
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  const clearConversation = useCallback(() => {
    setMessages([]);
  }, []);

  const value = {
    isOpen,
    openAgent,
    closeAgent,
    messages,
    isLoading,
    sendMessage,
    clearConversation,
  };

  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>;
};

export const useAgent = () => {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgent must be used within an AgentProvider');
  }
  return context;
};

export default AgentContext;