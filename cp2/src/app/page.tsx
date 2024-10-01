import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center h-screen justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center mt-8 text-blue-600 mb-6">Immanuel Velikovsky</h1>
        <Image alt="Fotografia de Immanuel Velikovsky"
        width={300} 
        height={300} 
        className="rounded-lg shadow-lg mb-20" src="/images/Immanuel_Velikovsky.jpg"/></div>
      <div className="flex justify-evenly w-full"> 
        <Link className="border-2 border-blue-600 pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-um'}>Ideia 1</Link>
        <Link className="border-2 border-blue-600 pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-dois'}>Ideia 2</Link>
        <Link className="border-2 border-blue-600 pt-2 pb-2 pl-4 pr-4 rounded" href={'/ideia-tres'}>Ideia 3</Link>
        <Link className="border-2 border-blue-600 pt-2 pb-2 pl-4 pr-4 rounded" href={'/calculation'}>Cálculo</Link>
      </div>
    </main>
  );
}
