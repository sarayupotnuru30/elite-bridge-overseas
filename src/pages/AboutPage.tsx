import { Star, Quote } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import counseling from "@/assets/counseling.jpg";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Priya M.", text: "Highly professional guidance and smooth process! Got my dream university in Australia." },
  { name: "Rahul K.", text: "Got my visa approved quickly thanks to their support! The team is incredible." },
  { name: "Ananya S.", text: "Best consultancy for overseas education! They truly care about your success." },
  { name: "Vikram T.", text: "The scholarship guidance saved me thousands. Elite Bridge is the real deal." },
  { name: "Sneha R.", text: "From application to departure, they handled everything perfectly." },
];

export default function AboutPage() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      <PageHero title="About Us" subtitle="Your trusted partner in overseas education" image={aboutHero} />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={aboutRef} className={`transition-all duration-700 ${aboutVis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Who We Are</h2>
            <div className="w-20 h-1 gold-gradient mt-4 rounded-full" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Elite Bridge Overseas is a premier overseas education consultancy specializing in career guidance and international admissions. We are proudly partnered with over 1000 universities across 42 countries, providing students with unparalleled access to global education opportunities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of expert counselors provides personalized guidance at every step — from profile evaluation and university selection to visa assistance and post-departure support. We believe every student deserves access to world-class education.
            </p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${aboutVis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <img src={counseling} alt="Counseling session" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-padding navy-gradient">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={1000} suffix="+" label="University Partners" />
          <AnimatedCounter end={42} label="Countries" />
          <AnimatedCounter end={5000} suffix="+" label="Students Placed" />
          <AnimatedCounter end={10} suffix="+" label="Years Experience" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <SectionHeading title="What Our Students Say" subtitle="Real stories from students who achieved their dreams with Elite Bridge" />
        <div className="max-w-3xl mx-auto relative">
          <div className="glass-card rounded-2xl p-10 text-center">
            <Quote className="text-gold mx-auto mb-4" size={40} />
            <p className="text-lg text-foreground italic leading-relaxed" key={tIdx}>
              "{testimonials[tIdx].text}"
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
            </div>
            <p className="mt-3 font-serif font-bold text-navy">{testimonials[tIdx].name}</p>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === tIdx ? "bg-gold w-6" : "bg-muted-foreground/30"}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
