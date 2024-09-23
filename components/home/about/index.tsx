"use client";

import { NextComponentType } from "next";
import Image from "next/image";
import Slider from "react-slick";
import "./style.scoped.scss";

const About: NextComponentType = (): JSX.Element => {
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

  const aboutData = [
    {
      id: 1,
      desc: "Dengan menjadi Reseller, tentunya Anda akan mendapatkan harga reseller yang jauh lebih murah dari harga retail dengan potongan harga hingga 50%.",
      img: "/images/vector/5bb826b8c819570232464218ee6628c9.svg",
      alt: "about 1",
    },
    {
      id: 2,
      desc: "Setiap Pembelanjaan, anda bisa mendapatkan point. Point ini dapat anda tukarkan dengan berbagai reward menarik.",
      img: "/images/vector/20fb1fd356f78e7fd0b332e53e7f9794.svg",
      alt: "about 2",
    },
    {
      id: 3,
      desc: "Berbagai hadiah seperti produk, voucher, handphone, motor, mobil hingga umroh bisa Anda dapatkan langsung tanpa diundi di setiap kesempatan.",
      img: "/images/vector/59c4ddd5a12d45d582cbd096d871f716.svg",
      alt: "about 2",
    },
    {
      id: 4,
      desc: "Tidak ada target, tidak ada tutup poin, tidak perlu repot rekrut orang. Saatnya Anda memiliki dan merintis bisnis yang mudah dan menghasilkan.",
      img: "/images/vector/a23828891b11a52ba7665657eed68611.svg",
      alt: "about 2",
    },
    {
      id: 5,
      desc: "Cara mudah dan murah dengan titip dropship bersama para reseller yang tersebar di seluruh Indonesia. Serta nikmati juga fitur gratis ongkir dengan syarat dan ketentuan yang berlaku.",
      img: "/images/vector/e66037d2d97e18625950d33af60c61e9.svg",
      alt: "about 2",
    },
  ];

  return (
    <section className="about-container">
      <div className="title">Dusdusan.com</div>
      <div className="desc">
        Platform Komunitas Bisnis Reseller Dropship Online, Supplier Grosir,
        serta belajar banyak hal positif yang dapat meningkatkan bisnis Anda.
      </div>
      <div id="about">
        <Slider {...settings}>
          {aboutData.map((item) => (
            <div key={item.id}>
              <div className="image">
                <Image src={item.img} alt={item.alt} fill />
              </div>
              <div className="content-desc">{item.desc}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
