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
  const [location] = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-black-olive hover:text-pigment-green transition-colors">
            Desmond Campbell
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors font-medium ${
                  location === href
                    ? "text-pigment-green"
                    : "text-dim-gray hover:text-pigment-green"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-pigment-green hover:bg-black-olive text-white font-semibold px-5">
                Book a Call
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-dim-gray hover:text-pigment-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  location === href
                    ? "text-pigment-green"
                    : "text-dim-gray hover:text-pigment-green"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-pigment-green hover:bg-black-olive text-white font-semibold">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
