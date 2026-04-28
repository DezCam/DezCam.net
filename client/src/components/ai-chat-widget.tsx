import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, TrendingUp, Globe, Code, Sparkles, Calendar, BarChart3, HelpCircle, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');

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

  const openCalendly = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const initialOptions: ChatOption[] = [
    {
      id: 'outcome-session',
      label: 'Free Outcome Alignment Session',
      icon: <Calendar className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I want to book a free consultation');
        setTimeout(() => {
          addMessage('bot', "Perfect! Navigating to our contact page");
          setTimeout(() => {
            // Navigate to contact page with highlight
            if (window.location.pathname === '/') {
              window.location.href = '#contact?highlight=outcome';
            } else {
              window.location.href = '/#contact?highlight=outcome';
            }
          }, 1000);
        }, 1000);
      }
    },
    {
      id: 'trading',
      label: 'Book Trading Session',
      icon: <TrendingUp className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I want to learn how to trade');
        setTimeout(() => {
          addMessage('bot', "Perfect! Navigating to our services page");
          setTimeout(() => {
            // Navigate to services page with trading highlight
            window.location.href = '/services?highlight=trading';
          }, 1000);
        }, 1000);
      }
    },
    {
      id: 'website',
      label: 'Website Design & Development',
      icon: <Globe className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need a website built for my business');
        setTimeout(() => {
          addMessage('bot', "Perfect! Navigating to our services page");
          setTimeout(() => {
            // Navigate to services page with website highlight
            window.location.href = '/services?highlight=website';
          }, 1000);
        }, 1000);
      }
    },
    {
      id: 'software',
      label: 'Custom Software for SMBs',
      icon: <Code className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need custom software developed');
        setTimeout(() => {
          addMessage('bot', "Perfect! Navigating to our services page");
          setTimeout(() => {
            // Navigate to services page with software highlight
            window.location.href = '/services?highlight=software';
          }, 1000);
        }, 1000);
      }
    },
    {
      id: 'smb-consulting',
      label: 'RevOps Consulting',
      icon: <Briefcase className="h-4 w-4" />,
      action: () => {
        addMessage('user', 'I need business consulting');
        setTimeout(() => {
          addMessage('bot', "Perfect! Navigating to our services page");
          setTimeout(() => {
            // Navigate to services page with SMB consulting highlight
            window.location.href = '/services?highlight=smb-consulting';
          }, 1000);
        }, 1000);
      }
    },
    {
      id: 'other',
      label: 'Other Questions',
      icon: <HelpCircle className="h-4 w-4" />,
      action: () => {
        setShowOtherInput(true);
        addMessage('bot', "I'd be happy to help! What would you like to know about Desmond's background, experience, or services?");
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
    setShowOtherInput(false);
    setUserQuestion('');
    setTimeout(() => {
      initializeChat();
    }, 500);
  };

  const handleQuestionSubmit = () => {
    if (!userQuestion.trim()) return;
    
    addMessage('user', userQuestion);
    setUserQuestion('');
    setShowOtherInput(false);
    
    setTimeout(() => {
      const question = userQuestion.toLowerCase();
      let response = "";
      
      // Simple keyword-based responses
      if (question.includes('trading') || question.includes('trade') || question.includes('returns')) {
        response = "Desmond achieved 1,407% trading returns in just 4 months and offers personalized trading education. He teaches proven strategies, risk management, and market analysis.";
      } else if (question.includes('consult') || question.includes('smb') || question.includes('business strategy') || question.includes('small business')) {
        response = "Desmond offers SMB Consulting with custom solutions tailored to your unique business challenges. Services include business process optimization, growth strategy, and operational efficiency audits.";
      } else if (question.includes('website') || question.includes('web') || question.includes('development')) {
        response = "Desmond creates professional, responsive websites using modern technologies like React and TypeScript. He's built 50+ websites with custom designs and full functionality.";
      } else if (question.includes('software') || question.includes('app') || question.includes('custom')) {
        response = "Desmond develops custom software solutions for businesses, including database design, API development, and full-stack applications using enterprise-grade technologies.";
      } else if (question.includes('experience') || question.includes('background') || question.includes('education')) {
        response = "Desmond is a UC Berkeley Haas graduate with experience in product management at Toshi Markets, entrepreneurship (LoyalPup startup), and extensive trading expertise.";
      } else if (question.includes('price') || question.includes('cost') || question.includes('pricing')) {
        response = "Trading Education: $500/month, Website Development: $700-$3,000, Custom Software: Starting at $3,000, SMB Consulting: Custom pricing. All services include ongoing support.";
      } else {
        response = "That's a great question! I'd recommend reaching out directly so Desmond can provide you with detailed information tailored to your specific needs.";
      }
      
      addMessage('bot', response, [
        {
          id: 'contact-form',
          label: 'Fill Out Contact Form 📝',
          icon: <Send className="h-4 w-4" />,
          action: () => {
            addMessage('user', 'Fill Out Contact Form');
            setTimeout(() => {
              window.location.href = '/#contact';
            }, 500);
          }
        }
      ]);
    }, 1000);
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
            className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] rounded-xl shadow-2xl overflow-hidden"
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
                                  <div className="flex items-center space-x-3 w-full">
                                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                      {option.icon}
                                    </div>
                                    <span className="flex-1 text-left">{option.label}</span>
                                  </div>
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

              {/* Other Questions Input */}
              {showOtherInput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-6 py-4 border-t border-white/20"
                >
                  <div className="flex gap-2">
                    <Input
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      placeholder="Type your question here..."
                      onKeyPress={(e) => e.key === 'Enter' && handleQuestionSubmit()}
                      className="flex-1 bg-white/90 border-white/30 text-gray-800 placeholder:text-gray-500"
                    />
                    <Button
                      onClick={handleQuestionSubmit}
                      size="sm"
                      className="bg-california-gold hover:bg-yellow-500 text-berkeley-blue font-medium"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

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