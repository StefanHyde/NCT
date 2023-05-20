import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgBertrand from "../../../public/img/artists/bertrand/image0(1).jpeg";
import Link from "next/link";

export default function Bertrand() {

    const images = [
        "/img/artists/bertrand/image0(2).jpeg",
        "/img/artists/bertrand/image3.jpeg",
        "/img/artists/bertrand/image4.jpeg",
        "/img/artists/bertrand/image6.jpeg",
        "/img/artists/bertrand/image9.jpeg",
        "/img/artists/bertrand/image10.jpeg",
        "/img/artists/bertrand/image11.jpeg",
        "/img/artists/bertrand/image12.jpeg",
        "/img/artists/bertrand/image13.jpeg",
        "/img/artists/bertrand/image15.jpeg",
        "/img/artists/bertrand/image17.jpeg",
        "/img/artists/bertrand/image19.jpeg",
        "/img/artists/bertrand/image20.jpeg",
        "/img/artists/bertrand/image21.jpeg",
        "/img/artists/bertrand/image22.jpeg",
    ]

    return (
        <>
            <Head>
                <title> Tatouage Handpoke à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Découvrez la beauté et l'originalité du tatouage Handpoke à Strasbourg avec Bertrand du salon de tatouage Néon Cobra. Avec son approche artisanale et son attention méticuleuse aux détails, Bertrand crée des tatouages personnalisés et uniques à la main, en utilisant des techniques traditionnelles qui garantissent un résultat durable et élégant. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgBertrand} alt={`photo de Vert de gris`} title={`VERT DE GRIS`}
                      description={`Le tatouage handpoke, un art inspiré des méthodes de tatouage ancestrales à Strasbourg`}
                      link={`https://www.instagram.com/vertdegris_ttt/`} mail={'mailto:vertdegrice@gmail.com'} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Vous souhaitez réaliser un <strong>tatouage handpoke à Strasbourg</strong> ? Bertrand,
                            tatoueur spécialiste du handpoke tattoo, a posé ses valises chez Neon Cobra. Cette boutique
                            de tatouage et piercing est à deux minutes à pied de la gare de Strasbourg et de la Petite
                            France. Au sein du salon situé 8 rue de la course au centre de Strasbourg, Bertrand partage
                            sa passion pour le tatouage handpoke. À travers cette technique de tatouage entièrement
                            tournée vers la précision du geste, il partage un moment d’intimité avec ses clients
                            Strasbourgeois.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Comment réalise-t-on un
                            tatouage handpoke ?</h3>
                        <br/>
                        <p>La pratique du hand poked tattoo est souvent associée au Tebori, l’<strong>art traditionnel
                            du tatouage</strong>. Au Japon, le tatouage Tebori est entièrement réalisé à la main à
                            l’aide d'aiguilles implantées au bout d’un manche, le <i>Nomi</i>. Hand poke signifie
                            littéralement “une poussée réalisée avec la main”. Un tatouage handpoke s’effectue <strong>à
                                l’aide d’une aiguille, sans dermographe</strong>. Spécialiste du tatouage handpoke sur
                            la région Grand Est, Bertrand réalise des motifs point par point. Il obtient ainsi la taille
                            et l’effet désiré.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">En quoi la technique du
                            handpoke diffère-t-elle d’un tatouage réalisé à l’aide d’une machine ?</h3>
                        <br/>
                        <p>Le tatoueur handpoke, en réalisant à l’aiguille un tatouage point par point, dose l’ancrage
                            et l’intensité du motif. Pour créer une ligne, la technique du tatoueur handpoke consiste
                            à <strong>créer une série de petits points</strong> qu’il relie en répétant le geste.et les
                            coups d’aiguilles. Ainsi, il dose précisément la quantité d'encre, l'intensité du trait ou
                            crée un effet d’ombre. Avec un dermographe, l’appareil à tatouer électrique, la main guide
                            le trait mais <strong>ne maîtrise pas l’angle de pénétration </strong>ou la profondeur du
                            "poke". L’effet handpoke est différent de celui obtenu à l’aide d’une machine, avec un
                            résultat unique proche du dotwork. Ce type de technique est <strong>parfait pour réaliser de
                                petits dessins délicats</strong>.</p>
                    </div>
                </div>


            </div>

            <div className="flex flex-col items-center py-12 bg-neutrals-1000 space-y-12">
                <h3 className="font-scified text-3xl font-normal text-neutrals-0 text-center">REALISATIONS</h3>
                <ImgGallery images={images}/>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Pourquoi faut-il mieux ne
                            pas réaliser soi-même son tatouage handpoke ?</h3>
                        <br/>
                        <p>Par son apparente facilité d'exécution, les tatouages handpoke gagnent en popularité. Si vous
                            réalisez votre propre tatouage handpoke <strong>sans bénéficier de l’expérience d’un
                                tatoueur</strong>, vous ne saurez pas doser le geste. Piquée trop superficiellement,
                            l’encre ne reste pas emprisonnée sous l’épiderme et risque de s'écouler. Si vous piquez trop
                            profondément, vous obtiendrez <strong>des points grossiers voire flous</strong>. Le travail
                            de Bertrand dit <Link href="https://www.instagram.com/vertdegris_ttt/"
                                                  className="hover:text-primary-500 ease-in-out duration-300">@vertdegris_ttt</Link> sur
                            Instagram, témoigne d’une maîtrise acquise par des
                            années de pratique. Un tour du côté du <strong>studio de tatouage Neon Cobra</strong> entre
                            le boulevard de Nancy et le Quai Saint-Jean à Strasbourg, vous renseignera sur la qualité de
                            son travail.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Faire réaliser à
                            Strasbourg un tatouage handpoke est-il douloureux ?</h3>
                        <br/>
                        <p>Se faire tatouer n’est pas une partie de plaisir même si vous supportez stoïquement la
                            douleur. Toutefois, tatouer certaines zones du corps est plus douloureux que d'autres. La
                            technique du tatouage handpoke est <strong>réputée plus supportable</strong>.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Certaines parties du corps
                            offrent-elles une sensibilité différente au tatouage ?</h3>
                        <br/>
                        <p>Les surfaces du corps les moins sensibles sont celles où la peau est épaisse. Dans les zones
                            où <strong>la peau est fine et délicate</strong> comme l’aisselle, la cage thoracique ou
                            l'aine, la présence de terminaisons nerveuses<strong> rend le tatouage plus
                                douloureux</strong>.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Pourquoi la technique du
                            tatouage handpoke est plus supportable ?</h3>
                        <br/>
                        <p><strong>Le tatouage handpoke est moins douloureux </strong>car la peau n’est impactée que par
                            une seule aiguille. Une machine à tatouer comme le dermographe se compose de plusieurs
                            aiguilles qui piquent à grande vitesse. La peau étant moins agressée, la cicatrisation est
                            plus rapide. Toutefois, les soins post tattoo restent les mêmes.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Sur quelles parties du
                            corps peut-on faire un handpoke tattoo ?</h3>
                        <br/>
                        <p>Le handpoke tattoo s’applique sur toutes les parties du corps. La technique étant plus
                            douce, <strong>elle convient particulièrement aux parties du corps sensibles</strong> comme
                            les oreilles, les mains, et les chevilles. Si le tatouage handpoke est plus long à réaliser
                            qu’un tatouage machine, il reste la technique la plus appropriée pour le tatouage sur les
                            doigts de la main. Halte aux tatouages qui bavent, à Strasbourg, Bertrand maîtrise cet art à
                            la perfection.</p>
                    </div>


                </div>


            </div>

            <div className="flex flex-col py-12 bg-neutrals-1000 space-y-4">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h3 className="font-poppins text-center text-neutrals-0 uppercase">Peut-on réaliser tous les
                            motifs avec un hand poked tattoo ?</h3>
                        <br/>
                        <p>Un tatouage handpoke est beaucoup <strong>plus long à réaliser </strong>qu’un tatouage au
                            dermographe. Néanmoins, toutes les tailles de tatouages sont envisageables. Certains motifs
                            ou aplats noirs seront plus contraignants. Le handpoke est particulièrement adapté pour des
                            designs en dotwork ou avec peu de remplissage, il permet des motifs détaillés et élaborés. À
                            Strasbourg, le tatouage handpoke de Bertrand dit @vertdegris_ttt, se caractérise par la
                            finesse de son exécution.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h3 className="font-poppins text-center text-neutrals-0 uppercase">Le tatouage handpoke, une
                            expérience spirituelle ?</h3>
                        <br/>
                        <p>Se faire tatouer à la main est une expérience différente. C'est une expérience zen et
                            méditative. Le bruit de la machine à tatouer fait place au silence. Pour Bertrand à
                            Strasbourg, <strong>le tatouage a trait au rituel et au sacré</strong>. Le tatouage acquiert
                            une dimension spirituelle qu'il puise dans l’histoire médiévale. Des symboles alchimiques
                            qu’il transpose sur le corps. Le tatouage handpoke est <strong>une technique très
                                intime</strong>, il n’y a pas de machine entre l’artiste et la personne tatouée.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Bertrand, de la
                            linogravure au tatouage handpoke à Strasbourg</h3>
                        <br/>
                        <p>Bertrand a choisi de s’installer dans la capitale européenne. L’Alsace offre un incroyable
                            mélange de cultures et d’expressions. Bertrand s’est passionné pour la technique du tatouage
                            handpoke. Il aime <strong>tatouer des parties du corps délicates</strong> comme les mains,
                            les doigts ou les oreilles. Rencontrez Bertrand chez Neon Cobra quai Kléber, à la hauteur du
                            Pont Kuss au centre de Strasbourg et confiez-lui votre projet tattoo. Vous êtes entre de
                            bonnes mains, pour lui, tatouer est plus qu’un art, c’est un honneur.</p>

                    </div>


                </div>
            </div>


        </>
    )
}