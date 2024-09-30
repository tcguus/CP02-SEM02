import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center h-screen justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Immanuel Velikovsky</h1>
        <Image alt="Exemplo de Imagem"
        width={500} // Defina a largura da imagem
        height={300} // Defina a altura da imagem
        className="rounded-lg shadow-lg mb-20" src="/image/Immanuel_Velikovsky.jpg"/></div>
      <div className="flex justify-evenly w-full">
        <Link className="border-2 border-black pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-um'}>Ideia 1</Link>
        <Link className="border-2 border-black pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-dois'}>Ideia 2</Link>
        <Link className="border-2 border-black pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-tres'}>Ideia 3</Link>
        <Link className="border-2 border-black pt-2 pb-2 pl-4 pr-4 rounded" href={'/calculation'}>Calculo</Link>
      </div>
    
    </main>
  );
}
