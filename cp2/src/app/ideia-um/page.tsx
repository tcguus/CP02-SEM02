import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Image from "next/image"

export default function page() {
    return (
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        <Image src="/images/ideia1.jpg"
        alt="Rejeição do Uniformitarismo Científico"
        width={400}
        height={200}
        />
      <h1 className="text-4xl font-bold text-center mt-8 text-blue-600 mb-6">Rejeição do Uniformitarismo Científico</h1>
      <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl">Ele desafiou a visão científica dominante de seu tempo, conhecida como uniformitarismo, que sustenta que os processos geológicos e astronômicos ocorrem de maneira lenta e constante ao longo do tempo. Em vez disso, Velikovsky argumentou que mudanças dramáticas e repentinas moldaram o planeta em tempos históricos. Segundo ele, esses eventos catastróficos teriam afetado o clima, a geologia e até a órbita da Terra, o que explicaria certas anomalias na cronologia histórica.
      Essas ideias foram amplamente rejeitadas pela comunidade científica, mas Velikovsky teve impacto duradouro em debates sobre catastrofismo e o papel de eventos astronômicos na história da Terra.</p>
      <Cabecalho/>
      </div> 
    );
  }
  