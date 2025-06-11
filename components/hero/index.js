import Image from 'next/image'
import { GrInstagram, GrMail } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Hero({ src, alt, title, description, link, mail, height = "h-96 md:h-128", place, ...props }) {
    const router = useRouter();
    const currentPath = router.pathname;

    if (currentPath === '/artists/eric' || currentPath === '/artists/jb' || currentPath === '/artists/richard' || currentPath === '/artists/joc') {
        return (
            <div className={`relative w-full overflow-hidden ${height}`}>
                <div className={`flex items-center justify-center xl:justify-start bg-neutrals-1000 w-full overflow-hidden ${height}`}>
                    <Image {...props} src={src} alt={alt}
                        className="absolute inset-0 object-cover object-center h-full w-full opacity-40 md:opacity-80" />
                    <div
                        className={`${place} relative z-10 flex flex-col space-y-4 px-8 md:px-12 xl:px-8 md:py-24 xl:py-12 md:bg-neutrals-1000 md:bg-opacity-60`}>
                        <h2 className="font-scified text-5xl font-normal text-neutrals-0">{title}</h2>
                        <h1 className="font-poppins text-base font-normal text-neutrals-0">{description}</h1>
                        <div className="flex gap-8">
                            <Link href={link}><GrInstagram
                                className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300" /></Link>
                            <Link
                                href={mail}><GrMail
                                    className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`relative w-full overflow-hidden ${height}`}>
                <div className={`flex items-center justify-center xl:justify-start bg-neutrals-1000 w-full overflow-hidden ${height}`}>
                    <Image {...props} src={src} alt={alt}
                        className="absolute inset-0 object-cover object-center h-full w-full opacity-40 md:opacity-80" />
                    <div
                        className={`${place} relative z-10 flex flex-col space-y-4 px-8 md:px-12 xl:px-8 md:py-24 xl:py-12 md:bg-neutrals-1000 md:bg-opacity-60`}>
                        <h2 className="font-scified text-5xl font-normal text-neutrals-0">{title}</h2>
                        <h1 className="font-poppins text-base font-normal text-neutrals-0">{description}</h1>
                    </div>
                </div>
            </div>
        )
    }
}