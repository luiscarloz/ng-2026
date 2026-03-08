import SafeButton from "./SafeButton";

export default function Lotes() {
  return (
    <section id="lotes" className="relative w-full overflow-hidden">
      <img
        src="/images/banner-lotes.png"
        alt="Lotes disponíveis - Lote 01 disponível"
        className="hidden md:block w-full h-auto"
      />
      <img
        src="/images/banner-lotes-mobile.png"
        alt="Lotes disponíveis - Lote 01 disponível"
        className="block md:hidden w-full h-auto"
      />
      <SafeButton
        className="absolute cursor-pointer bg-transparent border-none outline-none
          top-[3%] left-[15%] w-[70%] h-[20%]
          md:top-[18%] md:left-[12%] md:w-[38%] md:h-[42%]"
        ariaLabel="Comprar Lote 01"
      />
    </section>
  );
}
