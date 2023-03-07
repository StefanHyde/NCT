import Image from 'next/image'

export default function Hero ({src, alt, ...props}) {
    return(
        <div className="w-full h-96 md:h-192 2xl:h-256">
            <div className="relative bg-neutrals-1000 h-full w-full">
                <Image {...props} src={src} alt={alt} className="object-cover object-center h-full w-full opacity-80" />
                <div className="absolute bottom-1/2 ml-40 z-10 flex flex-col space-y-5 p-8 bg-neutrals-1000">
                    <h1 className="font-scified text-5xl">NEON COBRA TATTOO</h1>
                    <h2>Lorem Ipsum</h2>
                </div>
            </div>
        </div>
    )
}