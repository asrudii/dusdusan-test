import dynamic from "next/dynamic";
import "./style.scoped.scss";

const About = dynamic(() => import("./about"), { ssr: false });
const Article = dynamic(() => import("./article"));
const Banner = dynamic(() => import("./banner"));
const BestSeller = dynamic(() => import("./best-seller"));
const Brand = dynamic(() => import("./brand"));
const Category = dynamic(() => import("./category"));
const CtaMember = dynamic(() => import("./cta-member"));
const MostPopular = dynamic(() => import("./most-popular"));
const NewestProduct = dynamic(() => import("./newest-product"));
const Promo = dynamic(() => import("./promo"));

interface IHomeContentProps {
  bannerData: IMemberNonReseller[];
  articleData: IArticle[];
  promoData: IPromo[];
  categoryData: ICategory[];
  brandData: IBrand[];
  productData: IProduct[];
  bestSellerData: ITrendingProduct[];
  mostPopularData: ITrendingProduct[];
}

const HomeContent = ({
  bannerData,
  articleData,
  promoData,
  categoryData,
  brandData,
  bestSellerData,
  mostPopularData,
  productData,
}: IHomeContentProps): JSX.Element => {
  return (
    <div className="new-landing-container">
      <Banner data={bannerData} />
      <Promo data={promoData} />
      <Category data={categoryData} />
      <Article data={articleData} />
      <Brand data={brandData} />
      <CtaMember />
      <BestSeller data={bestSellerData} />
      <MostPopular data={mostPopularData} />
      <NewestProduct data={productData} />
      <About />
    </div>
  );
};

export default HomeContent;
