import Head from "next/head";
import Hero from "@/components/hero";
import LightGallery from "@/components/imgGallery";
import imgEric from "../../../public/img/artists/eric/NCT-175.jpg";

export default function Eric() {

    const images = [
        "/../public/img/artists/eric/NCT-175.jpg",
        "/../public/img/artists/eric/NCT-175.jpg",
        "/../public/img/artists/eric/NCT-175.jpg",
        "/../public/img/artists/eric/NCT-175.jpg",
    ]

    return (
        <>
            <Head>
                <title>Tatouage Géométrique à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Découvrez tout l'art du  tatouage géométrique à Strasbourg avec Éric de Neon Cobra. Avec des années d'expérience dans l'art du tatouage et une passion pour les motifs géométriques, Éric crée des tatouages uniques et sur mesure pour chaque client."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgEric} alt={`photo de Erico`} title={`ERICO`}
                      description={`Le tatouage de style géométrique et dotwork, une forme d'art corporel unique à Strasbourg`}
                      link={`https://www.instagram.com/eric_o_`} place={`xl:ml-40`}
                />
            </div>

            <div id={"shop"} className="flex flex-col py-12 bg-neutrals-0 space-y-12">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Erico, artiste tatoueur, s’est installé à Strasbourg, capitale de l’Europe et ville
                            emblématique de l'Est de la France. Il puise son inspiration dans un univers mâtiné de Métal
                            Hurlant et d’Architecture brutale pour créer des motifs graphiques et géométriques. Un
                            univers qu’il réinterprète à l’infini, mêlant tatouage dotwork et éléments black tattoo.
                            Eric utilise des lignes claires, des couleurs vives et des motifs abstraits pour créer des
                            designs uniques. Il élabore des designs extrêmement travaillés dans un style géométrique et
                            graphique, qu’il propose en tattoo adapté à la zone de votre choix. Pour un projet
                            de <strong>tatouage géométrique à Strasbourg</strong>, Eric est à votre écoute chez Neon
                            Cobra, salon de tatouage et de piercing tout près de la gare à Strasbourg. </p>
                        <LightGallery images={images} />
                    </div>



                </div>
            </div>
        </>
    )
}