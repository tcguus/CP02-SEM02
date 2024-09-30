import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <div className="flex justify-evenly w-full">
        <Link href={'/ideia-um'}>ideia 1</Link>
        <Link href={'/ideia-dois'}>ideia 2</Link>
        <Link href={'/ideia-tres'}>ideia 3</Link>
        s<Link href={'/calculation'}>calculo</Link>
      </div>
    
    </main>
  );
}
