import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import PageHero from "@/components/PageHero";
import { ALL_COUNTRIES } from "@/lib/countries";
import { toast } from "@/hooks/use-toast";

const roles = ["Working", "Student", "Graduated Recently", "Unemployed"];
const visaTypes = ["Student", "Business", "Working"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", address: "", phone: "", email: "",
    countries: [] as string[],
    intakeStart: "", intakeEnd: "",
    role: "", visaType: "",
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
    const msg = `Hi, I need overseas education consultation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ACountries: ${form.countries.join(", ")}%0AIntake: ${form.intakeStart} to ${form.intakeEnd}%0ARole: ${form.role}%0AVisa: ${form.visaType}`;
    window.open(`https://wa.me/918522916736?text=${msg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Our team will respond shortly." });
  };

  const inputCls = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-sans text-sm";
  const selectCls = `${inputCls} appearance-none`;

  return (
    <main>
      <PageHero title="Contact Us" subtitle="Let's start your overseas education journey together" image={contactHero} />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy">Get In Touch</h2>
              <div className="w-20 h-1 gold-gradient mt-4 rounded-full" />
            </div>

            <div className="space-y-6">
              <InfoItem icon={Phone} title="Phone" text="8522916736" href="tel:8522916736" />
              <InfoItem icon={Mail} title="Email" text="saikrishna@elitebridgeoverseas.com" href="mailto:saikrishna@elitebridgeoverseas.com" />
              <InfoItem icon={MapPin} title="Main Office" text="3rd Floor GLR Complex, Canara Bank Upstairs, Arundalpet, Narasaraopet - 522601" />
              <InfoItem icon={MapPin} title="Branch Office" text="D.No 9/6/2, 2nd Floor Canara Bank Building, Beside Old LIC Office, Arundalpet" />
              <InfoItem icon={Clock} title="Business Hours" text="Mon–Fri: 10 AM – 8 PM | Sat–Sun: 10 AM – 5 PM" />
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <Send className="text-navy" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-navy">Get Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">Fill in your details and we'll connect via WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Full Name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required placeholder="Address" className={inputCls} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="tel" placeholder="Phone Number" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <input required type="email" placeholder="Email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                {/* Countries Multi-select */}
                <div className="relative">
                  <button type="button" onClick={() => setCountryOpen(!countryOpen)} className={`${inputCls} text-left flex justify-between items-center`}>
                    <span className={form.countries.length ? "text-foreground" : "text-muted-foreground"}>
                      {form.countries.length ? `${form.countries.length} countries selected` : "Select Preferred Countries (min 3)"}
                    </span>
                    <span className="text-muted-foreground">▼</span>
                  </button>
                  {countryOpen && (
                    <div className="absolute z-20 mt-1 w-full max-h-60 overflow-y-auto bg-card border border-border rounded-lg shadow-xl p-3 grid grid-cols-2 gap-1">
                      {ALL_COUNTRIES.map((c) => (
                        <label key={c} className="flex items-center gap-2 p-1.5 rounded hover:bg-muted cursor-pointer text-sm">
                          <input type="checkbox" checked={form.countries.includes(c)} onChange={() => toggleCountry(c)} className="accent-gold" />
                          {c}
                        </label>
                      ))}
                    </div>
                  )}
                  {form.countries.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {form.countries.map((c) => (
                        <span key={c} className="text-xs px-2 py-1 rounded-full gold-gradient text-navy font-medium">
                          {c} <button type="button" onClick={() => toggleCountry(c)} className="ml-1">×</button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1 font-sans">Intake Start Date</label>
                    <input required type="date" className={inputCls} value={form.intakeStart} onChange={(e) => setForm({ ...form, intakeStart: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1 font-sans">Intake End Date</label>
                    <input required type="date" className={inputCls} value={form.intakeEnd} onChange={(e) => setForm({ ...form, intakeEnd: e.target.value })} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select required className={selectCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                    <option value="">Current Role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <select required className={selectCls} value={form.visaType} onChange={(e) => setForm({ ...form, visaType: e.target.value })}>
                    <option value="">Visa Type</option>
                    {visaTypes.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn-gold w-full text-base mt-2">Get Consultation via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoItem({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
        <Icon className="text-navy" size={20} />
      </div>
      <div>
        <h4 className="font-serif font-bold text-navy">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{text}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a> : <div>{content}</div>;
}
