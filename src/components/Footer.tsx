import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="navy-gradient text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Elite Bridge Overseas" className="h-16 w-auto mb-4" />
            <p className="text-sm text-cream/70 leading-relaxed">
              Premier overseas education consultancy partnered with 1000+ universities across 42 countries.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/countries", label: "Countries" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} onClick={scrollToTop} className="text-sm text-cream/70 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {["Career Counseling", "University Selection", "Visa Assistance", "Scholarship Guidance", "Accommodation Support"].map((s) => (
                <span key={s} className="text-sm text-cream/70">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:8522916736" className="flex items-center gap-3 text-sm text-cream/70 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> 8522916736
              </a>
              <a href="mailto:saikrishna@elitebridgeoverseas.com" className="flex items-center gap-3 text-sm text-cream/70 hover:text-gold transition-colors break-all">
                <Mail size={16} className="text-gold shrink-0" /> saikrishna@elitebridgeoverseas.com
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                3rd Floor GLR Complex, Canara Bank Upstairs, Arundalpet, Narasaraopet - 522601
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50">© {new Date().getFullYear()} Elite Bridge Overseas. All rights reserved.</p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
