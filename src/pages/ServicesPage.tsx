import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainServices = [
  { 
    title: "Career Counseling & Profile Evaluation", 
    desc: "Comprehensive assessment of your academic profile, career goals, and the best study abroad options tailored to you.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "University Selection & Admission Guidance", 
    desc: "Expert recommendations from 1000+ partner universities across 42 countries based on your unique profile.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Application & Documentation Support", 
    desc: "End-to-end support with application essays, SOPs, LORs, and all required documentation.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Scholarship & Financial Guidance", 
    desc: "Maximize your funding opportunities with personalized scholarship search and application assistance.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Visa Assistance & Documentation", 
    desc: "Complete visa application support including documentation, mock interviews, and filing.",
    img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Pre & Post Departure Assistance", 
    desc: "From travel bookings to airport pickup, accommodation, and settling into your new country.",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Accommodation & Settlement Support", 
    desc: "We help you find safe, affordable housing and adjust to life in your destination country.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&h=200&auto=format&fit=crop" 
  },
  { 
    title: "Assignment Support", 
    desc: "Academic writing guidance and assignment support to help you excel in your studies abroad.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=200&h=200&auto=format&fit=crop" 
  },
];

const testServices = [
  { name: "IELTS", img: "https://blog.sedacollegeonline.com/wp-content/uploads/2018/12/ielts.jpg" },
  { name: "TOEFL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgbljZftK67dOSit1b7Eam4HqXeMZWNGPDA&s" },
  { name: "Duolingo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4pW2NP5HrzSCoC853FtbPK0RK06TPUKmfg&s" },
  { name: "PTE", img: "https://api.fillit.co.in/uploads/form/1738163923685.png" },
  { name: "GRE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MO6lrj-BXIrEQsaGs7mGofoSpnUKZJcuFg&s" },
];

const additionalServices = [
  { name: "Profile Evaluation", img: "https://amratpal.com/uk/wp-content/uploads/2020/12/profile-evaluation1.png" },
  { name: "Career Assessment", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJwGHkOQ9gXlujL2je45csxW29hN069rswA&s" },
  { name: "Pre-visa Assistance", img: "https://www.avrconsultants.org/assets/images/visa-assistance.jpg" },
  { name: "Language Classes", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Free Processing for UK", img: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Accommodation Support", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Part-time Assistance", img: "https://vavremoteworkers.com/assets/blog/images/singapore/hire-a-virtual-assistant-part-time.jpg" },
  { name: "Free Flight Ticket", img: "https://goodmockups.com/wp-content/uploads/2024/04/Free-Boarding-Pass-Air-Ticket-Mockup-PSD-2.jpg" },
  { name: "Assignment Assistance", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Post Departure Services", img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Refer & Earn Program", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=150&h=150" },
  { name: "Study Material Support", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=150&h=150" },
];

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive support for your global education journey" 
        image={servicesHero} 
      />

      {/* Main Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Main Services" 
            subtitle="Expert guidance tailored to your academic and professional success" 
          />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {mainServices.map((s, i) => (
              <MainServiceCard key={s.title} {...s} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW: English Proficiency Test Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="English Proficiency Test Services" 
            subtitle="Master the tests required for your international university admissions" 
            light={false}
          />
          
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {testServices.map((test, index) => (
              <div 
                key={test.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-muted/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={test.img} 
                    alt={test.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-2 drop-shadow-md">
                    {test.name}
                  </h4>
                  <Link 
                    to="/contact" 
                    className="bg-gold text-navy text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    Enquire <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
              We provide comprehensive training, mock tests, and registration assistance for all major English proficiency and entrance exams.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Book a Free Trial Class <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-white border-t border-muted/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Going the extra mile for our students" 
            light={false} 
          />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
            {additionalServices.map((s) => (
              <div 
                key={s.name} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-muted/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={s.img} 
                    alt={s.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <Link 
                    to="/contact"
                    className="absolute bottom-4 right-4 bg-gold text-navy p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
                
                <div className="p-6 text-center border-t border-muted/10 bg-white flex flex-col items-center">
                  <h4 className="text-navy font-bold text-base md:text-lg group-hover:text-gold transition-colors duration-300">
                    {s.name}
                  </h4>
                  <Link 
                    to="/contact" 
                    className="mt-3 text-xs font-bold uppercase tracking-widest text-gold hover:text-navy transition-colors flex items-center gap-1"
                  >
                    Apply Now <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function MainServiceCard({ title, desc, img, delay }: { title: string; desc: string; img: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group rounded-2xl p-6 md:p-8 transition-all duration-700 bg-white border border-muted/20 hover:border-gold/30 shadow-sm hover:shadow-xl hover-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-colors duration-300">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="font-serif text-lg md:text-xl font-bold text-navy leading-tight group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">
            {desc}
          </p>
          
          <Link 
            to="/contact" 
            className="mt-6 inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors group/link"
          >
            Apply Now 
            <span className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center group-hover/link:bg-gold transition-colors">
              <ArrowRight size={14} className="group-hover/link:text-navy" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}