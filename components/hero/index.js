import Image from 'next/image'

export default function Hero({src, alt, title, description, place, ...props}) {
    return (
        <div className="relative w-full h-128 md:h-192 2xl:h-256">
            <div className="flex items-center justify-center xl:justify-start bg-neutrals-1000 h-full w-full">
                <Image {...props} src={src} alt={alt} className="object-cover object-center h-full w-full opacity-40 md:opacity-80"/>
                <div
                    className={`${place} absolute z-10 flex flex-col space-y-4 px-8 md:px-12 xl:px-8 md:py-24 xl:py-12 md:bg-neutrals-1000 md:bg-opacity-60`}>
                    <h1 className="font-scified text-5xl font-normal text-neutrals-0">{title}</h1>
                    <h2 className="font-poppins text-base font-normal text-neutrals-0">{description}</h2>
                </div>
            </div>
        </div>
    )
}