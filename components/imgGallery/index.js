import Image from 'next/image';
import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Link from "next/link";

export default function ImgGallery ({ images })  {
    return (
        <LightGallery
            mode="lg-fade"
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {images.map((image, index) => (
                <Link key={index} href={image}  data-lg-size="1406-1390" className="gallery-item">
                    <Image key={index} src={image} width={350}
                           height={350} alt={``} className="img-responsive" />
                </Link>
            ))}
        </LightGallery>
    );
};

