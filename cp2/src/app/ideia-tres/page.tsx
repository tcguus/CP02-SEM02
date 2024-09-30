import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Image from "next/image"

export default function page() {
    return (
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <Image src="/image/ideia 3.webp"
      alt="Interpretação Astronômica dos Mitos"
        width={400}
        height={200}
        />
      <h1 className="text-4xl font-bold text-center mt-8 text-blue-600 mb-6">
        Interpretação Astronômica dos Mitos
      </h1>
      <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl">
        Velikovsky reinterpretou muitos mitos e textos antigos (como a Bíblia, mitologia grega e textos mesopotâmicos) como registros de eventos astronômicos reais. Ele sugeriu que muitas lendas de deuses lutando nos céus, dragões e serpentes de fogo são, na verdade, relatos simbólicos de interações planetárias, como o que ele acreditava ser o "nascimento" de Vênus e suas passagens próximas da Terra.
      </p>
      <Cabecalho />
    </div>
    );
  }
  