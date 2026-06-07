import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

type Step = "menu" | "response";

interface ResponseData {
  message: string;
  buttonLabel: string;
  buttonHref: string;
}

const MENU_OPTIONS = [
  { id: "revops", label: "RevOps / Workflow cleanup" },
  { id: "software", label: "Custom software or website" },
  { id: "ai", label: "AI automation" },
  { id: "research", label: "Market research" },
  { id: "trading", label: "Trading education" },
  { id: "browsing", label: "Just browsing" },
];

const RESPONSES: Record<string, ResponseData> = {
  revops: {
    message:
      "Sounds like a great fit. Desmond specializes in cleaning up workflows and building better revenue systems. Fill out a quick inquiry and he'll follow up within 1 business day.",
    buttonLabel: "Send an Inquiry",
    buttonHref: "/contact",
  },
  software: {
    message:
      "Perfect. Desmond builds custom web apps, internal tools, and business websites from scratch. Fill out a quick inquiry and he'll follow up within 1 business day.",
    buttonLabel: "Send an Inquiry",
    buttonHref: "/contact",
  },
  ai: {
    message:
      "Great choice. Desmond builds custom AI agents that handle intake, research, and workflow automation. Fill out a quick inquiry and he'll follow up within 1 business day.",
    buttonLabel: "Send an Inquiry",
    buttonHref: "/contact",
  },
  research: {
    message:
      "Got it. Desmond delivers competitor analysis, customer discovery, and market strategy. Fill out a quick inquiry and he'll follow up within 1 business day.",
    buttonLabel: "Send an Inquiry",
    buttonHref: "/contact",
  },
  trading: {
    message:
      "Interested in learning to trade? Send an inquiry and I'll set you up with a free beginner's lesson to get you started.",
    buttonLabel: "Send an Inquiry",
    buttonHref: "/contact",
  },
  browsing: {
    message:
      "No problem — take your time. The Work page shows recent projects if you want to see what's been built.",
    buttonLabel: "View Work",
    buttonHref: "/work",
  },
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [step, setStep] = useState<Step>("menu");
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [, navigate] = useLocation();

  const handleSelect = (id: string) => {
    setResponse(RESPONSES[id]);
    setStep("response");
  };

  const handleReset = () => {
    setStep("menu");
    setResponse(null);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowSpeechBubble(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowSpeechBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setShowSpeechBubble(false);
  }, [isOpen]);

  return (
    <>
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeechBubble && !isOpen && (
          <motion.div
            className="fixed bottom-[170px] right-[24px] z-40"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg border border-ash-gray/30 px-4 py-3 max-w-[210px]">
                <p className="text-black-olive font-medium text-sm leading-relaxed">
                  Looking for help with something?
                </p>
              </div>
              <div className="absolute -bottom-2 right-[40px] w-4 h-4 bg-white border-r border-b border-ash-gray/30 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.div
        className="fixed bottom-[90px] right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={handleOpen}
          className="h-20 w-20 rounded-full bg-gradient-to-br from-black-olive to-dim-gray hover:from-pigment-green hover:to-black-olive shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 flex items-center justify-center"
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
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-pigment-green rounded-full border-2 border-white"></div>
          </div>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-[178px] right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-220px)] rounded-xl shadow-2xl overflow-y-auto"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gradient-to-br from-black-olive via-dim-gray to-black-olive text-white">
              {/* Close */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white hover:bg-white/10 h-8 w-8 p-0 rounded-full z-10"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Header */}
              <div className="p-5 pb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center flex-shrink-0">
                    <img
                      src="/avatar-centered.jpg"
                      alt="Desmond"
                      className="w-14 h-14 object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">DezCam Consulting</h3>
                    <p className="text-white/70 text-xs">Typically replies in 1 business day</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 pb-5">
                {/* Opening message */}
                <div className="bg-white/10 rounded-lg px-4 py-3 mb-4">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Hey! Looking for help with something specific? Let me point you in the right direction.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {step === "menu" && (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      {MENU_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleSelect(opt.id)}
                          className="w-full text-left bg-white/95 hover:bg-white text-black-olive text-sm font-medium px-4 py-3 rounded-lg transition-all duration-150 hover:shadow-md border border-transparent hover:border-pigment-green/30"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === "response" && response && (
                    <motion.div
                      key="response"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="bg-white/95 text-black-olive rounded-lg px-4 py-3">
                        <p className="text-sm leading-relaxed">{response.message}</p>
                      </div>

                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          navigate(response.buttonHref);
                        }}
                        className="w-full bg-pigment-green hover:bg-light-green text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
                      >
                        {response.buttonLabel}
                      </Button>

                      <div className="text-center pt-1">
                        <button
                          onClick={handleReset}
                          className="text-white/50 hover:text-white/80 text-xs underline underline-offset-2 transition-colors duration-150"
                        >
                          Start over
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
