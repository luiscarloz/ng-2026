import { useState } from "react";

const perguntas = [
  {
    pergunta: "O valor da inscrição cobre o que?",
    resposta: "A sua participação do evento durante todas as sessões.",
  },
  {
    pergunta: "Crianças pagam ingresso?",
    resposta: "Crianças a partir de 11 anos pagam.",
  },
  {
    pergunta: "Existe reembolso?",
    resposta:
      "Conforme previsto no Código de Defesa do Consumidor (Lei nº 8.078/90, art. 49), o participante tem o direito de cancelar sua inscrição no evento no prazo de até 7 (sete) dias após a data da compra, desde que o pedido de cancelamento seja realizado antes do início do evento. Após o prazo de 7 dias ou após o início do evento, não haverá reembolso do valor pago, salvo em casos excepcionais, analisados a critério da organização.",
  },
  {
    pergunta: "O que preciso levar pro check-in?",
    resposta:
      "O comprovante da sua inscrição. Se não chegou no seu email, entre em contato conosco.",
  },
  {
    pergunta: "Posso parcelar o valor?",
    resposta: "O valor pode ser parcelado em até 3x com acréscimo.",
  },
  {
    pergunta: "Onde comer durante os intervalos?",
    resposta:
      "Teremos uma área no hall de alimentação com várias opções, assim como shoppings perto do local.",
  },
  {
    pergunta: "O local possui acessibilidade?",
    resposta: "Sim.",
  },
  {
    pergunta: "O local tem estacionamento?",
    resposta:
      "Sim, tem estacionamento privado. Estacionamento público só ao redor do Centro de Convenções.",
  },
];

export default function Faq() {
  const [aberta, setAberta] = useState(null);

  return (
    <section
      id="faq"
      className="relative w-full min-h-[70vh] md:min-h-screen flex items-center overflow-hidden"
    >
      <img
        src="/images/faq-bg.png"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/images/faq-bg-mobile.png"
        alt=""
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full mx-auto px-8 pt-12 pb-28 flex flex-col md:flex-row items-start gap-[20px]">
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <h2
            className="text-4xl md:text-7xl font-black uppercase leading-[0.9]"
            style={{ color: "#2c2c2c" }}
          >
            Perguntas
            <br />
            Frequentes
          </h2>
        </div>
        <div className="flex flex-col w-full md:w-1/2 items-start">
          <div className="flex flex-col gap-[6px] w-full md:w-[70%]">
            {perguntas.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setAberta(aberta === i ? null : i)}
                  className="w-full text-cream font-bold tracking-widest text-xs md:text-sm uppercase pl-6 pr-6 text-left flex items-center justify-between hover:opacity-90 transition-colors cursor-pointer"
                  style={{ backgroundColor: "#2c2c2c" }}
                >
                  {item.pergunta}
                  <span className="ml-4 text-base font-bold">
                    {aberta === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: aberta === i ? "500px" : "0",
                    opacity: aberta === i ? 1 : 0,
                  }}
                >
                  <div
                    className="text-cream/90 px-6 text-xs md:text-sm leading-relaxed"
                    style={{ backgroundColor: "#2c2c2c", opacity: 0.85 }}
                  >
                    {item.resposta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
