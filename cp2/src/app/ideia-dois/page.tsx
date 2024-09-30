import Cabecalho from '@/components/Cabecalho/Cabecalho'

export default function page() {
    return (
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <Cabecalho/>
      <h1 className="text-4xl font-bold text-center mt-8 text-blue-600 mb-6">Catastrofismo Planetário</h1>
      <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl">Velikovsky argumentou que a história da Terra foi marcada por eventos catastróficos causados por interações planetárias, especialmente envolvendo Vênus. Ele sugeriu que, em tempos históricos recentes (cerca de 3.500 anos atrás), Vênus foi ejetado como um cometa gigante de Júpiter e teve uma trajetória errática, passando perto da Terra. Isso teria causado uma série de catástrofes globais, incluindo grandes inundações, terremotos e outros fenômenos naturais extremos.</p>
      </div> 
    );
  }
  