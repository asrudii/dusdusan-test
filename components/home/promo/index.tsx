"use client";

import LabelSection from "@/components/shared/label-section";
import Image from "next/image";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./style.scoped.scss";

interface IPromoProps {
  data: IPromo[];
}

const Promo = ({ data }: IPromoProps): JSX.Element => {
  return (
    <section className="category-wrapper article-container">
      <div id="promo">
        <LabelSection
          title="Promo"
          rightCtaTitle="Lihat Semua"
          rightCtaUrl="/"
        />
        <PerfectScrollbar>
          <div className="promo-wrapper">
            {data?.map((item: IPromo) => (
              <div className="product" key={item.id}>
                <Link href="/">
                  <Image
                    src={item.imagePath}
                    alt="promo"
                    width={170}
                    height={170}
                  />
                </Link>
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </section>
  );
};

export default Promo;
