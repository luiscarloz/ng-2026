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
      <button
        data-einscricao-event="121211"
        data-einscricao-url="https://checkout.e-inscricao.com"
        data-einscricao-api-url="https://www.e-inscricao.com"
        data-einscricao-ms-api-url="https://ei-pay.e-inscricao.com"
        data-einscricao-receipt-url="https://recibo.e-inscricao.tech"
        data-einscricao-api-participants-url="https://participants.e-inscricao.com"
        className="absolute cursor-pointer bg-transparent border-none outline-none
          inset-0 w-full h-full
          md:inset-auto md:top-[18%] md:left-[12%] md:w-[38%] md:h-[42%]"
        aria-label="Comprar Lote 01"
      />
    </section>
  );
}
