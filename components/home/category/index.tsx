import LabelSection from "@/components/shared/label-section";
import Image from "next/image";
import "./style.scoped.scss";

interface ICategoryProps {
  data: ICategory[];
}

const Category = ({ data }: ICategoryProps): JSX.Element => {
  data.push({
    id: 1111,
    name: "Lainnya",
    image: "/images/vector/e25960fc52951b43eca7cf23b3c1617a.svg",
  } as ICategory);
  return (
    <section className="category-wrapper">
      <div id="category-product" className="category-product-container">
        <LabelSection title="Kategori Produk" className="text-white" />
        <div className="brands-wrapper">
          {data.map((brand: ICategory) => (
            <button key={brand.id}>
              <div className="brand">
                <div>
                  <div className="image-wrapper">
                    <div className="image">
                      <Image src={brand.image} alt="brand" fill />
                    </div>
                  </div>
                  <div className="label">{brand.name}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
