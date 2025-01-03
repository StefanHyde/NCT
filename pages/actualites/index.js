import Head from "next/head";
import Hero from "@/components/hero";
import actuCover from "../../public/img/actualites/NCT-2.jpg";
import Image from "next/image";
import Link from "next/link";


export default function Blog() {

    return (
        <>
            <Head>
                <title> Actualités salon de tatouage à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Neon Cobra, votre salon de tatouage strasbourgeois pour obtenir un tatouage unique et de qualité. Toutes les actualités de notre salon de tatouage, et du monde du tatouage. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={actuCover} alt={`image du salon de tatouage`} title={`NOS ACTUALITÉS`}
                      description={`Toutes les actualités et nouveautés de notre salon de tatouage`}
                      place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-12">
                <h3 className="p-6 font-scified text-3xl font-normal text-neutrals-1000 text-center">Quelles sont les
                    étapes à suivre lorsque l’on veut se faire tatouer ?</h3>
                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Vous avez envie de prendre rendez-vous pour vous faire tatouer mais vous ne savez pas comment
                            vous y prendre ? Vous voulez des renseignements mais ne savez pas exactement quelles
                            questions poser ? Laissez-nous vous aider ! Contacter son artiste est une étape importante,
                            voici des conseils pour optimiser les échanges et bien préparer sa future séance de tatouage
                            chez Neon Cobra.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Bien choisir son tatoueur
                            : La première étape essentielle</h4>
                        <br/>
                        <p>Bien choisir son tatoueur est évidemment la première étape pour s’assurer de la bonne
                            réalisation d’un tatouage. Sur notre site, parcourez la page du tatoueur que vous avez
                            choisi pour voir si le style mis en avant par les photos correspond à votre projet. N'ayez
                            crainte si vous ne trouvez pas exactement le tatouage que vous avez en tête, car un
                            artiste-tatoueur va souvent chercher à mettre en valeur son travail personnel, mais il est
                            également capable de réaliser d’autres demandes. N’hésitez pas à lui poser des questions! Si
                            vous n’êtes pas encore fixé(e) sur un tatoueur au sein de Neon Cobra, nous vous orienterons
                            vers celui dont le style est le plus approprié à votre projet.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-39.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>


                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Comment contacter votre
                            artiste tatoueur?</h4>
                        <br/>
                        <p>Contactez votre artiste par le moyen de votre choix. Les possibilités sont multiples ! Vous
                            pouvez nous envoyer un email groupé à <Link href={"mailto:neoncobratattoo@gmail.com"}
                                                                        className="hover:text-primary-500 ease-in-out duration-300">neoncobratattoo@gmail.com</Link><br/> Les
                            envies spontanées
                            peuvent être satisfaites par téléphone au 0392012251, et parfois il est même possible de se
                            faire tatouer le jour-même. Enfin, les réseaux sociaux sont aussi une option ; votre
                            tatoueur favori vous répondra en message privé. Les liens vers les profils des tatoueurs du
                            studio se trouvent sur les pages <Link href={"/#artists"}
                                                                   className="hover:text-primary-500 ease-in-out duration-300"> Artistes</Link>.
                        </p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Rencontrer votre tatoueur
                            en personne : Les conventions</h4>
                        <br/>
                        <p>Les conventions de tatouage représentent une excellente opportunité de rencontrer votre
                            tatoueur. L’équipe de Neon Cobra participe à de nombreuses conventions en France et à
                            l’étranger. Venez nous rencontrer à notre stand et discuter de vos projets de tatouage !</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-15.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>

                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Préparer votre projet :
                            Clarifier vos idées</h4>
                        <br/>
                        <p>Après avoir sélectionné et contacté votre tatoueur, il est important d'expliquer votre projet
                            de manière concise pour éviter toute confusion. Cela permet également à l’artiste d’avoir
                            une marge de création pour concevoir un motif unique pour vous. Il est utile d'accompagner
                            votre demande d’une sélection d’images. Souvent, nous vous invitons à passer au studio pour
                            une consultation, durant laquelle nous pourrons discuter de votre projet avant de planifier
                            la séance de tatouage.</p>
                        <br/>
                        <p>Indiquez également la taille approximative de votre tatouage ainsi que l’emplacement souhaité
                            sur votre corps. Une photo de la zone à tatouer est un bon moyen de montrer à votre tatoueur
                            ce dont vous parlez, lui permettant de prendre en compte la présence d’autres tatouages ou
                            de cicatrices, et d'adapter le dessin en conséquence.</p>
                        <br/>
                        <p>Précisez si vous désirez un tatouage en couleur ou en noir et gris. Si un motif vous plaît
                            mais que les couleurs ne correspondent pas à vos préférences, il est possible de le modifier
                            selon vos goûts.</p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Disponibilités et
                            coordonnées : Ne les oubliez pas!</h4>
                        <br/>
                        <p>N’oubliez pas de nous communiquer vos disponibilités ainsi que votre numéro de téléphone,
                            afin que nous puissions vous contacter en cas de créneaux disponibles rapidement. Si vous ne
                            pouvez pas vous déplacer pour une consultation, nous pouvons également communiquer par
                            téléphone, visio, ou e-mail.</p>

                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={"/img/actualites/NCT-68.jpg"} alt={"image du shop"} width={800} height={800}/>
                </div>

                <div className="flex flex-col  items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Soyez conscient(e) de
                            votre budget</h4>
                        <br/>
                        <p>Donnez-nous une idée du budget dont vous disposez pour votre projet. Chaque tatoueur évalue
                            le coût d’un tatouage en fonction de sa taille, de son emplacement, du nombre de séances
                            nécessaires et de la technique employée.</p>
                    </div>
                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Règlement et acompte : Ce
                            que vous devez savoir</h4>
                        <br/>
                        <p>Sachez qu'un acompte non remboursable sera demandé lorsque vous convenez de la séance de
                            tatouage avec votre artiste. Cet acompte couvre le travail de préparation du motif ainsi que
                            le temps réservé pour vous. Il est déduit du prix final, mais en cas d’annulation moins de
                            48 heures avant le rendez-vous, il ne sera pas remboursé. Le respect de cet engagement est
                            apprécié par votre tatoueur.</p>
                        <br/>
                        <p>Le règlement de l'acompte et des séances doit être effectué en espèces. Si la distance ne
                            permet pas de passer au studio pour déposer l’acompte, un arrangement peut être possible par
                            virement bancaire ou équivalent (Paypal).</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h4 className="font-poppins text-center text-neutrals-1000 uppercase">Profitez de l'expérience
                        </h4>
                        <br/>
                        <p>Une séance de tatouage est un moment unique. En suivant ces quelques conseils, vous pourrez
                            en profiter pleinement. Au plaisir de vous accueillir chez Neon Cobra ! :)</p>
                    </div>
                </div>


            </div>


        </>
    )
}