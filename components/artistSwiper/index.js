import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import {GrInstagram} from "react-icons/gr";
import Link from "next/link";

import imgEric from '@/public/img/artists/eric/IMG_21581.JPG';
import imgRichard from '@/public/img/artists/richard/IMG_20220925_191410_708.jpg'

export default function artistSwiper() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <div className="flex flex-col xl:flex-row items-center gap-16">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-neutrals-0 uppercase">L’art géométrique d’Éric, un tatouage graphique ou
                            dotwork made in Strasbourg</h3>
                        <Link href="https://www.instagram.com/eric_o_"><GrInstagram
                            className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300"/></Link>
                        <p>Éric s’intéresse à l’univers du tatouage depuis plus de 20 ans. C’est en 2009 qu’il commence
                            sa carrière de tatoueur avec comme volonté de proposer quelque chose de fondamentalement
                            différent.
                        </p>
                        <p>Fort d’une solide culture du tatouage et de nombreux voyages, il s’oriente vers le <strong>style
                            géométrique abstrait</strong> aux motifs modulables à l’infini. Pour composer ses systèmes
                            visuels, Éric puise dans <strong>les différents styles et codes du tatouage
                                traditionnel</strong> qu’il réinterprète dans un esprit <strong>surréaliste et
                                minimaliste</strong>. Si ses flashs sont pensés comme des pièces “prêtes à porter”, il
                            apprécie également de composer des tatouages sur mesure, à la demande du client.</p>
                        <p><i>“Un bon tatoueur doit répondre à la demande du client et même aller au-delà.”</i></p>
                    </div>

                    <Image src={imgEric} width={350}
                           height={350} alt={'tattoo Eric'} />

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-neutrals-0 uppercase">Richard, un artiste tatoueur au style néojaponais à Strasbourg</h3>
                        <Link href="https://www.instagram.com/uncle_ho_mitchmalone/?hl=fr"><GrInstagram
                            className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300"/></Link>
                        <p>Le tatouage néojaponais s’inspire du tatouage Japonais traditionnel. Il en reprend les codes, dans ses dessins mais s’éloigne de la symbolique pour des <strong>motifs</strong> <strong>plus personnels</strong>, plus lisibles en France. Il puise son inspiration dans le tatouage old school Japonais, mais s’en démarque par des lignes et un ancrage plus prononcé.</p>
                        <p>Après avoir passé 20 ans à dessiner sur les murs, Richard décide de changer de support et passe sur la peau. Il commence sa carrière de tatoueur en 2013 avec comme style de prédilection le <strong>tatouage japonais néotraditionnel</strong>, un genre proche du graffiti de par sa dynamique, et qui permet à Richard de travailler en couleurs et sur plusieurs plans pour des compositions riches en détails et en mouvements.</p>
                        <p>Graffiti oblige, Richard affectionne tout particulièrement <strong>tatouer de grands motifs</strong>, à la construction complexe, mais apprécie également les flashs en “one shot” et le plaisir d’une séance courte et gratifiante. Estampes, comics, livres d’art, et bien sûr street culture, Richard se nourrit de multiples influences pour créer sa propre identité graphique, colorée et équilibrée.</p>
                        <p><i>“Un bon tatouage est lisible à 3 mètres, il doit être propre et tenir dans le temps.”</i></p>
                    </div>

                    <Image src={imgRichard} width={350}
                           height={350} alt={'tattoo Eric'} />

                </div>
            </SwiperSlide>


        </Swiper>
    )
}