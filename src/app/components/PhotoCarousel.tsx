import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../imports/54920604995_1016644994_k.jpg';
import img2 from '../../imports/54919438822_5568d34139_k.jpg';
import img3 from '../../imports/54920459711_e2836a2af5_k.jpg';
import img4 from '../../imports/54920605020_0b768f1a9c_k.jpg';
import img5 from '../../imports/54919438752_b58b73a094_k.jpg';

const photos = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
];

export function PhotoCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="relative w-full h-full photo-carousel">
      <style dangerouslySetInnerHTML={{
        __html: `
          .photo-carousel .slick-dots {
            bottom: 20px;
          }
          .photo-carousel .slick-dots li button:before {
            color: #5eccca;
            font-size: 10px;
          }
          .photo-carousel .slick-dots li.slick-active button:before {
            color: #fd8106;
          }
        `
      }} />

      <Slider ref={sliderRef} {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="outline-none">
            <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={photo.src}
                alt={`Reto Zapopan evento ${photo.id}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
