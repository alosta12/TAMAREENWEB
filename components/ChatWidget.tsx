import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToAgent } from '../services/geminiService';
import { ChatMessage } from '../types';
import Logo from './Logo';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hey there! Ready to sweat? Ask me about finding a gym or booking a class!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        content: m.content
      }));

      const responseText = await sendMessageToAgent(userMsg.content, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // Updated position: bottom-6 left-6 on mobile, bottom-6 right-6 on md+
    <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-50 flex flex-col items-start md:items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mb-4 w-[300px] sm:w-[350px] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] md:h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center border border-black/5">
                   <Logo variant="icon" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base md:text-lg leading-tight">Tamareen Support</h3>
                  <p className="text-[10px] md:text-xs text-brand-900 font-medium flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-1 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-black/60 hover:text-black transition-colors bg-black/5 p-1 rounded-full hover:bg-black/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-brand-500 text-black font-medium rounded-br-none'
                        : 'bg-neutral-800 text-neutral-200 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-800 rounded-2xl rounded-bl-none px-4 py-3 border border-white/5 flex items-center space-x-2">
                    <Loader2 className="w-3 h-3 md:w-4 md:h-4 text-brand-400 animate-spin" />
                    <span className="text-[10px] md:text-xs text-neutral-400">Tamareen is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-neutral-900 border-t border-white/5">
              <div className="flex items-center space-x-2 bg-neutral-800 rounded-full px-4 py-2 border border-white/5 focus-within:border-brand-500/50 transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about gyms..."
                  className="flex-1 bg-transparent border-none outline-none text-xs md:text-sm text-white placeholder-neutral-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className={`p-1.5 rounded-full transition-colors ${
                    inputValue.trim() 
                      ? 'bg-brand-500 text-black hover:bg-brand-400' 
                      : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-neutral-900 text-brand-500 rounded-2xl shadow-lg shadow-brand-500/10 transition-all duration-300 active:scale-95 border border-white/10 hover:border-brand-500 hover:bg-neutral-800"
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Logo variant="icon" className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ChatWidget;