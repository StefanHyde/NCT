import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgJb from "../../../public/img/artists/jb/NCT-6.jpg";
import Link from "next/link";

export default function Jb() {

    const images = [
        "/img/artists/jb/francis.jpg",
        "/img/artists/jb/IMG-4084.jpg",
        "/img/artists/jb/IMG-4601.jpg",
        "/img/artists/jb/IMG-4954.jpg",
        "/img/artists/jb/IMG_20191025_181323.jpg",
        "/img/artists/jb/IMG_20200119_171627 ww.jpg",
        "/img/artists/jb/IMG_20210912_185012.jpg",
        "/img/artists/jb/IMG_20220219_151423 (1).jpg",
        "/img/artists/jb/jon34.jpg",
        "/img/artists/jb/remi2.jpg",
        "/img/artists/jb/tigre3quart.jpg",
    ]

    return (
        <>
            <Head>
                <title>Tatouage Traditionnel Japonais à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Découvrez l'art traditionnel japonais du tatouage à Strasbourg avec Jean-Baptiste. En tant que tatoueur expert dans le style de tatouage japonais, Jean-Baptiste crée des tatouages uniques et sur mesure qui reflètent la beauté et la culture japonaise."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgJb} alt={`photo de JbMaglia`} title={`JBMAGLIA`}
                      description={`Un salon de tatouage japonais traditionnel à Strasbourg`}
                      link={`https://www.instagram.com/jbmaglia/?hl=fr`} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Plus communément appelé Irezumi, le tatouage japonais traditionnel est un style de tatouage
                            qui connaît un grand succès dans le monde du tatouage en France. Le tatoueur doit posséder
                            une maîtrise totale de cet art qui s’étend sur une grande partie du corps voire sur le corps
                            en entier. Jean-Baptiste s’est spécialisé dans le <strong>tatouage japonais traditionnel à
                                Strasbourg</strong>. Tatoueur passionné par le dessin et le tattoo depuis l’adolescence,
                            il puise son inspiration dans l’estampe, la peinture et la bande dessinée. Dans notre salon,
                            il propose des tatouages en totale adéquation avec la personnalité de ses clients. Quels
                            sont les significations et symboles du tatouage japonais ? Sur quelle partie du corps
                            peut-on se faire tatouer ? Un art du tatouage parfaitement maîtrisé par Jean-Baptiste chez
                            Neon Cobra, salon de tatouage et piercing à Strasbourg.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">La petite Histoire du
                            tatouage japonais traditionnel</h2>
                        <br/>
                        <p>Le <strong>tatouage japonais traditionnel </strong>est un art à part entière avec ses motifs,
                            sa technique et ses maîtres. Un art que maîtrise aujourd’hui <strong>Jean-Baptiste chez Neon
                                Cobra</strong> dans la capitale européenne. L’Irezumi, le tatouage japonais
                            traditionnel, apparaît à l'ère Edo, au début du 17e siècle. Il s’appuie sur L'ukiyo-e, un
                            mouvement qui privilégie les sujets du quotidien. Le tatouage a longtemps été une marque qui
                            désignait les criminels au Japon. Le <strong>tatouage ornemental</strong> succède à cette
                            pratique.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage japonais
                            traditionnel, une histoire qui se développe dans la culture populaire</h3>
                        <br/>
                        <p>Les classes les plus aisées de la société japonaise peuvent porter le kimono. Le petit
                            peuple, ouvriers du bâtiment et porteurs "Jinrikisha ", travaille le plus souvent dans la
                            rue et <strong>torse nu</strong>. Le <i>suidoken </i>est un roman d’aventures Chinois qui,
                            par ses héros tatoués sur tout le corps, <strong>popularise le tatouage</strong>. Avec le
                            tatouage, à défaut d'habits, le corps se pare de motifs gravés sur la peau,<strong> la mode
                                des tatouages se répand.</strong></p>
                    </div>
                </div>


            </div>

            <div className="flex flex-col items-center py-12 bg-neutrals-1000 space-y-12">
                <h2 className="font-scified text-3xl font-normal text-neutrals-0 text-center">REALISATIONS</h2>
                <ImgGallery images={images}/>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage japonais
                            traditionnel, un art confié à des maîtres tatoueurs</h3>
                        <br/>
                        <p>Les motifs de tatouages sont <strong>popularisés par l’estampe</strong>. Les dessins sont
                            réalisés par des maîtres <strong>qui les confient ensuite à des graveurs</strong>. Le geste
                            s’affine, l’outil se perfectionne. Au début du 19e siècle, la <strong>profession de maître
                                tatoueur</strong> s'installe. Bien que populaire, le tatouage reste un marqueur social
                            qui stigmatise le petit peuple. Le tatouage, perçu comme une coutume barbare et ridicule,
                            est interdit aux Japonais en 1872. Il reste toutefois ouvert aux étrangers. Les marins se
                            rendent dans les premiers <strong>salons de tatouages</strong>.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage traditionnel,
                            des dessins inspirés par les mythes et légendes du Japon </h2>
                        <br/>
                        <p>Les motifs de dessins propres au tatouage Irezumi sont restés inchangés à travers les
                            siècles. Le tatouage traditionnel japonais est <strong>un art très codifié</strong>. Les
                            tatoueurs inscrivent <strong>les éléments</strong> eau, feu, air, en toile de fond de leur
                            composition. Des personnages (déesses et démons), animaux, éléments floraux
                            viennent <strong>compléter harmonieusement la</strong><strong> composition</strong>. Ces
                            éléments s’associent selon une grille de lecture, <strong>une composition codifiée que les
                                tatoueurs doivent respecter. </strong>À Strasbourg, Jean-Baptiste maîtrise cet art à la
                            perfection.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Sur quelle partie du corps
                            peut-on faire un tatouage japonais traditionnel ?</h2>
                        <br/>
                        <p>Les tatouages japonais traditionnels étaient réalisés à l’aide d’un Tebor, un impressionnant
                            bâton de bambou muni d’aiguilles. L’Irezumi se pratique aujourd’hui à l’aide d’<strong>un
                                dermographe</strong>. Si la technique a évolué, l’hygiène reste parfaitement maîtrisée
                            au studio Neon Cobra à Strasbourg. <strong>L’Irezumi est un tatouage imposant</strong>, il
                            recouvre de grandes surfaces du corps par des motifs sophistiqués. Le tatouage peut
                            s’étendre <strong>du cou jusqu’au bas du dos</strong>. Sur les fesses, sur une partie de
                            l’avant-bras, sur la poitrine ou embrasser la totalité du corps.</p>
                    </div>
                </div>


            </div>

            <div className="flex flex-col py-12 bg-neutrals-1000 space-y-4">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h2 className="font-poppins text-center text-neutrals-0 uppercase">Les motifs de prédilection de
                            Jean-Baptiste, un tatoueur au style japonais traditionnel à Strasbourg</h2>
                        <br/>
                        <p>Parmi les tatoueurs passionnés de tatouage japonais qui ont choisi de s’installer en Alsace
                            dans la ville du Parlement européen, Jean-Baptiste est un expert. <strong>Flash tattoo ou
                                design complexe</strong>, il sait trouver la bonne taille et le bon positionnement du
                            tatouage. Jean-Baptiste choisit les éléments de fond du projet associés à des figures
                            qui <strong>respectent les codes esthétiques du</strong> <strong>tatouage traditionnel
                                japonais</strong>. Ses années de pratique font de Jean-Baptiste, une référence du
                            tatouage à Strasbourg.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h2 className="font-poppins text-center text-neutrals-0 uppercase">Quelques motifs de tatouage
                            traditionnels disponibles chez Neon Cobra à Strasbourg</h2>
                        <br/>
                        <p>Véritable œuvre d’art, le tatouage traditionnel japonais demande <strong>de la patience et de
                            la dextérité</strong>. Dans l’Irezumi, chaque symbole représente sa propre signification,
                            qu’il soit animal, végétal ou créature mythologique. Voici quelques motifs issus du
                            bestiaire ou de la mythologie traditionnelle japonaise. Ces <strong>motifs japonais
                                traditionnels</strong> sont faisables en Gakubori ou en Nukibori, avec ou sans fond.
                            Parmi les nombreux motifs, voici quelques éléments du tatouage japonais traditionnel.
                            <ul>
                                <li>Le bestiaire : Ryū dragon, Tora tigre, Koï carpe, Houou phénix ou Baku.</li>
                                <li>Les créatures fantastiques : Fudo myoo, masque Hannya, Fujin et Raijin.</li>
                                <li>Les végétaux : Botan pivoine, Kiku chrysanthème, Hasu lotus, Sakura fleur de
                                    cerisier etc.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Pourquoi choisir un
                            tatouage japonais traditionnel avec Jean-Baptiste à Strasbourg ?</h2>
                        <br/>
                        <p>Passionné par le dessin et le tatouage, Jean-Baptiste tatoue depuis plus de 15 ans. Dans la
                            capitale de l'Europe, au plus proche de la demande de ses clients, il sait <strong>composer
                                des projets de tatouages </strong>qui leur correspondent. Ensemble, vous élaborez le
                            projet tattoo selon le style choisi et décidez de son emplacement. C'est un travail
                            préalable, un échange d'idées qui construit <strong>un ensemble harmonieux</strong>. Pour
                            Jean-Baptiste "tatouer c'est savoir rester fidèle à l’idée du client, la retranscrire avec
                            précision".</p>

                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Comment se faire tatouer
                            par Jean-Baptiste chez Neon Cobra à Strasbourg en Alsace</h2>
                        <br/>
                        <p>Venez concevoir votre <strong>projet de</strong> <strong>tatouage japonais
                            traditionnel</strong> chez Neon Cobra. Notre équipe vous reçoit 8, rue de la course à
                            Strasbourg. Passez au shop, près du quai Kléber, à la hauteur du Pont Kuss au centre de
                            Strasbourg, sans vous perdre dans la petite France. Vous pouvez amener un projet, des
                            visuels, les styles qui vous plaisent dans le tattoo. Nos tarifs et prix s’établissent en
                            fonction de votre projet.</p>

                    </div>


                </div>
            </div>


        </>
    )
}