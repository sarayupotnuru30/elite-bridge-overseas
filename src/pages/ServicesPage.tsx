// import servicesHero from "@/assets/services-hero.jpg";
// import svcCareer from "@/assets/svc-career-counseling.jpg";
// import svcUniversity from "@/assets/svc-university.jpg";
// import svcApplication from "@/assets/svc-application.jpg";
// import svcScholarship from "@/assets/svc-scholarship.jpg";
// import svcVisa from "@/assets/svc-visa.jpg";
// import svcDeparture from "@/assets/svc-departure.jpg";
// import svcAccommodation from "@/assets/svc-accommodation.jpg";
// import svcAssignment from "@/assets/svc-assignment.jpg";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// const mainServices = [
//   { img: svcCareer, title: "Career Counseling & Profile Evaluation", desc: "Comprehensive assessment of your academic profile, career goals, and the best study abroad options tailored to you." },
//   { img: svcUniversity, title: "University Selection & Admission Guidance", desc: "Expert recommendations from 1000+ partner universities across 42 countries based on your unique profile." },
//   { img: svcApplication, title: "Application & Documentation Support", desc: "End-to-end support with application essays, SOPs, LORs, and all required documentation." },
//   { img: svcScholarship, title: "Scholarship & Financial Guidance", desc: "Maximize your funding opportunities with personalized scholarship search and application assistance." },
//   { img: svcVisa, title: "Visa Assistance & Documentation", desc: "Complete visa application support including documentation, mock interviews, and filing." },
//   { img: svcDeparture, title: "Pre & Post Departure Assistance", desc: "From travel bookings to airport pickup, accommodation, and settling into your new country." },
//   { img: svcAccommodation, title: "Accommodation & Settlement Support", desc: "We help you find safe, affordable housing and adjust to life in your destination country." },
//   { img: svcAssignment, title: "Assignment Support", desc: "Academic writing guidance and assignment support to help you excel in your studies abroad." },
// ];

// const additionalServices = [
//   "Profile Evaluation", "Career Assessment", "Pre-visa Assistance", "Language Classes",
//   "Free Processing for UK", "Accommodation Support", "Part-time Assistance", "Free Flight Ticket",
//   "Assignment Assistance", "Post Departure Services", "Refer & Earn Program", "Study Material Support",
// ];

// export default function ServicesPage() {
//   return (
//     <main>
//       <PageHero title="Our Services" subtitle="Comprehensive support for your global education journey" image={servicesHero} />

//       <section className="section-padding bg-background">
//         <SectionHeading title="Main Services" subtitle="Everything you need for a successful study abroad experience" />
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {mainServices.map((s, i) => (
//             <MainServiceCard key={s.title} {...s} delay={i * 80} />
//           ))}
//         </div>
//       </section>

//       <section className="section-padding navy-gradient">
//         <SectionHeading title="Additional Services" subtitle="Going the extra mile for our students" light />
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {additionalServices.map((s) => (
//             <div key={s} className="glass-card-dark rounded-xl p-6 text-center hover-lift">
//               <span className="text-sm text-cream font-medium">{s}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// function MainServiceCard({ img, title, desc, delay }: { img: string; title: string; desc: string; delay: number }) {
//   const { ref, isVisible } = useScrollAnimation();
//   return (
//     <div
//       ref={ref}
//       className={`glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-700 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className="aspect-[3/2] overflow-hidden">
//         <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={960} height={640} />
//       </div>
//       <div className="p-6">
//         <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
//         <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
//       </div>
//     </div>
//   );
// }






// import servicesHero from "@/assets/services-hero.jpg";
// import PageHero from "@/components/PageHero";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// const mainServices = [
//   { title: "Career Counseling & Profile Evaluation", desc: "Comprehensive assessment of your academic profile, career goals, and the best study abroad options tailored to you." },
//   { title: "University Selection & Admission Guidance", desc: "Expert recommendations from 1000+ partner universities across 42 countries based on your unique profile." },
//   { title: "Application & Documentation Support", desc: "End-to-end support with application essays, SOPs, LORs, and all required documentation." },
//   { title: "Scholarship & Financial Guidance", desc: "Maximize your funding opportunities with personalized scholarship search and application assistance." },
//   { title: "Visa Assistance & Documentation", desc: "Complete visa application support including documentation, mock interviews, and filing." },
//   { title: "Pre & Post Departure Assistance", desc: "From travel bookings to airport pickup, accommodation, and settling into your new country." },
//   { title: "Accommodation & Settlement Support", desc: "We help you find safe, affordable housing and adjust to life in your destination country." },
//   { title: "Assignment Support", desc: "Academic writing guidance and assignment support to help you excel in your studies abroad." },
// ];

// const additionalServices = [
//   "Profile Evaluation", "Career Assessment", "Pre-visa Assistance", "Language Classes",
//   "Free Processing for UK", "Accommodation Support", "Part-time Assistance", "Free Flight Ticket",
//   "Assignment Assistance", "Post Departure Services", "Refer & Earn Program", "Study Material Support",
// ];

// export default function ServicesPage() {
//   return (
//     <main className="bg-background">
//       {/* Hero Section */}
//       <PageHero 
//         title="Our Services" 
//         subtitle="Comprehensive support for your global education journey" 
//         image={servicesHero} 
//       />

//       {/* Main Services Section - Clean Text Focus */}
//       <section className="section-padding">
//         <div className="container mx-auto px-4">
//           <SectionHeading 
//             title="Main Services" 
//             subtitle="Expert guidance tailored to your academic and professional success" 
//           />
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
//             {mainServices.map((s, i) => (
//               <MainServiceCard key={s.title} {...s} delay={i * 50} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Services Strip */}
//       <section className="section-padding navy-gradient">
//         <div className="container mx-auto px-4">
//           <SectionHeading 
//             title="Additional Services" 
//             subtitle="Going the extra mile for our students" 
//             light 
//           />
//           <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
//             {additionalServices.map((s) => (
//               <div 
//                 key={s} 
//                 className="glass-card-dark rounded-xl p-6 text-center hover-lift border border-white/5 flex items-center justify-center min-h-[100px]"
//               >
//                 <span className="text-sm text-cream font-medium tracking-wide">{s}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function MainServiceCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <div
//       ref={ref}
//       className={`glass-card group rounded-2xl p-8 transition-all duration-700 border-l-4 border-l-transparent hover:border-l-gold hover-lift bg-white shadow-sm hover:shadow-xl ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className="flex flex-col h-full">
//         <h3 className="font-serif text-xl font-bold text-navy leading-tight group-hover:text-gold transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// }








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

const additionalServices = [
  "Profile Evaluation", "Career Assessment", "Pre-visa Assistance", "Language Classes",
  "Free Processing for UK", "Accommodation Support", "Part-time Assistance", "Free Flight Ticket",
  "Assignment Assistance", "Post Departure Services", "Refer & Earn Program", "Study Material Support",
];

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive support for your global education journey" 
        image={servicesHero} 
      />

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

      <section className="section-padding navy-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Going the extra mile for our students" 
            light 
          />
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {additionalServices.map((s) => (
              <div 
                key={s} 
                className="glass-card-dark rounded-xl p-6 text-center hover-lift border border-white/5 flex items-center justify-center min-h-[100px]"
              >
                <span className="text-sm text-cream font-medium tracking-wide">{s}</span>
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
      className={`glass-card group rounded-2xl p-6 md:p-8 transition-all duration-700 bg-white border border-muted/20 hover:border-gold/30 shadow-sm hover:shadow-xl hover-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Profile-sized Image Container */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-colors duration-300">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h3 className="font-serif text-lg md:text-xl font-bold text-navy leading-tight group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}