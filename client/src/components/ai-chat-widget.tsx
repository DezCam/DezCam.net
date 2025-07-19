import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, TrendingUp, Globe, Code, Sparkles, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

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
      label: 'Chat now with Desmond about Trading',
      icon: <TrendingUp className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I want to learn how to trade');
        setTimeout(() => {
          addMessage('bot', "Perfect! I can connect you with Desmond's proven trading strategies. He achieved 1,407% returns and offers personalized mentorship.", [
            {
              id: 'join-waiting-list',
              label: 'Join Trading Classes Waiting List 📊',
              icon: <TrendingUp className="h-4 w-4" />,
              action: () => {
                addMessage('user', 'Join Trading Classes Waiting List');
                setTimeout(() => {
                  const element = document.querySelector('[data-waiting-list-trigger]') as HTMLElement;
                  if (element) {
                    element.click();
                  }
                  addMessage('bot', "Great! The waiting list form is now open. Fill it out to secure your spot in Desmond's exclusive trading program.");
                }, 500);
              }
            }
          ]);
        }, 1000);
      }
    },
    {
      id: 'website',
      label: 'Schedule a meeting for Website Development',
      icon: <Calendar className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need a website built for my business');
        setTimeout(() => {
          addMessage('bot', "Excellent! Desmond creates professional websites with modern design and full functionality. Let's explore the options.", [
            {
              id: 'view-web-services',
              label: 'View Website Services 🌐',
              icon: <Globe className="h-4 w-4" />,
              action: () => {
                scrollToServices();
                addMessage('bot', "Perfect! I've taken you to the Services section. You can see pricing starting at $2,500 and contact Desmond directly.");
              }
            }
          ]);
        }, 1000);
      }
    },
    {
      id: 'software',
      label: 'Get our Custom Software Solutions',
      icon: <BarChart3 className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need custom software developed');
        setTimeout(() => {
          addMessage('bot', "Outstanding! Desmond develops custom business applications with full-stack expertise. Let me show you what's available.", [
            {
              id: 'view-software-services',
              label: 'View Software Services 💻',
              icon: <Code className="h-4 w-4" />,
              action: () => {
                scrollToServices();
                addMessage('bot', "Fantastic! Check out the Software Development section for comprehensive solutions starting at $5,000.");
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
    setShowSpeechBubble(false);
    initializeChat();
  };

  // Show speech bubble after delay, hide when chat opens
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowSpeechBubble(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide speech bubble when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowSpeechBubble(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeechBubble && !isOpen && (
          <motion.div
            className="fixed bottom-[104px] right-[24px] z-40"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative">
              {/* Speech bubble */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-berkeley-blue/20 px-4 py-3 max-w-[200px]">
                <p className="text-berkeley-blue font-medium text-sm leading-relaxed">
                  Welcome! How may I help you today?
                </p>
              </div>
              {/* Speech bubble tail pointing to avatar */}
              <div className="absolute -bottom-2 right-[40px] w-4 h-4 bg-white border-r-2 border-b-2 border-berkeley-blue/20 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={handleOpen}
          className="h-20 w-20 rounded-full bg-gradient-to-br from-berkeley-blue to-blue-800 hover:from-blue-800 hover:to-berkeley-blue shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 flex items-center justify-center"
          size="lg"
        >
          <div className="relative flex items-center justify-center">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white/30 bg-white flex items-center justify-center">
              <img 
                src="/avatar-centered.jpg" 
                alt="Chat with Desmond" 
                className="w-20 h-20 object-cover object-center"
              />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-california-gold rounded-full border-2 border-white"></div>
          </div>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Main Content with Gradient Background */}
            <div className="bg-gradient-to-br from-berkeley-blue via-blue-700 to-blue-900 text-white relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white hover:bg-white/10 h-8 w-8 p-0 rounded-full z-10"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-california-gold/30 bg-white flex items-center justify-center">
                    <img 
                      src="/avatar-centered.jpg" 
                      alt="Desmond's AI Assistant" 
                      className="w-16 h-16 object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Welcome to Desmond's Site!</h3>
                    <p className="text-white/80 text-sm">How can we help you today?</p>
                  </div>
                </div>
              </div>

              {/* Initial Options or Messages */}
              <div className="px-6 pb-6 space-y-3">
                {messages.length === 0 ? (
                  // Show initial options directly
                  initialOptions.map((option) => (
                    <Button
                      key={option.id}
                      onClick={option.action}
                      className="w-full bg-white hover:bg-california-gold text-berkeley-blue hover:text-white font-medium py-5 px-5 rounded-lg transition-all duration-200 hover:shadow-md border-0 justify-start text-sm leading-normal min-h-[75px] h-auto whitespace-normal flex items-center"
                      variant="secondary"
                    >
                      <span className="mr-4 flex-shrink-0">{option.icon}</span>
                      <span className="text-left break-words flex-1 leading-relaxed">{option.label}</span>
                    </Button>
                  ))
                ) : (
                  // Show messages if conversation started
                  <div className="max-h-64 overflow-y-auto space-y-3">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-white/20 text-white backdrop-blur-sm'
                            : 'bg-white/95 text-gray-800'
                        }`}>
                          <span className="text-sm">{message.content}</span>
                          
                          {/* Options */}
                          {message.options && (
                            <div className="mt-3 space-y-2">
                              {message.options.map((option) => (
                                <Button
                                  key={option.id}
                                  onClick={option.action}
                                  className="w-full bg-white/90 hover:bg-california-gold text-berkeley-blue hover:text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 text-xs"
                                  variant="secondary"
                                >
                                  <span className="mr-1">{option.icon}</span>
                                  {option.label}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 pb-4">
                <p className="text-xs text-white/60 leading-relaxed">
                  By using this chat feature, you consent to all chat messages being stored according to our privacy policy.
                </p>
              </div>
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