import Head from "next/head";
import Hero from "@/components/hero";
import imgEric from "../../../public/img/artists/eric/NCT-175.jpg";

export default function Eric () {
    return (
        <>
            <Head>
                <title>Salon de tatouage à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Neon Cobra, votre salon de tatouage Strasbourgeois pour obtenir un tatouage unique et de qualité. Avec une équipe de tatoueurs talentueux et expérimentés, chaque tatouage est conçu sur mesure pour s'adapter parfaitement à votre corps et refléter votre personnalité."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgEric} alt={`salon de tattoo neon cobra tattoo`} title={`NEON COBRA TATTOO`}
                      description={`Salon de tatouage à Strasbourg pour toutes vos envies`} place={`xl:ml-40`}/>
            </div>
            </>
    )
}