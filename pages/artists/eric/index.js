import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgEric from "../../../public/img/artists/eric/NCT-175.jpg";
import Link from "next/link";

export default function Eric() {

    const images = [
        "/img/artists/eric/PHOTO-2023-03-03-23-53-05(1).jpg",
        "/img/artists/eric/IMG_5140.jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-51-30(1).jpg",
        "/img/artists/eric/D9DAB507-6179-489E-972D-9368EF7101AC.jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-51-30(4).jpg",
        "/img/artists/eric/82E0346C-28BF-4ABA-940B-109EFE70F74C(2).jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-51-30(3).jpg",
        "/img/artists/eric/851FF5C7-BF20-47EF-892D-43939C9C5F68(1).jpg",
        "/img/artists/eric/B816045F-3833-4D4D-AD88-352F79A741A7(2).jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-53-05(5).jpg",
        "/img/artists/eric/6163FA2A-8AF6-411F-825E-22BEAE435288.jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-51-30.jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-51-30(2).jpg",
        "/img/artists/eric/PHOTO-2023-03-03-23-53-05(4).jpg",
        "/img/artists/eric/IMG_21581.jpg",
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
                      link={`https://www.instagram.com/eric_o_`} mail={'mailto:ericotattoo@yahoo.com'} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Erico, artiste tatoueur, s’est installé à Strasbourg, capitale de l’Europe et ville
                            emblématique de l'Est de la France. Il puise son inspiration dans un univers mâtiné de Métal
                            Hurlant et d’Architecture brutale pour créer des motifs graphiques et géométriques. Un
                            univers qu’il réinterprète à l’infini, mêlant tatouage dotwork et éléments black tattoo.
                            Erico utilise des lignes claires, des couleurs vives et des motifs abstraits pour créer des
                            designs uniques. Il élabore des designs extrêmement travaillés dans un style géométrique et
                            graphique, qu’il propose en tattoo adapté à la zone de votre choix. Pour un projet
                            de <strong>tatouage géométrique à Strasbourg</strong>, Erico est à votre écoute chez Neon
                            Cobra, salon de tatouage tout près de la gare à Strasbourg. </p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage géométrique,
                            l'art de la précision et de l'épure</h3>
                        <br/>
                        <p>Le tatouage géométrique n’est pas qu’une composition basique dans laquelle entre des <strong>formes
                            géométriques ou symétriques</strong>. Cet art corporel mêle un entrelac sophistiqué et
                            complexe de formes. Le tatouage géométrique et graphique gagne en popularité dans l'univers
                            du tatouage. L’art du tatoueur au style géométrique et graphique, consiste à <strong>utiliser
                                différentes techniques et styles</strong> pour créer un ensemble harmonieux. Le dotwork,
                            par la technique du pointillisme, donne de la profondeur au motif et crée un effet d'ombrage
                            délicat.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage de style
                            géométrique et graphique, des éléments structurés qui abritent une forme d'expression
                            personnelle</h3>
                        <br/>
                        <p>Contrairement au tatouage traditionnel, le tattoo géométrique <strong>interprète des éléments
                            du monde naturel</strong>. Animaux, plantes ou formes géométriques stylisées deviennent des
                            figures totémiques au style intemporel. À Strasbourg, Erico partage sa vision du tatouage
                            par <strong>une esthétique moderne et épurée</strong>. Il utilise des couleurs simples et
                            contrastées pour créer de superbes effets visuels. La technique du dotwork ajoute de la
                            profondeur au design. Le tatoueur obtient un effet de dégradé et crée une texture subtile.
                        </p>
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
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Les principaux symboles
                            présents dans les tatouages de style géométrique ou graphique</h3>
                        <br/>
                        <p>Les motifs et formes que l’on retrouve régulièrement dans les tatouages géométriques,
                            véhiculent <strong>des motifs symboliques</strong>. Voici les symboles les plus couramment
                            utilisés.</p>
                        <ul className="pt-6">
                            <li>Les triangles : Les triangles peuvent être utilisés seuls ou combinés avec d'autres
                                formes pour créer des designs plus complexes.
                            </li>
                            <li>Les cercles : Les cercles représentent l'harmonie, la complétude et l'infini. Ils
                                forment des motifs répétitifs ou constituent l’élément central d'un design de
                                tatouage.
                            </li>
                            <li>Les carrés : Les carrés représentent la stabilité, la solidité et la sécurité. Ils
                                créent des designs géométriques structurés.
                            </li>
                            <li>Les hexagones : Les hexagones sont utilisés en toile de fond pour former des motifs
                                de ruche. Ils représentent l'équilibre et la symétrie.
                            </li>
                            <li>Les lignes droites : En traits forts ou fins les lignes droites structurent
                                l’ensemble.
                            </li>
                            <li>Les mandalas : Le mandala est souvent utilisé dans les tatouages géométriques pour
                                représenter l'harmonie, la méditation et la spiritualité. Le mandala peut être créé
                                à partir de cercles, de triangles, de carrés et d'autres formes géométriques.
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">À Strasbourg, le dotwork
                            s'invite dans des tatouages aux compositions géométriques</h3>
                        <br/>
                        <p>Lorsqu’une ombre est fine, légère et crée un effet poudré, il y a de fortes chances qu’elle
                            soit réalisée avec la technique du dotwork. Le dotwork est une <strong>technique de tatouage
                                pointilliste</strong>. Le tatoueur utilise des points de différentes tailles pour créer
                            des motifs et des designs. Ses possibilités sont quasi infinies, le dotwork peut être
                            utilisé pour créer des tatouages géométriques, des paysages, ou même des portraits. La
                            technique permet de créer des textures uniques, des détails fins et <strong>des nuances
                                subtiles dans les ombrages</strong>. C’est un travail minutieux mais le rendu vaut bien
                            un peu de patience.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Qu'est-ce qui caractérise
                            le tatouage de style graphique ?</h3>
                        <br/>
                        <p>Le style graphique en tatouage est un style relativement récent popularisé par des artistes
                            tatoueurs issus d’écoles d’arts appliqués. Sur un design tattoo graphique, on remarque
                            la <strong>présence de lignes claires, de couleurs vives et de motifs
                                abstraits</strong> pour créer des designs uniques et modernes. Les tatouages de style
                            graphique peuvent inclure des motifs géométriques, des illustrations abstraites, des
                            lettrages, des symboles et des formes épurées. L’effet géométrique se développe sur des
                            tatouages en noir et blanc ou à l'aide de couleurs vives et saturées qui ajoutent des
                            éléments de contraste au design. Pour un <strong>tatouage original au centre de
                                Strasbourg</strong>, préférez le style graphique à des motifs old school comme des roses
                            ou des crânes.
                        </p>
                    </div>


                </div>


            </div>

            <div className="flex flex-col py-12 bg-neutrals-1000 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h3 className="font-poppins text-center text-neutrals-0 uppercase">Comment choisir un design de
                            tatouage géométrique ou dotwork à Strasbourg ?</h3>
                        <br/>
                        <p>Vous aimez le style géométrique abstrait ? À Strasbourg, au studio Neon Cobra vous êtes au
                            bon endroit. Voici quelques conseils pour vous aider à choisir un design de tatouage
                            géométrique ou dotwork.</p>
                        <ul className="pt-6">
                            <li>Si vous n'avez pas d'idée précise, parcourez les comptes Instagram d'Erico
                                <Link href="https://www.instagram.com/hallowed.screams/"
                                      className="hover:text-primary-500 ease-in-out duration-300"> @hallowed.screams</Link>, <Link
                                    href="https://www.instagram.com/eric_o_/"
                                    className="hover:text-primary-500 ease-in-out duration-300"> @eric_o_</Link> pour
                                trouver des idées de designs qui vous plaisent.
                            </li>
                            <li>Pensez à la taille et à l'emplacement du tatouage que vous souhaitez.</li>
                            <li>Réfléchissez à ce que vous voulez que le tatouage représente et choisissez un design
                                qui correspond à cette signification.
                            </li>
                            <li>Évaluez la complexité du design : Le style géométrique et dotwork peut nécessiter du
                                temps pour sa réalisation. Cet art tattoo se dévoile lentement !
                            </li>
                        </ul>
                        N'hésitez pas à demander conseil à un artiste de tatouage expérimenté dans le style
                        géométrique et dotwork comme Erico. Il pourra vous donner des conseils et vous montrer des
                        exemples de designs pour vous aider à visualiser le résultat final

                    </div>


                </div>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Erico, tatoueur de style
                            graphique, géométrique et dotwork au salon Neon Cobra à Strasbourg</h3>
                        <br/>
                        <p>Membre fondateur du studio Neon Cobra à Strasbourg, Erico est un <strong>tatoueur
                            expérimenté</strong> qui maîtrise les techniques de tatouage de style graphique, géométrique
                            et dotwork. Il crée <strong>des designs précis, complexes et détaillés</strong>, en
                            s'assurant que le tatouage est réalisé dans les meilleures conditions d'hygiène. Il utilise
                            des encres et des aiguilles stériles pour un tatouage de qualité. Le studio Neon Cobra se
                            concentre sur la <strong>création de tatouages uniques et personnalisés</strong> pour chaque
                            client. Erico travaille en amont avec ses clients pour proposer un projet tattoo qui
                            correspond à vos idées et votre style.</p><br/><p>Vous pouvez contacter Erico par e-mail,
                        téléphone
                        ou <Link
                            href="https://www.instagram.com/eric_o_/"
                            className="hover:text-primary-500 ease-in-out duration-300"> Instagram</Link> afin de
                        discuter d’un projet. Le salon de tatouage est situé 8,
                        rue de la course à Strasbourg. La rue s’étend entre le boulevard de Nancy et le quai
                        Saint-Jean à Strasbourg. Un lieu au cœur de Strasbourg pour ceux qui cherchent un
                        tatouage unique et personnalisé dans un style graphique, géométrique et dotwork.</p>

                    </div>


                </div>
            </div>


        </>
    )
}