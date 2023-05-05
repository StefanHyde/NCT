import Head from "next/head";
import Hero from "@/components/hero";
import actuCover from "../../public/img/actualites/NCT-2.jpg";
import Image from "next/image";
import Link from "next/link";


export default function Bertrand() {

    return (
        <>
            <Head>
                <title> Actualités salon de tatouage à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Neon Cobra, votre salon de tatouage Strasbourgeois pour obtenir un tatouage unique et de qualité. Toutes les actualités de notre salon de tatouage, et du monde du tatouage. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={actuCover} alt={`image du salon de tatouage`} title={`NOS ACTUALITÉS`}
                      description={`Toutes les actulités et nouveautés de notre salon de tatouage`}
                      place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-12">
                <h2 className="p-6 font-scified text-3xl font-normal text-neutrals-1000 text-center">Nos conseils pour
                    choisir un bon tatoueur</h2>
                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p><strong>Choisir un bon tatoueur</strong>, c'est avant tout choisir un artiste dont le style
                            vous correspond. D'autres considérations sont à prendre en compte, comme l'hygiène du studio
                            de tatouage et le feeling avec le tatoueur. Prenez le temps de trouver l'artiste capable de
                            tatouer votre peau dans des conditions optimales d'hygiène et de confort.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Comment distinguer les
                            mauvais tatoueurs des bons artistes ?</h2>
                        <br/>
                        <p>Pour un premier projet de tatouage, la <strong>recherche d'un bon tatoueur</strong> n'est pas
                            évidente. Si vous ne profitez pas du bouche-à-oreille pour vous conseiller un shop en
                            particulier, difficile de savoir quel tatoueur est le bon. Votre manque d'expérience dans le
                            monde du tattoo ou votre impatience vous font choisir la mauvaise personne. Pour que votre
                            premier tatouage soit à la hauteur de votre attente, tournez-vous vers un tatoueur
                            professionnel.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-39.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>


                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le matériel de tatouage
                            utilisé par un tatoueur professionnel</h3>
                        <br/>
                        <p>Le <strong>matériel d'un tatoueur</strong> est à usage unique, sauf les machines (gants,
                            aiguilles, buses, caps d'encre, etc.). Vous pouvez être frappé en entrant dans un studio de
                            tatouage par l'omniprésence de film alimentaire. Le tatoueur en est un gros consommateur.
                            Tout le matériel à proximité du fauteuil de tatouage est emballé par ce film : luminaire,
                            câble électrique de la machine, fauteuil, plateau, etc. Le tatoueur crée ainsi un champ à
                            usage unique. Il le change après chaque client pour éviter tout risque infectieux.</p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">La réglementation au
                            service de l'art du tatouage</h3>
                        <br/>
                        <p>Un mauvais tatoueur est prêt à tatouer n'importe qui. Si vous rencontrez un tatoueur capable
                            de tatouer un mineur sans autorisation parentale, fuyez. Il existe des règles dans le monde
                            du tatouage pour encadrer notre activité. Chaque tatoueur doit, par exemple, faire signer
                            une décharge à ses clients pour le <strong>consentement du tatouage</strong>. Nous devons
                            également vous informer des risques auxquels un tattoo vous expose. Enfin, à la fin de votre
                            séance, chaque tatoueur vous informe des <strong>précautions à prendre pour la
                                cicatrisation </strong>de votre tatouage.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-15.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>

                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Rencontrez les tatoueurs
                            en salon ou en studio</h3>
                        <br/>
                        <p>Pour choisir un bon tatoueur, dépassez les écrans et les réseaux sociaux pour aller à la
                            rencontre des artistes. Participez à des salons de tatouage ou rendez-vous directement au
                            shop du ou des tatoueurs. C'est l'occasion de <strong>discuter de votre projet</strong>, de
                            juger l'ambiance d'un studio et de voir si le feeling passe entre vous et votre futur
                            tatoueur.</p>
                        <br/>
                        <p>Un artiste peut être très bon, réaliser des tatouages de qualité, mais vous pouvez ne pas
                            vous entendre. Choisir un bon tatoueur, c'est trouver la bonne personne qui comprend votre
                            projet et est motivée pour le tatouer. Ce contact est essentiel pour garantir un parfait
                            échange.</p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Le choix du tatoueur en
                            fonction du prix des tatouages</h3>
                        <br/>
                        <p>Choisir un bon tatoueur ne se fait pas en fonction du <strong>prix des tatouages</strong>. Un
                            mauvais tatoueur peut pratiquer des tarifs excessifs alors qu'un très bon tatoueur peut
                            demander un prix bas sans affecter la qualité de son travail. Chaque tatoueur est libre de
                            fixer ses tarifs comme il l'entend.</p>
                        <br/>
                        <p>Le tarif d'un tatouage dépend de la complexité du projet, de sa taille, ou encore de la
                            partie du corps concernée, mais aussi de la notoriété de l'artiste. Il est donc difficile de
                            comparer les tatoueurs sur une question de tarif.</p>
                        <p>Cependant, demandez au tatoueur le <strong>prix de la sortie d'aiguille</strong>. Il se situe
                            en moyenne entre 80 et 100 € dans les studios de tatouage en France. Un prix plus bas doit
                            vous mettre la puce à l'oreille : le tatoueur a besoin d'attirer les clients. Ce n'est
                            généralement pas bon signe si le tatoueur manque d'activité.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-68.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>

                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Choisir un spécialiste
                            dans son style de tatouage</h2>
                        <br/>
                        <p>Vous rêvez d'un tribal sur le dos ? Vous souhaitez plutôt un <a href="#geometrique">tattoo
                            géométrique</a> ou des motifs floraux sur votre corps ? Vous envisagez un <Link
                            href={"artists/jb"} className="font-bold hover:text-primary-500 ease-in-out duration-300">tatouage
                            japonais traditionnel</Link> à la manière d'un Yakuza ?
                            Dans le monde du tatouage, il existe autant d'artistes que de styles différents. Pour être
                            sûr d'obtenir le tatouage de vos rêves, orientez-vous vers des <strong>tatoueurs
                                spécialistes de leur genre</strong></p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Tattoo en couleurs ou noir
                            et gris ?</h3>
                        <br/>
                        <p>Certains tatoueurs se spécialisent dans les <strong>tatouages en couleurs</strong>, d'autres
                            préfèrent ne travailler que les encres noires. Un bon tatoueur peut refuser votre projet de
                            carpe koï en couleur si son art se situe dans le réalisme animalier en noir et gris. Pour
                            éviter de perdre du temps, consultez les profils des tatoueurs sur les réseaux sociaux,
                            comme Instagram. Les artistes y mettent en avant leurs flashs disponibles ainsi que les
                            projets clients. Vous pouvez également leur envoyer un message pour vous assurer de leur
                            style.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Les styles de tatouages
                            réalisés par les tatoueurs</h3>
                        <br/>
                        <p>Pour choisir un bon tatoueur, orientez-vous vers un artiste qui réalise le style que vous
                            souhaitez. Vous pouvez désirer un <Link
                                href={"artists/richard"}
                                className="font-bold hover:text-primary-500 ease-in-out duration-300">tatouage
                                neo japonais</Link> dans le
                            dos ou, au contraire, préférez un <Link
                                href={"artists/eric"}
                                className="font-bold hover:text-primary-500 ease-in-out duration-300">tatouage
                                graphique</Link> plus
                            minimaliste sur l'avant-bras. Le <strong>book des artistes</strong> est un guide précieux
                            pour vous montrer le travail du tatoueur.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">La technique de tatouage
                            proposé par l'artiste</h2>
                        <br/>
                        <p>Les styles des tatoueurs ne concernent pas uniquement les dessins. La <strong>technique de
                            tatouage</strong> devient également une spécialité. Le <Link
                            href={"artists/bertrand"}
                            className="font-bold hover:text-primary-500 ease-in-out duration-300">handpoke</Link>, par
                            exemple, est réalisé par des tatoueurs n'utilisant pas de dermographe. Les motifs sont
                            réalisés point par point, à la main. Ce style n'est pas à confondre avec le <Link
                                href={"artists/eric"}
                                className="font-bold hover:text-primary-500 ease-in-out duration-300">Dot Work</Link> qui nécessite une machine.</p>
                        <br/>
                        <p>Avant d'encrer votre peau par un tatoueur, laissez mûrir votre projet de tatouage. Si vous
                            cherchez des conseils ou des idées de tattoos, venez rencontrer nos artistes dans notre <Link
                                href={"/"}
                                className="font-bold hover:text-primary-500 ease-in-out duration-300">salon de tatouage à Strasbourg</Link>.</p>
                    </div>
                </div>


            </div>


        </>
)
}