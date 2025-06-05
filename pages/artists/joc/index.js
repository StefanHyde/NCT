import Head from "next/head";
import Hero from "@/components/hero";
import ImgGallery from "@/components/imgGallery";
import imgJoc from "../../../public/img/artists/joc/NCT-Joc.jpg";


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
                <title>JOC | Neon Cobra 🐍</title>
                <meta name="description"
                    content="Lorem ipsum" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <div className="mt-18">
                <Hero src={imgJoc} alt={`photo de Joc`} title={`JOC`}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
                    link={`https://www.instagram.com/joc.tattooer/?hl=fr`} mail={'mailto:joc.tattooer@gmail.com'} place={`xl:ml-40`}
                />
            </div>

            <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                <div className="flex justify-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <p>Vestibulum semper facilisis ultrices. Vestibulum id fringilla leo. Duis feugiat orci sed eros egestas, a dapibus nulla vestibulum. Vestibulum fringilla sagittis sem nec cursus. Curabitur sagittis maximus elementum. Donec laoreet id metus a congue. Sed porttitor magna efficitur, tristique sapien eget, accumsan risus. Nam sollicitudin eu augue sollicitudin gravida. Suspendisse sit amet est ut urna dignissim varius vel vitae felis. Aenean placerat mattis justo, et dictum turpis bibendum sit amet. Fusce sit amet turpis accumsan, pharetra velit vel, luctus lectus. Etiam nec libero sit amet sapien elementum faucibus a condimentum lectus. Quisque tempus dictum congue. Maecenas ultricies vehicula luctus. Sed eu dictum diam.</p>
                    </div>



                </div>
                <div className="flex flex-col items-center">

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Lorem ipsum</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor nec risus commodo dapibus. Sed placerat lorem lorem, a mattis arcu condimentum eget. Vestibulum finibus quam sit amet aliquam commodo. Etiam urna sem, ultrices quis ex id, pulvinar tempus mi. Phasellus tempor nibh ac lorem tristique malesuada. Aenean imperdiet quis dolor sed egestas. Phasellus elit augue, posuere vel efficitur a, vestibulum ac enim.</p>
                    </div>

                    <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                        <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Lorem ipsum</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor nec risus commodo dapibus. Sed placerat lorem lorem, a mattis arcu condimentum eget. Vestibulum finibus quam sit amet aliquam commodo. Etiam urna sem, ultrices quis ex id, pulvinar tempus mi. Phasellus tempor nibh ac lorem tristique malesuada. Aenean imperdiet quis dolor sed egestas. Phasellus elit augue, posuere vel efficitur a, vestibulum ac enim.</p>

                    </div>
                </div>


                <div className="flex flex-col items-center py-12 bg-neutrals-1000 space-y-12">
                    <h3 className="font-scified text-3xl font-normal text-neutrals-0 text-center">REALISATIONS</h3>
                    <ImgGallery images={images} imageAlt={('')} />
                </div>

                <div className="flex flex-col py-12 bg-neutrals-0 space-y-4">
                    <div className="flex justify-center">

                        <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-center text-neutrals-1000">
                            <h3 className="font-poppins text-center text-neutrals-1000 uppercase">Lorem ipsum</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor nec risus commodo dapibus. Sed placerat lorem lorem, a mattis arcu condimentum eget. Vestibulum finibus quam sit amet aliquam commodo. Etiam urna sem, ultrices quis ex id, pulvinar tempus mi. Phasellus tempor nibh ac lorem tristique malesuada. Aenean imperdiet quis dolor sed egestas. Phasellus elit augue, posuere vel efficitur a, vestibulum ac enim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}