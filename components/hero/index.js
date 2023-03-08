import Image from 'next/image'

export default function Hero({src, alt, title, description, place, ...props}) {
    return (
        <div className="w-full h-96 md:h-192 2xl:h-256">
            <div className="bg-neutrals-1000 h-full w-full">
                <Image {...props} src={src} alt={alt} className="object-cover object-center h-full w-full opacity-80"/>
                <div
                    className={`${place} absolute z-10 flex flex-col space-y-4 px-8 py-12 bg-neutrals-1000 bg-opacity-60`}>
                    <h1 className="font-scified text-5xl font-normal">{title}</h1>
                    <h2 className="font-poppins text-base font-normal">{description}</h2>
                </div>
            </div>
        </div>
    )
}