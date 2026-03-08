import SafeButton from "./SafeButton";

export default function Hero() {
  return (
    <section className="relative w-full h-auto md:h-screen md:min-h-[600px] overflow-hidden">
      <img
        src="/images/banner-hero.png"
        alt="Conf Nova Geração - 28 e 29 de Agosto - Centro de Convenções Ulysses Guimarães"
        className="hidden md:block w-full h-full object-cover"
      />
      <img
        src="/images/banner-hero-mobile.png"
        alt="Conf Nova Geração - 28 e 29 de Agosto - Centro de Convenções Ulysses Guimarães"
        className="block md:hidden w-full h-auto"
      />
      <SafeButton
        className="absolute cursor-pointer bg-transparent border-none outline-none
          top-[62%] left-[12%] w-[72%] h-[8%]
          md:top-[62%] md:left-[3%] md:w-[38%] md:h-[20%]"
        ariaLabel="Garanta sua vaga"
      />
    </section>
  );
}
