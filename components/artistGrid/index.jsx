import Image from 'next/image';

export default function artistGrid() {
    const artists = [
        { name: "Erico", link: "/artists/eric/", img: "grid_eric.jpg" },
        { name: "UncleHo", link: "/artists/richard/", img: "grid_richard.jpg" },
        { name: "JBMaglia", link: "/artists/jb/", img: "grid_jb.jpg" },
        { name: "Joc", link: "/artists/joc/", img: "grid_joc.jpg" }
    ]

    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {artists.map((artist) => {
                return (
                    <a href={artist.link} className="group relative object-cover h-auto" key={artists.id}>

                        <Image src={`/img/artists/${artist.img.toString()}`} width={350}
                            height={350} alt={'les artistes de Neon Cobra'} className=" h-72 object-cover group-hover:blur-sm group-hover:opacity-50 opacity-80 ease-in-out duration-500" />
                        <h4
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-scified text-center text-2xl md:text-3xl uppercase text-neutrals-0">{artist.name}</h4>

                    </a>
                )

            })}
        </div>

    )
}