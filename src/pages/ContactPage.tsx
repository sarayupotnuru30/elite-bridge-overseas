// import { useState } from "react";
// import { Phone, Mail, MapPin, Clock, Send, ChevronDown, X, MessageCircle } from "lucide-react";
// import contactHero from "@/assets/contact-hero.jpg";
// import PageHero from "@/components/PageHero";
// import { ALL_COUNTRIES } from "@/lib/countries";
// import { toast } from "@/hooks/use-toast";

// const services = [
//   "Career Counseling & Profile Evaluation",
//   "University Selection & Admission Guidance",
//   "Application & Documentation Support",
//   "Scholarship & Financial Guidance",
//   "Visa Assistance & Documentation",
//   "Pre & Post Departure Assistance",
//   "Accommodation & Settlement Support",
//   "Assignment Support",
//   "Language Classes",
//   "Refer & Earn Program",
//   "IELTS",
//   "TOEFL",
//   "Duolingo",
//   "PTE",
//   "GRE",
// ];

// const roles = ["Working", "Student", "Graduated Recently", "Unemployed"];
// const visaTypes = ["Student", "Business", "Working"];
// const intakeOptions = ["Jan-Mar", "Apr-May", "Sep-Jan", "Others"];

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//     service: "",
//     countries: [] as string[],
//     intake: "", 
//     otherIntake: "", 
//     role: "",
//     visaType: "",
//   });

//   const [countryOpen, setCountryOpen] = useState(false);

//   const toggleCountry = (c: string) => {
//     setForm((f) => ({
//       ...f,
//       countries: f.countries.includes(c) ? f.countries.filter((x) => x !== c) : [...f.countries, c],
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (form.countries.length < 3) {
//       toast({ title: "Please select at least 3 preferred countries", variant: "destructive" });
//       return;
//     }

//     const finalIntake = form.intake === "Others" ? form.otherIntake : form.intake;
    
//     const rawMsg = `Hi, I need overseas education consultation.\n\n` +
//                 `*Service Needed:* ${form.service}\n` +
//                 `*Name:* ${form.name}\n` +
//                 `*Address:* ${form.address}\n` +
//                 `*Phone:* ${form.phone}\n` +
//                 `*Email:* ${form.email}\n` +
//                 `*Countries:* ${form.countries.join(", ")}\n` +
//                 `*Intake (2026-2027):* ${finalIntake}\n` +
//                 `*Role:* ${form.role}\n` +
//                 `*Visa:* ${form.visaType}`;

//     const encodedMsg = encodeURIComponent(rawMsg);
//     window.open(`https://wa.me/918522916736?text=${encodedMsg}`, "_blank");
//     toast({ title: "Redirecting to WhatsApp!", description: "Our team will respond shortly." });
//   };

//   const inputCls = "w-full px-4 py-2.5 rounded-lg border border-border/60 bg-white/70 text-foreground focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all font-sans text-sm placeholder:text-muted-foreground/60";
//   const selectCls = `${inputCls} appearance-none cursor-pointer`;

//   return (
//     <main className="bg-background">
//       <PageHero title="Contact Us" subtitle="Let's start your overseas education journey together" image={contactHero} />

//       {/* Top Section: Get In Touch */}
//       <section className="pt-16 pb-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Get In Touch</h2>
//             <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
//             <ContactBlock icon={Phone} title="Phone" text="+91 8522916736" href="tel:8522916736" />
//             <ContactBlock icon={MessageCircle} title="WhatsApp" text="Chat with our team" href="https://wa.me/918522916736" />
//             <ContactBlock icon={Mail} title="Email" text="saikrishna@elitebridgeoverseas.com" href="mailto:saikrishna@elitebridgeoverseas.com" />
//             <ContactBlock icon={MapPin} title="Office" text="D.No 9/6/2, 3rd Floor, Canara Bank Building, Beside Old LIC Office, Narasaraopet-522601" />
//             <ContactBlock icon={Clock} title="Business Hours" text="Mon–Fri: 10AM–8PM | Sat–Sun: 10AM–5PM" />
//           </div>
//         </div>
//       </section>

//       {/* Bottom Section: Consultation Form */}
//       <section className="pb-24 px-4">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/40">
//             <div className="flex flex-col items-center text-center mb-8">
//               <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-3 shadow-md">
//                 <Send className="text-navy" size={20} />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy">Consultation Form</h3>
//               <p className="text-sm text-muted-foreground mt-1">Quick submission via WhatsApp</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="relative">
//                 <select required className={selectCls} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
//                   <option value="">Interested Service</option>
//                   {services.map((s) => <option key={s} value={s}>{s}</option>)}
//                 </select>
//                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input required placeholder="Full Name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
//                 <input required placeholder="City/Address" className={inputCls} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input required type="tel" placeholder="Phone Number" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//                 <input required type="email" placeholder="Email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
//               </div>

//               <div className="relative">
//                 <button type="button" onClick={() => setCountryOpen(!countryOpen)} className={`${inputCls} text-left flex justify-between items-center bg-white/50`}>
//                   <span className={form.countries.length ? "text-foreground font-medium" : "text-muted-foreground/70"}>
//                     {form.countries.length ? `${form.countries.length} Selected` : "Select Countries (min 3)"}
//                   </span>
//                   <ChevronDown size={16} className="text-muted-foreground/60" />
//                 </button>
//                 {countryOpen && (
//                   <div className="absolute z-30 mt-1 w-full max-h-56 overflow-y-auto bg-white border border-border/40 rounded-xl shadow-2xl p-3 grid grid-cols-2 gap-1 animate-in fade-in zoom-in-95">
//                     {ALL_COUNTRIES.map((c) => (
//                       <label key={c} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gold/5 cursor-pointer text-xs transition-colors">
//                         <input type="checkbox" checked={form.countries.includes(c)} onChange={() => toggleCountry(c)} className="w-3.5 h-3.5 accent-gold" />
//                         {c}
//                       </label>
//                     ))}
//                   </div>
//                 )}
//                 {form.countries.length > 0 && (
//                   <div className="flex flex-wrap gap-1.5 mt-2">
//                     {form.countries.map((c) => (
//                       <span key={c} className="text-[10px] px-2.5 py-1 rounded-full bg-navy/5 text-navy font-semibold border border-navy/10 flex items-center gap-1">
//                         {c} <X size={10} className="cursor-pointer hover:text-red-500" onClick={() => toggleCountry(c)} />
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className={form.intake === "Others" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "w-full"}>
//                 <div className="relative">
//                   <select required className={selectCls} value={form.intake} onChange={(e) => setForm({ ...form, intake: e.target.value })}>
//                     <option value="">Intake (2026-2027)</option>
//                     {intakeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
//                   </select>
//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
//                 </div>
//                 {form.intake === "Others" && (
//                   <input required placeholder="Details" className={inputCls} value={form.otherIntake} onChange={(e) => setForm({ ...form, otherIntake: e.target.value })} />
//                 )}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <select required className={selectCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
//                     <option value="">Current Role</option>
//                     {roles.map((r) => <option key={r} value={r}>{r}</option>)}
//                   </select>
//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
//                 </div>
//                 <div className="relative">
//                   <select required className={selectCls} value={form.visaType} onChange={(e) => setForm({ ...form, visaType: e.target.value })}>
//                     <option value="">Visa Type</option>
//                     {visaTypes.map((v) => <option key={v} value={v}>{v}</option>)}
//                   </select>
//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
//                 </div>
//               </div>

//               <button type="submit" className="btn-gold w-full text-sm font-bold mt-2 py-3 rounded-xl shadow-md hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
//                 Get Consultation
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function ContactBlock({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
//   const content = (
//     <div className="bg-white/60 p-5 rounded-2xl shadow-sm border border-border/50 hover:border-gold/40 hover:shadow-md transition-all h-full flex flex-col items-center text-center group">
//       <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//         <Icon className="text-gold" size={20} />
//       </div>
//       <h4 className="font-serif font-bold text-navy text-md mb-1">{title}</h4>
//       <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
//     </div>
//   );
  
//   return href ? (
//     <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-transform active:scale-95">
//       {content}
//     </a>
//   ) : (
//     <div className="block">{content}</div>
//   );
// }





import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, X, MessageCircle } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import PageHero from "@/components/PageHero";
import { ALL_COUNTRIES } from "@/lib/countries";
import { toast } from "@/hooks/use-toast";

const services = [
  "Career Counseling & Profile Evaluation",
  "University Selection & Admission Guidance",
  "Application & Documentation Support",
  "Scholarship & Financial Guidance",
  "Visa Assistance & Documentation",
  "Pre & Post Departure Assistance",
  "Accommodation & Settlement Support",
  "Assignment Support",
  "Language Classes",
  "Refer & Earn Program",
  "IELTS",
  "TOEFL",
  "Duolingo",
  "PTE",
  "GRE",
];

const roles = ["Working", "Student", "Graduated Recently", "Unemployed"];
const visaTypes = ["Student", "Business", "Working"];
const intakeOptions = ["Jan-Mar", "Apr-May", "Sep-Jan", "Others"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    service: "",
    countries: [] as string[],
    intake: "", 
    otherIntake: "", 
    role: "",
    visaType: "",
  });

  const [countryOpen, setCountryOpen] = useState(false);

  const toggleCountry = (c: string) => {
    setForm((f) => ({
      ...f,
      countries: f.countries.includes(c) ? f.countries.filter((x) => x !== c) : [...f.countries, c],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.countries.length < 3) {
      toast({ title: "Please select at least 3 preferred countries", variant: "destructive" });
      return;
    }

    const finalIntake = form.intake === "Others" ? form.otherIntake : form.intake;
    
    const rawMsg = `Hi, I need overseas education consultation.\n\n` +
                `*Service Needed:* ${form.service}\n` +
                `*Name:* ${form.name}\n` +
                `*Address:* ${form.address}\n` +
                `*Phone:* ${form.phone}\n` +
                `*Email:* ${form.email}\n` +
                `*Countries:* ${form.countries.join(", ")}\n` +
                `*Intake (2026-2027):* ${finalIntake}\n` +
                `*Role:* ${form.role}\n` +
                `*Visa:* ${form.visaType}`;

    const encodedMsg = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/918522916736?text=${encodedMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Our team will respond shortly." });
  };

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-border/60 bg-white/70 text-foreground focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all font-sans text-sm placeholder:text-muted-foreground/60";
  const selectCls = `${inputCls} appearance-none cursor-pointer`;

  return (
    <main className="bg-background">
      <PageHero title="Contact Us" subtitle="Let's start your overseas education journey together" image={contactHero} />

      {/* Top Section: Get In Touch */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Get In Touch</h2>
            <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            <ContactBlock icon={Phone} title="Phone" text="+91 8522916736" href="tel:8522916736" />
            <ContactBlock icon={MessageCircle} title="WhatsApp" text="Chat with our team" href="https://wa.me/918522916736" />
            <ContactBlock icon={Mail} title="Email" text="saikrishna@elitebridgeoverseas.com" href="mailto:saikrishna@elitebridgeoverseas.com" />
            <ContactBlock 
              icon={MapPin} 
              title="Office" 
              text="D.No 9/6/2, 3rd Floor, Canara Bank Building, Beside Old LIC Office, Narasaraopet-522601" 
              href="https://www.google.com/maps/place/16%C2%B014'03.3%22N+80%C2%B002'39.8%22E/@16.23425,80.0443889,17z"
            />
            <ContactBlock icon={Clock} title="Business Hours" text="Mon–Fri: 10AM–8PM | Sat–Sun: 10AM–5PM" />
          </div>
        </div>
      </section>

      {/* Bottom Section: Consultation Form */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/40">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-3 shadow-md">
                <Send className="text-navy" size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy">Consultation Form</h3>
              <p className="text-sm text-muted-foreground mt-1">Quick submission via WhatsApp</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <select required className={selectCls} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Interested Service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required placeholder="City/Address" className={inputCls} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Phone Number" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input required type="email" placeholder="Email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>

              <div className="relative">
                <button type="button" onClick={() => setCountryOpen(!countryOpen)} className={`${inputCls} text-left flex justify-between items-center bg-white/50`}>
                  <span className={form.countries.length ? "text-foreground font-medium" : "text-muted-foreground/70"}>
                    {form.countries.length ? `${form.countries.length} Selected` : "Select Countries (min 3)"}
                  </span>
                  <ChevronDown size={16} className="text-muted-foreground/60" />
                </button>
                {countryOpen && (
                  <div className="absolute z-30 mt-1 w-full max-h-56 overflow-y-auto bg-white border border-border/40 rounded-xl shadow-2xl p-3 grid grid-cols-2 gap-1 animate-in fade-in zoom-in-95">
                    {ALL_COUNTRIES.map((c) => (
                      <label key={c} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gold/5 cursor-pointer text-xs transition-colors">
                        <input type="checkbox" checked={form.countries.includes(c)} onChange={() => toggleCountry(c)} className="w-3.5 h-3.5 accent-gold" />
                        {c}
                      </label>
                    ))}
                  </div>
                )}
                {form.countries.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {form.countries.map((c) => (
                      <span key={c} className="text-[10px] px-2.5 py-1 rounded-full bg-navy/5 text-navy font-semibold border border-navy/10 flex items-center gap-1">
                        {c} <X size={10} className="cursor-pointer hover:text-red-500" onClick={() => toggleCountry(c)} />
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={form.intake === "Others" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "w-full"}>
                <div className="relative">
                  <select required className={selectCls} value={form.intake} onChange={(e) => setForm({ ...form, intake: e.target.value })}>
                    <option value="">Intake (2026-2027)</option>
                    {intakeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
                </div>
                {form.intake === "Others" && (
                  <input required placeholder="Details" className={inputCls} value={form.otherIntake} onChange={(e) => setForm({ ...form, otherIntake: e.target.value })} />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select required className={selectCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                    <option value="">Current Role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
                </div>
                <div className="relative">
                  <select required className={selectCls} value={form.visaType} onChange={(e) => setForm({ ...form, visaType: e.target.value })}>
                    <option value="">Visa Type</option>
                    {visaTypes.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" size={16} />
                </div>
              </div>

              <button type="submit" className="btn-gold w-full text-sm font-bold mt-2 py-3 rounded-xl shadow-md hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                Get Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactBlock({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
  const content = (
    <div className="bg-white/60 p-5 rounded-2xl shadow-sm border border-border/50 hover:border-gold/40 hover:shadow-md transition-all h-full flex flex-col items-center text-center group">
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <Icon className="text-gold" size={20} />
      </div>
      <h4 className="font-serif font-bold text-navy text-md mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
  
  return href ? (
    <a href={href} target={href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto') ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-transform active:scale-95">
      {content}
    </a>
  ) : (
    <div className="block">{content}</div>
  );
}