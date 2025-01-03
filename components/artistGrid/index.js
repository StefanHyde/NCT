import Image from 'next/image';

export default function artistGrid() {
    const artists = [
        {name: "Erico", link: "/artists/eric/", img: "grid_eric.jpg"},
        {name: "UncleHo", link: "/artists/richard/", img: "grid_richard.jpg"},
        {name: "JBMaglia", link: "/artists/jb/", img: "grid_jb.jpg"},
    ]

    return (
        <div className="container flex flex-wrap justify-center gap-10">
            {artists.map((artist) => {
                return (
                    <a href={artist.link} className="group relative" key={artists.id}>

                        <Image src={`/img/artists/${artist.img.toString()}`} width={350}
                               height={350} alt={'les artistes de Neon Cobra'} className="group-hover:blur-sm opacity-80 ease-in-out duration-500"/>
                        <h4
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-scified text-center text-2xl uppercase text-neutrals-0">{artist.name}</h4>

                    </a>
                )

            })}
        </div>

    )
}