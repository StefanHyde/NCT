import {GrInstagram, GrFacebook} from 'react-icons/gr'
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div
                className="flex flex-col items-center pt-12 pb-8 text-neutrals-0 text-center bg-neutrals-1000 space-y-10">
                <Link href="/"><h4 className="font-scified text-2xl font-normal hover:text-secondary-500 ease-in-out duration-300">NEON COBRA TATTOO</h4></Link>

                <p>
                    8 Rue de la Course <br/>
                    67000 STRASBOURG <br/>
                    03 92 01 22 51
                </p>
                <div className="flex gap-8">
                    <Link href="https://www.instagram.com/neoncobratattoo/?hl=fr"><GrInstagram
                        className="text-2xl text-neutrals-0 hover:text-secondary-500 ease-in-out duration-300"/></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100078082662786"><GrFacebook
                        className="text-2xl text-neutrals-0 hover:text-secondary-500 ease-in-out duration-300"/></Link>

                </div>

            </div>

            <div className="">
                <Link href="/rgpd">Rgpd</Link>
            </div>
        </footer>
    )
}