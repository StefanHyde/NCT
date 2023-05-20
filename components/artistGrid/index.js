import Image from 'next/image';

export default function artistGrid() {
    const artists = [
        {name: "Erico", link: "/artists/eric/", img: "grid_eric.jpg"},
        {name: "UncleHo", link: "/artists/richard/", img: "grid_richard.jpg"},
        {name: "JBMaglia", link: "/artists/jb/", img: "grid_jb.jpg"},
        {name: "Vert de Gris", link: "/artists/bertrand/", img: "grid_bertrand.jpg"},
    ]

    return (
        <div className="container grid grid-cols-[300px_] md:grid-cols-[300px__300px] gap-8">
            {artists.map((artist) => {
                return (
                    <a href={artist.link} className="group relative" key={artists.id}>

                        <Image src={`/img/artists/${artist.img.toString()}`} width={300}
                               height={300} alt={'les artistes de Neon Cobra'} className="group-hover:blur-sm opacity-80 ease-in-out duration-500"/>
                        <h4
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-scified text-center text-2xl uppercase text-neutrals-0">{artist.name}</h4>

                    </a>
                )

            })}
        </div>

    )
}