import { BookOpen, GraduationCap, FileText, DollarSign, Plane, Home, PenTool, UserCheck, Languages, CreditCard, Building, Clock, Gift, Briefcase, Star, CheckCircle } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainServices = [
  { icon: UserCheck, title: "Career Counseling & Profile Evaluation", desc: "Comprehensive assessment of your academic profile, career goals, and the best study abroad options tailored to you." },
  { icon: GraduationCap, title: "University Selection & Admission Guidance", desc: "Expert recommendations from 1000+ partner universities across 42 countries based on your unique profile." },
  { icon: FileText, title: "Application & Documentation Support", desc: "End-to-end support with application essays, SOPs, LORs, and all required documentation." },
  { icon: DollarSign, title: "Scholarship & Financial Guidance", desc: "Maximize your funding opportunities with personalized scholarship search and application assistance." },
  { icon: Plane, title: "Visa Assistance & Documentation", desc: "Complete visa application support including documentation, mock interviews, and filing." },
  { icon: Building, title: "Pre & Post Departure Assistance", desc: "From travel bookings to airport pickup, accommodation, and settling into your new country." },
  { icon: Home, title: "Accommodation & Settlement Support", desc: "We help you find safe, affordable housing and adjust to life in your destination country." },
  { icon: PenTool, title: "Assignment Support", desc: "Academic writing guidance and assignment support to help you excel in your studies abroad." },
];

const additionalServices = [
  { icon: UserCheck, label: "Profile Evaluation" },
  { icon: Star, label: "Career Assessment" },
  { icon: FileText, label: "Pre-visa Assistance" },
  { icon: Languages, label: "Language Classes" },
  { icon: CreditCard, label: "Free Processing for UK" },
  { icon: Home, label: "Accommodation Support" },
  { icon: Clock, label: "Part-time Assistance" },
  { icon: Plane, label: "Free Flight Ticket" },
  { icon: PenTool, label: "Assignment Assistance" },
  { icon: Briefcase, label: "Post Departure Services" },
  { icon: Gift, label: "Refer & Earn Program" },
  { icon: BookOpen, label: "Study Material Support" },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Our Services" subtitle="Comprehensive support for your global education journey" image={servicesHero} />

      <section className="section-padding bg-background">
        <SectionHeading title="Main Services" subtitle="Everything you need for a successful study abroad experience" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((s, i) => (
            <MainServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </section>

      <section className="section-padding navy-gradient">
        <SectionHeading title="Additional Services" subtitle="Going the extra mile for our students" light />
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {additionalServices.map((s) => (
            <div key={s.label} className="glass-card-dark rounded-xl p-6 text-center hover-lift">
              <s.icon className="text-gold mx-auto mb-3" size={28} />
              <span className="text-sm text-cream font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function MainServiceCard({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-8 flex gap-6 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shrink-0">
        <Icon className="text-navy" size={24} />
      </div>
      <div>
        <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
