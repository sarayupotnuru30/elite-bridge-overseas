interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative text-center px-4 animate-fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream">{title}</h1>
        <div className="w-24 h-1 gold-gradient mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-lg text-cream/70 max-w-xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
