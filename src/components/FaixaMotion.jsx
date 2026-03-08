export default function FaixaMotion() {
  return (
    <section
      className="w-full h-[70px] overflow-hidden"
      style={{ backgroundColor: "#f0efe6" }}
    >
      <div className="flex animate-marquee h-full items-center gap-[35px] md:gap-[90px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <img
            key={i}
            src="/images/faixa-motion.png"
            alt=""
            className="h-auto md:h-[65%] w-auto shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
