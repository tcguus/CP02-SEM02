import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Image from "next/image"

export default function page() {
    return (
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
         <Image src=""
        alt=""
        width={400}
        height={200}
        />
        <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl">Immanuel Velikovsky, em sua obra "Mundos em Colisão" (1950), propôs que planetas como Vênus e Marte, em um passado não muito distante, tiveram interações gravitacionais que causaram grandes catástrofes na Terra. Ele sugeriu que eventos descritos em textos antigos, como a Bíblia, foram, na verdade, relatos desses eventos cósmicos. No entanto, suas teorias foram amplamente desacreditadas pela comunidade científica, pois não se alinham com o conhecimento moderno em astronomia e física.</p>
        <Cabecalho/>
      </div> 
    );
  }
  