import { Container } from "./Container";

export function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-start w-1/2">
        <p className="text-secondary-default">Aplicativo iOS e Android</p>
        <h1 className="text-gray-900 font-bold text-5xl tracking-[-0.03rem] leading-[130%] w-full ">
          Aprenda mais sobre <span className="text-primary-default">UX/UI</span>{" "}
          com um jogo de perguntas e respostas
        </h1>
        <p>
          Criamos um aplicativo para você se divertir e aprender um pouco mais
          sobre esse universo UX/UI.{" "}
        </p>
      </div>
      <div className="flex w-1/2">sadass</div>
    </Container>
  );
}
