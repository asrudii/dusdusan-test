import BrandCard from "@/components/shared/cards/brand-card";
import LabelSection from "@/components/shared/label-section";
import "./style.scoped.scss";

interface IBrandProps {
  data: IBrand[];
}

const Brand = ({ data }: IBrandProps): JSX.Element => {
  return (
    <section className="category-wrapper">
      <div id="brannd">
        <LabelSection
          title="Brand Terpilih"
          rightCtaTitle="Lihat Semua"
          rightCtaUrl="/"
        />
        <div className="brands-wrapper">
          {data.slice(0, 5).map((item) => (
            <BrandCard key={item.id} imgUrl={item.image} title={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
