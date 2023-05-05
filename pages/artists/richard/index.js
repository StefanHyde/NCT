import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgRichard from "../../../public/img/artists/richard/NCT-137.jpg";
import Link from "next/link";

export default function Richard() {

    const images = [
        "/img/artists/richard/20221123_181950 (1).jpg",
        "/img/artists/richard/20221222_145858 (1).jpg",
        "/img/artists/richard/20230205_113241 (1).jpg",
        "/img/artists/richard/20230211_171025 (1).jpg",
        "/img/artists/richard/IMG_20210920_172519_594 (1).jpg",
        "/img/artists/richard/IMG_20211101_111640_546.jpg",
        "/img/artists/richard/IMG_20211116_160030_309.jpg",
        "/img/artists/richard/IMG_20220121_165446_069 (1).jpg",
        "/img/artists/richard/IMG_20220202_213729_654.jpg",
        "/img/artists/richard/IMG_20220510_220845_873.jpg",
        "/img/artists/richard/IMG_20220613_173519_811.jpg",
        "/img/artists/richard/IMG_20220831_203943_361.jpg",
        "/img/artists/richard/IMG_20220905_075633_297.jpg",
        "/img/artists/richard/IMG_20220920_171310_201.jpg",
        "/img/artists/richard/IMG_20220925_191410_708.jpg",
    ]

    return (
        <>
            <Head>
                <title>Tatouage Néo-Japonais à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Le style unique du tatouage néo-japonais à Strasbourg avec Richard. Avec son approche créative et innovante, Richard combine des éléments traditionnels japonais avec des techniques de tatouage modernes pour créer des tatouages uniques et élégants."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgRichard} alt={`photo de UncleHo`} title={`UNCLEHO`}
                      description={`Le tatouage néo-japonais, entre tradition et modernité à Strasbourg`}
                      link={`https://www.instagram.com/uncle_ho_mitchmalone/?hl=fr`} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Le tatouage néo-japonais est un style de tatouage qui mélange des éléments de la culture
                            japonaise traditionnelle et contemporaine. Le tatoueur néo-japonais s'approprie et
                            interprète le tatouage japonais traditionnel avec des codes résolument modernes. La
                            composition du tatouage intègre de nombreux détails ou références personnelles pour créer un
                            design unique. Faites réaliser votre <strong>tatouage néo-japonais à Strasbourg</strong>, au
                            salon de tatouage Neon Cobra près de la gare. Richard dit Uncle_ho, tatoueur au style
                            néo-japonais, vous accueille pour étudier votre projet. Richard s’est installé dans la
                            capitale européenne pour vous proposer des créations personnelles, vibrantes et colorées.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">L'héritage du style
                            japonais traditionnel dans le tatouage néo-japonais</h2>
                        <br/>
                        <p>Au Japon, le tatouage traditionnel est exécuté à la main avec des aiguilles fines, de l’encre
                            noire et des pigments de couleur. Aujourd'hui, <strong>le tatoueur utilise un
                                dermographe</strong>. Les techniques se sont enrichies, la palette de couleurs et les
                            techniques employées sont moins restrictives. Le <strong>tatouage néo-japonais reprend des
                                éléments de tatouages japonais traditionnels</strong>. Créatures mythologiques et
                            éléments se fondent dans un style qui s'affranchit des conventions tout en s’inspirant de
                            l’imagerie traditionnelle orientale.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage Japonais, des
                            éléments chargés de symboles et conventions repris par les tatoueurs</h2>
                        <br/>
                        <p>Dans un <strong>tatouage japonais traditionnel Irezumi</strong>, on n’assemble pas des motifs
                            au hasard. Les éléments ne doivent être associés que s’ils sont compatibles. Les Kumo,
                            (nuages) peuvent se déchaîner et s’associer au Raijin (tonnerre). Les images ont
                            toujours <strong>une symbolique bien précise</strong>, les mythes et les légendes sont
                            chargés de sens et créent une histoire complexe. Le tatouage néo-japonais reprend des
                            éléments de la mythologie asiatique. Chiens Fu, démons, Baku, masques Oni et Hannya,
                            végétaux ou animaux, un bestiaire épique popularisé par les maîtres de l’Ukiyo-e (estampes
                            japonaises de l’ère Edo).</p>
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
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">À Strasbourg, le tattoo
                            néo-japonais développe un style de tatouage personnel</h2>
                        <br/>
                        <p>Le tatouage Japonais est <strong>un style de tatouage très populaire</strong>. Il traverse
                            les modes grâce à son esthétique et son répertoire riche en symboles. Le tatouage
                            néo-japonais puise dans cette tradition.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage néo-japonais
                            offre des éléments graphiques détaillés</h3>
                        <br/>
                        <p>Les tatouages néo-japonais proposent <strong>une composition très détaillée</strong> avec une
                            ligne fine et précise et des ombrages tout en nuances. Les couleurs sont souvent vives et
                            ancrées. Les tatouages peuvent être de petite taille, comme un dessin simple sur le bras, ou
                            de grande taille, jusqu’à couvrir l’ensemble du dos ou le corps entier.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Le tatouage néo-japonais,
                            un art qui concilie l’histoire personnelle et celle du Japon</h2>
                        <br/>
                        <p>Le tatouage néo-japonais puise dans le tattoo Japonais, une grande variété de designs et de
                            styles. <strong>L’appropriation de cet art ancestral</strong>, permet d’inscrire l’histoire
                            intime de la personne dans son tatouage. Rien de plus approprié qu’une ville comme
                            Strasbourg, dont l'Histoire s’inscrit dans celle de l’Alsace et de la vallée du Rhin, pour
                            permettre l’expression de sa créativité.</p>
                    </div>
                </div>


            </div>

            <div className="flex flex-col py-12 bg-neutrals-1000 space-y-4">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">
                        <h2 className="font-poppins text-center text-neutrals-0 uppercase">Le tatouage néo-japonais au
                            croisement de l'art et de la culture urbaine</h2>
                        <br/>
                        <p>Les gravures Ukiyo-e étaient réalisées sur bois. Les tatoueurs traditionnels Irezumi ont
                            repris ces images et les ont transférées sur le corps humain. Ils ont ainsi créé un
                            répertoire iconographique profondément <strong>ancré dans l'héritage culturel des
                                Japonais</strong>. Le tatouage néo-japonais, s’inscrit dans cette tradition, tout en
                            ayant recours à une palette de couleurs vibrantes, des tons saturés et des effets de volume.
                            Carpes koï, tigres, dragons, geishas ou masques kabuki, intègrent le tatouage néo-japonais.
                            Les artistes tatoueurs donnent à ces images des nuances subtiles, des dégradés et une
                            palette de couleurs riches pour former <strong>un style résolument moderne</strong>. Le
                            corps offre un écrin qui permet la réalisation d’une grande fresque, un art que maîtrise
                            Richard au studio de tatouage et de piercing Neon Cobra à Strasbourg.</p>
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
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Du graff au dermographe,
                            Richard, un artiste tatoueur à Strasbourg</h2>
                        <br/>
                        <p>Richard dit Uncle_ho, possède une expérience de 20 années dans le Street art. Passer de
                            l'univers urbain à l’intimité du corps ne lui a pas posé de problème. Le <strong>tatouage
                                Japonais néo-traditionnel </strong>est proche du graffiti de par la composition, la
                            dynamique des couleurs et le travail sur différents plans. Un ensemble qui crée des
                            compositions riches en détails et en mouvements. Le <strong>tatoueur néo-japonais aime
                                s’exprimer sur de grandes surfaces</strong>. Ce style de tattoo permet de tatouer de
                            grands motifs à la construction complexe. Richard affirme qu'"un bon tatouage est lisible à
                            3 mètres, il doit être propre et tenir dans le temps". La street culture nourrit encore son
                            art tout comme les comics et les estampes. Ces multiples influences créent sa propre
                            identité graphique, colorée et équilibrée.</p>

                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Pourquoi confier son
                            tatouage néo-japonais à Richard chez Neon Cobra à Strasbourg ?</h2>
                        <br/>
                        <p>Préparez votre idée de tatouage néo-japonais. Recherchez des designs de tatouages dans le
                            style néo-japonais qui vous plaisent. Consultez <strong>les travaux d’<Link
                                href="https://www.instagram.com/uncle_ho_mitchmalone/?hl=fr"
                                className="hover:text-primary-500 ease-in-out duration-300">Uncle_ho</Link> sur sa page
                                Instagram</strong>. Si vous souhaitez débuter un tatouage néo-japonais, venez au shop
                            avec votre projet. Rencontrez Richard chez <strong>Neon Cobra, 8 rue de la course, tout près
                                de la gare à Strasbourg </strong>avec ou sans rendez-vous. Vous pourrez discuter de
                            votre idée de tatouage, vous assurer qu'elle est réalisable, déterminer le délai de
                            réalisation et obtenir un devis.</p>


                    </div>


                </div>
            </div>


        </>
    )
}