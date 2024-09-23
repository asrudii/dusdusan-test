import HomeContent from "@/components/home";
import homeService from "@/core/services/home.service";

export default async function Home() {
  // Fetch data for Home
  const homeResponse: IHomeResponse = await homeService.getHomeContent();

  // banner data
  const bannerData: IMemberNonReseller[] =
    homeResponse.banner.memberNonReseller;

  // best seller data
  const bestSellerData: ITrendingProduct[] =
    homeResponse.product.productByNumberOfSales;

  // most popular data
  const mostPopularData: ITrendingProduct[] =
    homeResponse.product.trendingProduct;

  // Fetch data for article
  const articleResponse: IArticleResponse = await homeService.getArticle();
  const articleData: IArticle[] = articleResponse.data;

  // Fetch data for promo
  const promoResponse: IPromoResponse = await homeService.getPromo();
  const promoData: IPromo[] = promoResponse.data;

  // Fetch data for category
  const categoryResponse: ICategoryResponse = await homeService.getCategory();
  const categoryData: ICategory[] = categoryResponse.data;

  // Fetch data for brand
  const brandResponse: IBrandResponse = await homeService.getBrand();
  const brandData: IBrand[] = brandResponse.data;

  // Fetch data for product
  const productResponse: IProductResponse = await homeService.getProduct();
  const productData: IProduct[] = productResponse.data;

  return (
    <HomeContent
      bannerData={bannerData}
      articleData={articleData}
      promoData={promoData}
      categoryData={categoryData}
      brandData={brandData}
      bestSellerData={bestSellerData}
      mostPopularData={mostPopularData}
      productData={productData}
    />
  );
}
