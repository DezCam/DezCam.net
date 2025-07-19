import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, User, TrendingUp, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WaitingListDialog from "./waiting-list-dialog";

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: ChatOption[];
}

interface ChatOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWaitingList, setShowWaitingList] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const initialOptions: ChatOption[] = [
    {
      id: 'trading',
      label: 'Learn How to Trade',
      icon: <TrendingUp className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I want to learn how to trade');
        setTimeout(() => {
          addMessage('bot', "Great choice! I can help you get started with trading education. Let me connect you with Desmond's trading classes waiting list.", [
            {
              id: 'join-waiting-list',
              label: 'Join Trading Classes Waiting List',
              icon: <TrendingUp className="h-4 w-4" />,
              action: () => {
                addMessage('user', 'Join Trading Classes Waiting List');
                setTimeout(() => {
                  // Create and trigger the waiting list dialog programmatically
                  const element = document.querySelector('[data-waiting-list-trigger]') as HTMLElement;
                  if (element) {
                    element.click();
                  }
                  addMessage('bot', "The waiting list form has been opened for you. Please fill it out to join the trading classes waiting list!");
                }, 500);
              }
            }
          ]);
        }, 1000);
      }
    },
    {
      id: 'website',
      label: 'Get a Website Built',
      icon: <Globe className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need a website built for my business');
        setTimeout(() => {
          addMessage('bot', "Perfect! Desmond specializes in building professional websites for businesses and organizations. Let me show you the services available.", [
            {
              id: 'view-web-services',
              label: 'View Website Services',
              icon: <Globe className="h-4 w-4" />,
              action: () => {
                scrollToServices();
                addMessage('bot', "I've scrolled you to the Services section where you can learn more about website development services and get in touch!");
              }
            }
          ]);
        }, 1000);
      }
    },
    {
      id: 'software',
      label: 'Get Software Developed',
      icon: <Code className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need custom software developed');
        setTimeout(() => {
          addMessage('bot', "Excellent! Desmond offers custom software development services for businesses needing specialized solutions. Check out the available options.", [
            {
              id: 'view-software-services',
              label: 'View Software Services',
              icon: <Code className="h-4 w-4" />,
              action: () => {
                scrollToServices();
                addMessage('bot', "I've taken you to the Services section where you can explore software development options and contact Desmond directly!");
              }
            }
          ]);
        }, 1000);
      }
    }
  ];

  const addMessage = (type: 'bot' | 'user', content: string, options?: ChatOption[]) => {
    setMessages(prev => [...prev, {
      type,
      content,
      timestamp: new Date(),
      options
    }]);
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      addMessage('bot', "Hi! I'm Desmond's AI assistant. How can I help you today?", initialOptions);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setTimeout(() => {
      initializeChat();
    }, 500);
  };

  const handleOpen = () => {
    setIsOpen(true);
    initializeChat();
  };

  return (
    <>
      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={handleOpen}
          className="h-14 w-14 rounded-full bg-berkeley-blue hover:bg-berkeley-blue/90 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-berkeley-blue text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetChat}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-berkeley-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <span className="text-sm">{message.content}</span>
                    </div>
                    
                    {/* Options */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option) => (
                          <Button
                            key={option.id}
                            variant="outline"
                            size="sm"
                            onClick={option.action}
                            className="w-full justify-start text-xs h-8 bg-white hover:bg-berkeley-blue hover:text-white border-berkeley-blue text-berkeley-blue"
                          >
                            {option.icon}
                            <span className="ml-2">{option.label}</span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Waiting List Dialog for AI Integration */}
      <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}>
        <WaitingListDialog />
      </div>
    </>
  );
}