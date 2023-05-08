import Head from 'next/head'
import Hero from '@/components/hero'
import swiperHome from "@/components/swiper";
import artistSwiper from "@/components/artistSwiper";
import artistGrid from "@/components/artistGrid";
import Contact from "@/components/contact";
import imgBanner from '../public/img/NCT_banner_home.jpg';

export default function Home() {
    return (
        <>
            <Head>
                <title>Salon de tatouage à Strasbourg | Neon Cobra 🐍</title>
                <meta name="description"
                      content="Neon Cobra, votre salon de tatouage Strasbourgeois pour obtenir un tatouage unique et de qualité. Avec une équipe de tatoueurs talentueux et expérimentés, chaque tatouage est conçu sur mesure pour s'adapter parfaitement à votre corps et refléter votre personnalité."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>


            <div className="mt-18">
                <Hero src={imgBanner} alt={`salon de tattoo neon cobra tattoo`} title={`NEON COBRA TATTOO`}
                      description={`Salon de tatouage à Strasbourg pour toutes vos envies`} place={`xl:ml-40`}/>
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-12">
                <h2 className="font-scified text-3xl font-normal text-neutrals-1000 text-center">LE SHOP</h2>
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>C’est au détour du quai Kléber, à la hauteur du Pont Kuss au centre de Strasbourg, que le
                            studio de tatouage Neon Cobra a élu domicile.<br/>
                            Passionnée et minutieuse, <strong>l’équipe de tatoueurs strasbourgeois de Neon
                                Cobra</strong> vous propose différents univers graphiques. Style géométrique, japonais
                            traditionnel ou neo japonais ou encore tattoo Handpoke, chaque tatoueur s'exprime en
                            fonction de sa personnalité. La technique est <strong>parfaitement maîtrisée par chaque
                                artiste. </strong>
                            Découvrez Neon Cobra, un tattoo shop de <strong>référence en Alsace</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {swiperHome()}
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-12">
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">4 artistes passionnés,
                            réunis dans un tattoo shop unique à Strasbourg</h2>
                        <br/>
                        <p>Notre salon de tatouage strasbourgeois rassemble <strong>4 personnalités du monde du
                            tattoo</strong>. Éric, Richard, Jean-Baptiste et Bertrand. Nos quatre <strong>artistes
                            tatoueurs</strong> ont choisi d’unir leurs talents au sein du <strong>studio de tatouage
                            Neon Cobra</strong>. </p>
                        <p>Situé près de la Maison de l'Amérique Latine à Strasbourg, notre studio de tatouage réunit
                            différents styles. L’équipe vous accueille dans un espace agréable et soigné. Nos <strong>tatoueurs
                                sont à l’écoute de leurs clients </strong>et respectueux de leurs désirs.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Les tattoos proposés chez
                            Neon Cobra, salon de tatouage à Strasbourg</h2>
                        <br/>
                        <p>Japonais traditionnel, néo japonais, néo traditionnel, géométrique ou encore dotwork et
                            handpoke, notre tattoo shop propose une multitude d’univers graphiques et de techniques ; un
                            large éventail de tatouages tous réalisés par <strong>des professionnels renommés dans leur
                                domaine</strong>.</p>
                        <p>Du grand projet pour le dos, au <strong>petit tatouage flash</strong> choisi sur place, en
                            passant par la manchette dessinée sur mesure, tous les projets sont traités avec
                            le <strong>même niveau d'exigence</strong>, un grand sérieux et un respect total de
                            l’intégrité physique des clients.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h2 className="font-poppins text-center text-neutrals-1000 uppercase">Dans notre studio Neon
                            Cobra à Strasbourg, chaque tatouage est unique, son prix aussi</h2>
                        <br/>
                        <p>Le <strong>prix de chaque tatouage</strong> dépend bien sûr de sa taille, du volume et du
                            temps passé. Nous aimons discuter et faire mûrir un projet avec nos clients. Au studio Neon
                            Cobra, nous vous conseillons sur le choix des motifs en fonction de l'endroit du corps
                            choisi et le placement du tatouage. Prenez le temps de <strong>découvrir les réalisations de
                                nos artistes</strong> avant de faire votre choix.</p>
                        <p>Chaque tatoueur est joignable par e-mail, par téléphone ou via Instagram afin de discuter
                            d’un projet. Il est également possible de <strong>passer directement au studio</strong> et
                            cela sans rendez-vous.</p>
                        <p>Votre santé est notre priorité, l’<strong>hygiène de notre salon de tatouage est
                            irréprochable</strong>. Les instruments sont stériles et à usage unique. Le salon, les
                            postes de travail sont nettoyés à chaque séance.</p>
                    </div>


                </div>
            </div>

            <div id={"artists"} className="flex flex-col items-center py-12 bg-neutrals-1000 space-y-12">
                <h2 className="font-scified text-3xl font-normal text-neutrals-0 text-center">LES ARTISTES</h2>
                <div className="p-8 w-auto">
                    {artistGrid()}
                </div>

                <div className="p-12 w-full 2xl:w-3/4 text-neutrals-0">
                    {artistSwiper()}
                </div>
            </div>

            <div id={"contact"} className="flex flex-col py-12 bg-neutrals-0 space-y-8">
                <h2 className="font-scified text-3xl font-normal text-neutrals-1000 text-center">NOUS CONTACTER</h2>

                <div className="flex justify-center">
                    <p className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">Une demande
                        de renseignement concernant un futur tatouage ? Ou bien une
                        prise de RDV ? <br/>
                        Vous pouvez également nous contacter via le formulaire ci-dessous.
                    </p>
                </div>
                
                <div className="flex justify-center">
                    {Contact()}
                </div>


            </div>

            <div className="flex flex-col bg-neutrals-1000 ">
                <div className="flex flex-col items-center space-y-8 py-12 font-poppins text-center text-neutrals-0">
                    <h2 className="font-poppins text-center text-neutrals-0 uppercase">Venir au salon de tatouage Neon
                        Cobra à Strasbourg</h2>
                    <p className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-0">Le tatouage,
                        c’est avant tout une rencontre. Notre <strong>salon de tatouage est situé 8, rue de la Course à
                            Strasbourg</strong>. La rue de la Course s’étend entre le boulevard de Nancy et le quai
                        Saint-Jean à Strasbourg. Le parking Zenpark Strasbourg est situé à 50 m, rue du
                        Faubourg-National. Nous sommes <strong>à 350 mètres de la Gare de Strasbourg-Ville</strong>, à 5
                        minutes à pied. Depuis la Place de la Gare de Strasbourg, prendre la rue du Maire Kuss.
                        Descendre jusqu’au Quai St Jean. À l’angle de l’hôtel Colmar, tourner à droite, rue de la
                        Course, vous êtes arrivés. <br />
                    Référence en Alsace, le <strong>studio de tatouage Neon Cobra</strong> répond à toutes les
                        demandes, dans une ambiance chaleureuse et bienveillante.</p>
                </div>
                <div className="w-full">
                    <iframe className="w-full p-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.378598043106!2d7.737650052244467!3d48.5834493456563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c94ea5f4aef1%3A0x23baefb0375e3c62!2sNEON%20COBRA%20TATTOO!5e0!3m2!1sfr!2sfr!4v1683565791129!5m2!1sfr!2sfr"
                        width="1440" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>



        </>
    )
}
