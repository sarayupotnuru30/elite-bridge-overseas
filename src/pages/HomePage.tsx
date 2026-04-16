import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, Award, Users, Compass, Star, Shield, BookOpen, Briefcase, Plane } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import counseling from "@/assets/counseling.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ALL_COUNTRIES, COUNTRY_EMOJIS } from "@/lib/countries";

const heroSlides = [
  { img: hero1, headline: "Redefining Overseas Education Consultancy", sub: "Beyond your regular consultancy" },
  { img: hero2, headline: "Your Gateway to Global Education", sub: "1000+ university partnerships across 42 countries" },
  { img: hero3, headline: "Dream Big, Study Abroad", sub: "Talk to our expert counselors today" },
];

const features = [
  { icon: Compass, label: "Smart Guidance" },
  { icon: Star, label: "Elite Service" },
  { icon: Award, label: "Proven Results" },
];

const services = [
  { icon: BookOpen, title: "Career Counseling", desc: "Expert profile evaluation and personalized career guidance" },
  { icon: GraduationCap, title: "University Selection", desc: "Handpicked universities matching your profile and aspirations" },
  { icon: Shield, title: "Visa Assistance", desc: "Complete visa documentation and interview preparation" },
  { icon: Briefcase, title: "Scholarship Guidance", desc: "Maximize your chances with scholarship and financial aid support" },
  { icon: Plane, title: "Pre & Post Departure", desc: "Accommodation, settlement, and ongoing support abroad" },
  { icon: Users, title: "Application Support", desc: "End-to-end application and documentation assistance" },
];

const visaTypes = [
  { title: "Student Visa", desc: "Comprehensive support for student visa applications across all 42 countries", icon: GraduationCap },
  { title: "Work Visa", desc: "Professional work visa guidance for career opportunities abroad", icon: Briefcase },
  { title: "Business Visa", desc: "Business visa services for Spain & Germany", icon: Globe },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.headline} className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-navy/70" />
          </div>
        ))}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div key={slide} className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream max-w-4xl leading-tight">
              {heroSlides[slide].headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
              {heroSlides[slide].sub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-base">Talk to Our Experts</Link>
              <Link to="/services" className="btn-outline-gold text-base">Explore Services</Link>
            </div>
          </div>
          <div className="absolute bottom-8 flex gap-3">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === slide ? "bg-gold w-8" : "bg-cream/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-navy py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 px-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <f.icon className="text-gold" size={28} />
              <span className="text-cream font-serif text-lg">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <SectionHeading title="Our Services" subtitle="Comprehensive support for every step of your overseas education journey" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="section-padding navy-gradient">
        <SectionHeading title="42 Countries, Infinite Possibilities" subtitle="We help students reach their dream destinations worldwide" light />
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ALL_COUNTRIES.map((c) => (
            <Link to="/countries" key={c} className="glass-card-dark rounded-xl p-4 text-center hover-lift cursor-pointer group">
              <span className="text-3xl block mb-2">{COUNTRY_EMOJIS[c]}</span>
              <span className="text-sm text-cream/80 group-hover:text-gold transition-colors">{c}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-background">
        <SectionHeading title="Visa Services" subtitle="Expert guidance for all visa categories" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {visaTypes.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-navy" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="section-padding navy-gradient">
        <SectionHeading title="Why Choose Elite Bridge" subtitle="Numbers that speak for our excellence" light />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={1000} suffix="+" label="University Partnerships" />
          <AnimatedCounter end={42} label="Countries Coverage" />
          <AnimatedCounter end={5000} suffix="+" label="Students Placed" />
          <AnimatedCounter end={98} suffix="%" label="Success Rate" />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <img src={counseling} alt="Counseling" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream">Ready to Begin Your Journey?</h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto">Talk to our expert counselors and take the first step towards your dream education abroad.</p>
          <Link to="/contact" className="btn-gold inline-block mt-8 text-lg">Get Free Consultation</Link>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-8 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5">
        <Icon className="text-navy" size={24} />
      </div>
      <h3 className="font-serif text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
