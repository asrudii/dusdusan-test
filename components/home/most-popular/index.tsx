"use client";

import ProductCard from "@/components/shared/cards/product-card";
import LabelSection from "@/components/shared/label-section";
import PerfectScrollbar from "react-perfect-scrollbar";

interface IMostPopularProps {
  data: ITrendingProduct[];
}

const MostPopular = ({ data }: IMostPopularProps): JSX.Element => {
  return (
    <section className="category-wrapper">
      <div id="most-popular">
        <LabelSection
          title="Produk Terpopuler"
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
                like={item.countLike}
                unit={item.uom}
                price={item.standardRetailPrice}
                note={item.uomNote}
                isStockLow={item.productAvailabilityStatus.id === 6}
              />
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </section>
  );
};

export default MostPopular;
