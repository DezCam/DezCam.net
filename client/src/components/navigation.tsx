import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-near-black/98 backdrop-blur-sm shadow-lg shadow-black/20"
        : "bg-near-black"
    }`}>
      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-champagne-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-ivory hover:text-champagne-gold transition-colors tracking-tight">
            DezCam<span className="text-champagne-gold">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  location === href
                    ? "text-champagne-gold"
                    : "text-soft-gray hover:text-ivory"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold px-5 text-sm border border-forest-green/0 hover:border-champagne-gold/30 transition-all"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-transparent group"
              style={{ backgroundColor: "rgba(61,66,64,0.08)" }}
            >
              {isOpen
                ? <X className="h-6 w-6 transition-colors duration-200 group-hover:text-[#8DD783]" style={{ color: "#399A4B" }} />
                : <Menu className="h-6 w-6 transition-colors duration-200 group-hover:text-[#8DD783]" style={{ color: "#399A4B" }} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-graphite border-t border-soft-gray/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location === href
                    ? "text-champagne-gold bg-near-black/50"
                    : "text-soft-gray hover:text-ivory hover:bg-near-black/30"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-forest-green hover:bg-forest-green/80 text-ivory font-semibold text-sm">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
