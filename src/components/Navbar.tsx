import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-lg shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Elite Bridge Overseas" className="h-12 w-auto" />
          <span className="text-gold-gradient font-serif text-xl font-bold hidden sm:block">Elite Bridge</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium tracking-wide transition-colors duration-300 ${location.pathname === l.to ? "text-gold" : "text-cream hover:text-gold"}`}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/918522916736?text=Hi%2C%20I%20need%20overseas%20education%20consultation." target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
            Get Consultation
          </a>
        </div>

        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur-xl border-t border-gold/10 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={`text-lg font-medium py-2 ${location.pathname === l.to ? "text-gold" : "text-cream"}`}>
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/918522916736?text=Hi%2C%20I%20need%20overseas%20education%20consultation." target="_blank" rel="noopener noreferrer" className="btn-gold text-center mt-2">
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
