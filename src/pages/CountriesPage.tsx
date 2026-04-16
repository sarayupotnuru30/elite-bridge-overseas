import { Link } from "react-router-dom";
import countriesHero from "@/assets/countries-hero.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ALL_COUNTRIES, COUNTRY_EMOJIS } from "@/lib/countries";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CountriesPage() {
  return (
    <main>
      <PageHero title="Study Destinations" subtitle="Explore 42 countries where your dreams can take flight" image={countriesHero} />

      <section className="section-padding bg-background">
        <SectionHeading title="Choose Your Destination" subtitle="Apply to study in any of our 42 partner countries" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {ALL_COUNTRIES.map((c, i) => (
            <CountryCard key={c} name={c} delay={i * 30} />
          ))}
        </div>
      </section>
    </main>
  );
}

function CountryCard({ name, delay }: { name: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 text-center hover-lift group transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-5xl block mb-3">{COUNTRY_EMOJIS[name]}</span>
      <h3 className="font-serif font-bold text-navy text-sm">{name}</h3>
      <Link
        to="/contact"
        className="mt-3 inline-block text-xs font-semibold px-4 py-1.5 rounded-full gold-gradient text-navy opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Apply Now
      </Link>
    </div>
  );
}
