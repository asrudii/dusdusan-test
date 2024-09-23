interface ICategoryResponse extends IResponse {
  data: ICategory[];
}

interface ICategory {
  description: string;
  id: number;
  image: string;
  name: string;
  nameSlug: string;
  productSubCategory: IProductSubCategory[];
  sortOrder: number;
  thumbImg: string;
}

interface IProductSubCategory {
  description: string;
  id: number;
  name: string;
  nameSlug: string;
  sortOrder: number;
  thumbImg: string;
}
