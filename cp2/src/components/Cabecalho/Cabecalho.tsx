import Link from "next/link";

export default function Cabecalho() {
    return(
        <div className="h-auto pt-4">
            <Link className="border-2 border-blue-600 ml-4 mt-4 pt-2 pb-2 pl-4 pr-4 rounded" href={'/'}>Voltar para Home</Link>
            </div>
    )
}