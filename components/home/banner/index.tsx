"use client";

import Image from "next/image";
import Slider from "react-slick";
import "./style.scoped.scss";

interface IBannerProps {
  data: IMemberNonReseller[];
}

const Banner = ({ data }: IBannerProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: "slick-dots",
    activeDotClass: "slick-active",
  };

  return (
    <section className="banner-wrapper">
      <Slider {...settings}>
        {data?.map((item: IMemberNonReseller) => (
          <Image
            key={item.id}
            src={item.image}
            alt={`banner-${item.name}`}
            width={480}
            height={480}
            loading="eager"
          />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
