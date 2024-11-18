import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="bg-rose-700 p-7">
            <div className="flex items-center justify-center gap-7 text-nowrap">
                <Link className="hover:text-rose-200" href="/">Home </Link>
                <Link className="hover:text-rose-200" href="/aboutus">About us</Link>
                <Link className="hover:text-rose-200" href="/contactus">Contact us</Link>
                <Link className="hover:text-rose-200" href="/country">Country</Link>
            </div>
        </nav>
    )
}
