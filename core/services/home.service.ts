import { AxiosResponse } from "axios";
import { AxiosInstance } from "../api/axios-instance";

const getHomeContent = async () => {
  try {
    const result: AxiosResponse<IHomeResponse> =
      await AxiosInstance.get("/homepageContent");

    return result?.data;
  } catch (error) {
    return {} as IHomeResponse;
  }
};

const getPromo = async () => {
  try {
    const result: AxiosResponse<IPromoResponse> =
      await AxiosInstance.get("/promoBanner/home");

    return result?.data;
  } catch (error) {
    return {} as IPromoResponse;
  }
};

const getCategory = async () => {
  try {
    const result: AxiosResponse<ICategoryResponse> = await AxiosInstance.get(
      "/trendingProductCategory?limit=11"
    );

    return result?.data;
  } catch (error) {
    return {} as ICategoryResponse;
  }
};

const getArticle = async () => {
  try {
    const result: AxiosResponse<IArticleResponse> = await AxiosInstance.get(
      "/articles?limit=5&orderby=publishDate&sortby=desc"
    );

    return result?.data;
  } catch (error) {
    return {} as IArticleResponse;
  }
};

const getBrand = async () => {
  try {
    const result: AxiosResponse<IBrandResponse> = await AxiosInstance.get(
      "productBrand?sortby=position"
    );

    return result?.data;
  } catch (error) {
    return {} as IBrandResponse;
  }
};

const getProduct = async () => {
  try {
    const result: AxiosResponse<IProductResponse> = await AxiosInstance.get(
      "product?offset=0&limit=10&query=&query2=type_product__in%3A1-4"
    );

    return result?.data;
  } catch (error) {
    return {} as IProductResponse;
  }
};

const homeService = {
  getHomeContent,
  getArticle,
  getPromo,
  getCategory,
  getBrand,
  getProduct,
};

export default homeService;
