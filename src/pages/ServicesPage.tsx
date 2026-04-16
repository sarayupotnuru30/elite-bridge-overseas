import servicesHero from "@/assets/services-hero.jpg";
import svcCareer from "@/assets/svc-career-counseling.jpg";
import svcUniversity from "@/assets/svc-university.jpg";
import svcApplication from "@/assets/svc-application.jpg";
import svcScholarship from "@/assets/svc-scholarship.jpg";
import svcVisa from "@/assets/svc-visa.jpg";
import svcDeparture from "@/assets/svc-departure.jpg";
import svcAccommodation from "@/assets/svc-accommodation.jpg";
import svcAssignment from "@/assets/svc-assignment.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainServices = [
  { img: svcCareer, title: "Career Counseling & Profile Evaluation", desc: "Comprehensive assessment of your academic profile, career goals, and the best study abroad options tailored to you." },
  { img: svcUniversity, title: "University Selection & Admission Guidance", desc: "Expert recommendations from 1000+ partner universities across 42 countries based on your unique profile." },
  { img: svcApplication, title: "Application & Documentation Support", desc: "End-to-end support with application essays, SOPs, LORs, and all required documentation." },
  { img: svcScholarship, title: "Scholarship & Financial Guidance", desc: "Maximize your funding opportunities with personalized scholarship search and application assistance." },
  { img: svcVisa, title: "Visa Assistance & Documentation", desc: "Complete visa application support including documentation, mock interviews, and filing." },
  { img: svcDeparture, title: "Pre & Post Departure Assistance", desc: "From travel bookings to airport pickup, accommodation, and settling into your new country." },
  { img: svcAccommodation, title: "Accommodation & Settlement Support", desc: "We help you find safe, affordable housing and adjust to life in your destination country." },
  { img: svcAssignment, title: "Assignment Support", desc: "Academic writing guidance and assignment support to help you excel in your studies abroad." },
];

const additionalServices = [
  "Profile Evaluation", "Career Assessment", "Pre-visa Assistance", "Language Classes",
  "Free Processing for UK", "Accommodation Support", "Part-time Assistance", "Free Flight Ticket",
  "Assignment Assistance", "Post Departure Services", "Refer & Earn Program", "Study Material Support",
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
            <div key={s} className="glass-card-dark rounded-xl p-6 text-center hover-lift">
              <span className="text-sm text-cream font-medium">{s}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function MainServiceCard({ img, title, desc, delay }: { img: string; title: string; desc: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-700 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
