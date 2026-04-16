import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${light ? "text-cream" : "text-navy"}`}>
        {title}
      </h2>
      <div className="w-24 h-1 gold-gradient mx-auto mt-4 rounded-full" />
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto text-base ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
