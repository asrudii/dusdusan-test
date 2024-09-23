"use client";

import ProductCard from "@/components/shared/cards/product-card";
import LabelSection from "@/components/shared/label-section";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./style.scoped.scss";

interface IBestSellerProps {
  data: ITrendingProduct[];
}

const BestSeller = ({ data }: IBestSellerProps): JSX.Element => {
  return (
    <section className="category-wrapper">
      <div id="best-seller" className="best-seller-container">
        <LabelSection
          title="Produk Terlaris"
          rightCtaTitle="Lihat Semua"
          rightCtaUrl="/"
          className="text-white"
        />
        <PerfectScrollbar>
          <div className="scroll-wrapper">
            {data.slice(0, 5).map((item) => (
              <ProductCard
                key={item.id}
                imgUrl={item.imageList[0].imagePath}
                title={item.name}
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

export default BestSeller;
