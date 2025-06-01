import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgJoc from "../../../public/img/artists/joc/NCT-Joc.jpg";
import Link from "next/link";

export default function Jb() {

    const images = [
        "/img/artists/joc/joc blackwork 1.jpg",
        "/img/artists/joc/joc blackwork 2.jpg",
        "/img/artists/joc/joc blackwork 3.jpg",
        "/img/artists/joc/joc blackwork 4.jpg",
        "/img/artists/joc/joc blackwork 5.jpg",
        "/img/artists/joc/joc blackwork 6.jpg",
        "/img/artists/joc/joc blackwork 7.jpg",
        "/img/artists/joc/joc blackwork 8.jpg"
    ]

    return (
        <>
            <Head>
                <title>Tatouage Traditionnel Japonais à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                    content="Découvrez l'art traditionnel japonais du tatouage à Strasbourg avec Jean-Baptiste. En tant que tatoueur expert dans le style de tatouage japonais, Jean-Baptiste crée des tatouages uniques et sur mesure qui reflètent la beauté et la culture japonaise." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <div className="mt-18">
                <Hero src={imgJoc} alt={`photo de Joc`} title={`JOC`}
                    description={``}
                    link={``} mail={''} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">




                <div className="flex flex-col items-center py-12 bg-neutrals-1000 space-y-12">
                    <h3 className="font-scified text-3xl font-normal text-neutrals-0 text-center">REALISATIONS</h3>
                    <ImgGallery images={images} imageAlt={('')} />
                </div>



            </div>










        </>
    )
}