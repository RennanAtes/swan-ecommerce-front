import Link from "next/link";

export default function Header(){
    return (
        <header className="">
            <div className="gap-5 flex">
                <Link href={'/protegida'}>Pagina protegida</Link>
                <Link href={'/semprotecao'}>Sem protecao</Link>
                <Link href={'/login'}>Login</Link>
            </div>
        </header>
    )
}