import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";

import imgEric from "@/public/img/artists/eric/IMG_21581.jpg";
import imgRichard from "@/public/img/artists/richard/IMG_20220925_191410_708.jpg";
import imgJb from "@/public/img/artists/jb/jbdragon.jpg";

export default function artistSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 10000 }}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="flex flex-col xl:flex-row  items-center gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">
              L’art géométrique d’Erico, un tatouage graphique ou dotwork made in Strasbourg
            </h4>
            <Link href="https://www.instagram.com/eric_o_">
              <GrInstagram className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300" />
            </Link>
            <p>
              Éric s’intéresse à l’univers du tatouage depuis plus de 20 ans. C’est en 2009 qu’il commence sa carrière
              de tatoueur avec comme volonté de proposer quelque chose de fondamentalement différent.
            </p>
            <p>
              Fort d’une solide culture du tatouage et de nombreux voyages, il s’oriente vers le{" "}
              <strong>style géométrique abstrait</strong> aux motifs modulables à l’infini. Pour composer ses systèmes
              visuels, Éric puise dans <strong>les différents styles et codes du tatouage traditionnel</strong> qu’il
              réinterprète dans un esprit <strong>surréaliste et minimaliste</strong>. Si ses flashs sont pensés comme
              des pièces “prêtes à porter”, il apprécie également de composer des tatouages sur mesure, à la demande du
              client.
            </p>
            <p>
              <i>“Un bon tatoueur doit répondre à la demande du client et même aller au-delà.”</i>
            </p>
          </div>

          <Image src={imgEric} width={350} height={350} className="h-[350px] w-[350px]" alt={"tattoo Eric"} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">UncleHo, un artiste tatoueur au style néo-japonais à Strasbourg</h4>
            <Link href="https://www.instagram.com/uncle_ho_mitchmalone/?hl=fr">
              <GrInstagram className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300" />
            </Link>
            <p>
              Le tatouage néo-japonais s’inspire du tatouage japonais traditionnel. Il en reprend les codes, dans ses
              dessins mais s’éloigne de la symbolique pour des <strong>motifs</strong> <strong>plus personnels</strong>,
              plus lisibles en France. Il puise son inspiration dans le tatouage old school japonais, mais s’en démarque
              par des lignes et un ancrage plus prononcé.
            </p>
            <p>
              Après avoir passé 20 ans à dessiner sur les murs, Richard décide de changer de support et passe sur la
              peau. Il commence sa carrière de tatoueur en 2013 avec comme style de prédilection le{" "}
              <strong>tatouage japonais néo-traditionnel</strong>, un genre proche du graffiti de par sa dynamique, et
              qui permet à Richard de travailler en couleurs et sur plusieurs plans pour des compositions riches en
              détails et en mouvements.
            </p>
            <p>
              Graffiti oblige, Richard affectionne tout particulièrement <strong>tatouer de grands motifs</strong>, à la
              construction complexe, mais apprécie également les flashs en “one shot” et le plaisir d’une séance courte
              et gratifiante. Estampes, comics, livres d’art, et bien sûr street culture, Richard se nourrit de
              multiples influences pour créer sa propre identité graphique, colorée et équilibrée.
            </p>
            <p>
              <i>“Un bon tatouage est lisible à 3 mètres, il doit être propre et tenir dans le temps.”</i>
            </p>
          </div>

          <Image src={imgRichard} width={350} height={350} className="h-[350px] w-[350px]" alt={"tattoo Richard"} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase">JBMaglia, un tatoueur dans le style japonais traditionnel à Strasbourg</h4>
            <Link href="https://www.instagram.com/jbmaglia/?hl=fr">
              <GrInstagram className="text-2xl text-neutrals-0 hover:text-primary-500 ease-in-out duration-300" />
            </Link>
            <p>
              Dragon, tigre, carpe et chrysanthème, pour Jean-Baptiste, le tatouage se décline dans un{" "}
              <strong>style japonais traditionnel</strong>. Sans être rigoriste, il compulse estampes, peintures et
              bandes dessinées pour proposer des <strong>motifs occidentalisés</strong>, faciles à s’approprier. Si sa
              préférence va aux grandes pièces, son <strong>expérience en street shop</strong> le rend capable de
              répondre à tous les types de flashs.{" "}
            </p>
            <p>
              Passionné par le dessin et le tatouage depuis l’adolescence, Jean-Baptiste a “toujours eu cela en tête”,
              et pratique le tatouage depuis 2009. Au plus proche de la demande de ses clients, il sait composer des
              tatouages qui leur correspondent, <strong>puissants et authentiques</strong>.
            </p>
            <p>
              <i>“Il faut savoir rester fidèle à l’idée du client, la retranscrire avec précision.”</i>
            </p>
          </div>

          <Image src={imgJb} width={350} height={350} className="h-[350px] w-[350px]" alt={"tattoo JB"} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
