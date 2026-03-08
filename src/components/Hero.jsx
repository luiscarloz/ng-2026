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
      <button
        data-einscricao-event="121211"
        data-einscricao-url="https://checkout.e-inscricao.com"
        data-einscricao-api-url="https://www.e-inscricao.com"
        data-einscricao-ms-api-url="https://ei-pay.e-inscricao.com"
        data-einscricao-receipt-url="https://recibo.e-inscricao.tech"
        data-einscricao-api-participants-url="https://participants.e-inscricao.com"
        className="absolute cursor-pointer bg-transparent border-none outline-none
          top-[62%] left-[12%] w-[72%] h-[8%]
          md:top-[62%] md:left-[3%] md:w-[38%] md:h-[20%]"
        aria-label="Garanta sua vaga"
      />
    </section>
  );
}
