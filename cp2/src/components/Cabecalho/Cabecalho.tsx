import Link from "next/link";

export default function Cabecalho() {
    return(
        <div className="h-auto pt-4">
            <Link className="border-2 border-blue-600 ml-4 mt-4 p-1" href={'/'}>Voltar para Home</Link>
            </div>
    )
}