import { useEffect } from 'react';
import Image from 'next/image';
import lightGallery from 'lightgallery';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function LightGallery ({ images })  {
    useEffect(() => {
        lightGallery(document.getElementById('lightgallery'));
    }, []);


    return (
        <div id="lightgallery">
            {images.map((image, index) => (
                <a key={index} href={image}>
                    <Image src={image} width={350}
                           height={350} alt={`Image ${index}`} />
                </a>
            ))}
        </div>
    );
};

