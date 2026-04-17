import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Globe, Award, Compass, Star, Quote, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import counseling from "@/assets/counseling.jpg";
import visaStudent from "@/assets/visa-student.jpg";
import visaWork from "@/assets/visa-work.jpg";
import visaBusiness from "@/assets/visa-business.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ALL_COUNTRIES } from "@/lib/countries";

// Test Services Data
const testServices = [
  { name: "IELTS", img: "https://blog.sedacollegeonline.com/wp-content/uploads/2018/12/ielts.jpg" },
  { name: "TOEFL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgbljZftK67dOSit1b7Eam4HqXeMZWNGPDA&s" },
  { name: "Duolingo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4pW2NP5HrzSCoC853FtbPK0RK06TPUKmfg&s" },
  { name: "PTE", img: "https://api.fillit.co.in/uploads/form/1738163923685.png" },
  { name: "GRE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MO6lrj-BXIrEQsaGs7mGofoSpnUKZJcuFg&s" },
];

const getCountryImageUrl = (country) => {
  const imageMap = {
    "USA": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
    "UK": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80",
    "Australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80",
    "New Zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    "Ireland": "https://files.holidaycottages.co.uk/blogs%2F1730221911496-Driver_Ireland2+%281%29.jpg",
    "Germany": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    "France": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    "Singapore": "https://thumbs.dreamstime.com/b/singapore-national-day-helicopter-hanging-flag-flying-over-city-100128629.jpg",
    "UAE": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    "South Korea": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
    "Spain": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
    "Italy": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9_XXeIVgh2WNZrumv5a8lopze1mNcnbBdg&s",
    "Switzerland":"https://www.emperortraveline.com/wp-content/uploads/2022/03/Matterhorn.jpg",
    "Croatia":"https://www.holidify.com/images/bgImages/ROVINJ.jpg",
    "Denmark":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNz4UnjXJ1caGZ3MDbrudnyGswZV9VIxM_Jg&s",
    "Hungary":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPrjxqs7LL3C2y15yoJgEMurXIDG4cwHkAQ&s",
    "Lithuania":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxk9dcgXUwXxQdhnFeMeHrD5ejF7p4te1xTg&s",
    "Poland":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPKBNTqns_fLE9Wbh3b4DNflaSbj8shJdLg&s",
    "Belgium":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/44/17/belgium.jpg?w=1200&h=700&s=1",
    "Russia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWc8apjJUBZ77UsL2ozYhonETOTpHfDTWfA&s",
    "Monaco":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsGUru92fOpMwJRyfJSEEo1v1J0OZGpB6SA&s",
    "Georgia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mRYUB27v36UwEOA8rORJsweqL4wm8cD7lw&s",
    "Finland":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9UfDdOZRmK_8L9-wj_dIF4vXJslTKwCK_w&s",
    "Greece":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfc2tLrHm-6X4A72CDXg1SarCbkT6BI9sF7A&s",
    "Sweden":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFeGtSZohYhubThr_-ZugexqkmrrhuhIFVQ&s",
    "Latvia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwV5CH7azFbFZ3BmWcUutEk11qDYDB6N9AQ&s",
    "Malta":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIhXLJ_f4IWaE8cXilB35log35I_K9QErvQ&s",
    "Cyprus":"https://handluggageonly.co.uk/wp-content/uploads/2019/04/Hand-Luggage-Only-27.jpg",
    "Mauritius":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UTrY5MtYRWOUVG2ySAfD5CO_aIZVN56VXw&s",
    "Saudi Arabia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkBysA3CnFM_n_aQtVYZ7pgzah9UAVptUMA&s",
    "Thailand":"https://www.holidify.com/images/bgImages/PHI-PHI-ISLANDS.jpg",
    "Malaysia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKL8jhQo67zdLuAo__EuprFnGKCxqf7tR_rA&s",
    "China":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2zpBMQUx_BZme2_eHJ4lSF-UNyy6dBjEvw&s",
    "Vietnam":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv95rUEmmwmOvZj_5qX8s__NSP5UWKmTnB9Q&s",
    "Indonesia":"https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620074613/Best-Places-To-Visit-Indonesia-Bali/Best-Places-To-Visit-Indonesia-Bali.jpg",
    "Sri Lanka":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NW1-l3R8ysygxu-pW1htZI-d_ViMPGFHmA&s",
    "Kazakhstan":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsBgCi1fxuoCsmEa7uYDRggYqyUGUHsEPXA&s",
    "Luxembourg":"https://static.toiimg.com/thumb/48853565.cms?resizemode=75&width=1200&height=900",
    "Netherlands":"https://www.netherlands-tourism.com/wp-content/uploads/2013/11/Amsterdam.jpg",
    "Austria":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeIuT6ajqdGVCGuQzunF3-tM8OjyGJSDuDA&s",
  };
  return imageMap[country] || "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80";
};

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [nextSlide]);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.img} alt={s.headline} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
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

      {/* Services Section */}
      <section className="section-padding bg-background">
        <SectionHeading title="Our Services" subtitle="Comprehensive support for every step of your overseas education journey" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* NEW: English Proficiency Test Services Section (Moved from Services Page) */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="English Proficiency Test Services" 
            subtitle="Master the tests required for your international university admissions" 
            light={false}
          />
          
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {testServices.map((test) => (
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

      {/* Countries Section */}
      <section className="section-padding bg-white">
        <SectionHeading 
          title="42 Countries, Infinite Possibilities" 
          subtitle="We help students reach their dream destinations worldwide" 
        />
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
          {ALL_COUNTRIES.map((c) => (
            <Link 
              to="/contact" 
              key={c} 
              className="group relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200"
            >
              <img 
                src={getCountryImageUrl(c)} 
                alt={c} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-[10px] md:text-xs font-bold text-white tracking-[0.2em] uppercase group-hover:text-gold transition-colors drop-shadow-lg px-2 block">
                  {c}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-background">
        <SectionHeading title="Visa Services" subtitle="Expert guidance for all visa categories" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {visaTypes.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl overflow-hidden hover-lift group">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding navy-gradient">
        <SectionHeading title="Why Choose Elite Bridge" subtitle="Numbers that speak for our excellence" light />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={1000} suffix="+" label="University Partnerships" />
          <AnimatedCounter end={42} label="Countries Coverage" />
          <AnimatedCounter end={5000} suffix="+" label="Students Placed" />
          <AnimatedCounter end={98} suffix="%" label="Success Rate" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <SectionHeading title="What Our Students Say" subtitle="Real stories from students who achieved their dreams" />
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
            <Quote className="text-gold/20 absolute top-4 left-4" size={80} />
            <div className="relative z-10 text-center">
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed" key={tIdx}>
                "{testimonials[tIdx].text}"
              </p>
              <div className="flex flex-col items-center mt-6">
                <img src={testimonials[tIdx].img} alt={testimonials[tIdx].name} className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-3" />
                <p className="font-serif font-bold text-navy">{testimonials[tIdx].name}</p>
                <p className="text-sm text-muted-foreground">Studying in {testimonials[tIdx].country}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === tIdx ? "bg-gold w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={counseling} alt="Counseling" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream">Ready to Begin Your Journey?</h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto">Talk to our expert counselors and take the first step towards your dream education abroad.</p>
          <Link to="/contact" className="btn-gold inline-block mt-8 text-lg">Get Free Consultation</Link>
        </div>
      </section>
    </main>
  );
}

// Reusable ServiceCard
function ServiceCard({ image, title, desc, delay }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-xl font-bold text-navy">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

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
  { image: "https://docvita.com/wp-content/uploads/2022/06/career-counseling-1080x675.webp", title: "Career Counseling", desc: "Expert profile evaluation and personalized career guidance" },
  { image: "https://neomededu.com/assets/img/Universityselection.jpg", title: "University Selection", desc: "Handpicked universities matching your profile and aspirations" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2LPX_rPUgYVBs-sYd-iqLKUiL5ClWJ5c1g&s", title: "Visa Assistance", desc: "Complete visa documentation and interview preparation" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8ImnBzIpfYyTJH6J1G8YcYfWixNvgB1PqA&s", title: "Scholarship Guidance", desc: "Maximize your chances with scholarship and financial aid support" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIIDNgMsA9iPZ-i52bqBlklNt49VwlVXxjQ&s", title: "Pre & Post Departure", desc: "Accommodation, settlement, and ongoing support abroad" },
  { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", title: "Application Support", desc: "End-to-end application and documentation assistance" },
];

const visaTypes = [
  { title: "Student Visa", desc: "Comprehensive support for student visa applications across all 42 countries", img: visaStudent },
  { title: "Work Visa", desc: "Professional work visa guidance for career opportunities abroad", img: visaWork },
  { title: "Business Visa", desc: "Business visa services for Spain & Germany", img: visaBusiness },
];

const testimonials = [
  { name: "Priya M.", text: "Highly professional guidance and smooth process! Got my dream university in Australia.", country: "Australia", img: testimonial1 },
  { name: "Rahul K.", text: "Got my visa approved quickly thanks to their support! The team is incredible.", country: "UK", img: testimonial2 },
  { name: "Ananya S.", text: "Best consultancy for overseas education! They truly care about your success.", country: "Canada", img: testimonial3 },
  { name: "Vikram T.", text: "The scholarship guidance saved me thousands. Elite Bridge is the real deal.", country: "Germany", img: testimonial4 },
  { name: "Sneha R.", text: "From application to departure, they handled everything perfectly.", country: "USA", img: testimonial5 },
];