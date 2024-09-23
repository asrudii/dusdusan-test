"use client";

import ProductCard from "@/components/shared/cards/product-card";
import LabelSection from "@/components/shared/label-section";
import PerfectScrollbar from "react-perfect-scrollbar";

interface INewestProductProps {
  data: IProduct[];
}

const NewestProduct = ({ data }: INewestProductProps): JSX.Element => {
  return (
    <section className="category-wrapper">
      <div id="most-popular">
        <LabelSection
          title="Produk Terbaru"
          rightCtaTitle="Lihat Semua"
          rightCtaUrl="/"
        />
        <PerfectScrollbar>
          <div className="scroll-wrapper">
            {data.slice(0, 5).map((item) => (
              <ProductCard
                key={item.id}
                imgUrl={item.imageList[0].imagePath}
                title={item.name}
                unit={item.uom}
                like={item.countLike}
                price={item.standardRetailPrice}
                note={item.uomNote}
                isStockLow={item.productAvailabilityStatus.id === 6}
                isComingSoon={item.comingSoonDate !== item.publishDate}
              />
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </section>
  );
};

export default NewestProduct;
