interface IHomeResponse {
  banner: IBanner;
  community: ICommunity;
  header: any;
  product: IProduct;
}

interface IBanner {
  memberNonReseller: IMemberNonReseller[];
  reseller: any;
  tds: any;
}

interface IMemberNonReseller {
  id: number;
  image: string;
  memberTypeID: number;
  name: string;
  publishEndDate: string;
  publishStartDate: string;
  sortNumber: number;
  target: string;
  url: string;
}

interface ICommunity {
  article: IArticle[];
}

interface IArticle {
  categoryName: string;
  content: string;
  createdAt: string;
  id: number;
  image: string;
  slug: string;
  title: string;
  updatedAt: string;
  url: string;
  uuid: string;
}

interface IProduct {
  productByNumberOfSales: IProductByNumberOfSale[];
  promotion: any;
  trendingProduct: ITrendingProduct[];
}

interface IProductByNumberOfSale {
  allowDropship: number;
  availabilityThinned: number;
  branchId: number;
  brand: string;
  brandId: number;
  canPatungan: number;
  comingSoon: number;
  comingSoonDate: string;
  countLike: number;
  createdAt: string;
  deliveryAddressId: number;
  description: string;
  fakeStocks: number;
  freeShipping: number;
  grossWeight: number;
  id: number;
  imageList: IImageList[];
  innerQtyMaster: number;
  internalSku: string;
  isAllRegion: boolean;
  isExclusive: number;
  isPopuler: number;
  isPrdMaxOrder: boolean;
  isPriceRegional: number;
  isTrending: number;
  isTrial: number;
  mosAll: number;
  mosAllLabel: string;
  mosHdm: number;
  mosHdmLabel: string;
  name: string;
  numberOfSales: number;
  packageDimensionsHeight: number;
  packageDimensionsLength: number;
  packageDimensionsWidth: number;
  patunganEnable: boolean;
  patunganPrice: any;
  photoZip: string;
  prdMaxOrder: any;
  prdSpecial: boolean;
  prdSpecialName: string;
  prdSpecialSlug: string;
  prdSpecialStruct: any;
  preorder: number;
  preorderDate: string;
  preorderInfo: string;
  preorderLength: number;
  principalId: number;
  productAvailabilityStatus: IProductAvailabilityStatus;
  productBuyOneGetOne: any;
  productCategoryId: number;
  productCategoryName: string;
  productCategorySlug: string;
  productChildCategoryId: number;
  productContent: string;
  productDiscountPrice: any[];
  productDiscountPrices: any;
  productQuantityGudang: any;
  productQuantityTDS: IProductQuantityTds;
  productResellerPrice: IProductResellerPrice[];
  IproductResellerPrices?: IProductResellerPrice2[];
  productRetailPrice: IProductRetailPrice;
  productRetailPrices?: IProductRetailPrice2[];
  productSubCategoryId: number;
  productSubCategoryName: string;
  productSubCategorySlug: string;
  productTag: any[];
  promotion: IPromotion;
  promotionImagePath: any[];
  publish: number;
  publishDate: string;
  purchasePoint: number;
  quantity: number;
  rating: number;
  review: any;
  reviewCount: number;
  soldToExpressShopping: number;
  soldToReseller: number;
  soldToTds: number;
  sortOrder: number;
  standardRetailPrice: number;
  starterImageName: string;
  starterImagePath: string;
  stockStatusId: number;
  stockStatusName: string;
  subscribeTypeId: number;
  typePriceStarterKit: number;
  typeProduct: number;
  typeProductBundling: number;
  typeReward: number;
  typeStarterKit: number;
  uom: string;
  uomNote: string;
  uuid: string;
  videoUrl: string;
}

interface IImageList {
  id: number;
  imageName: string;
  imagePath: string;
  productId: number;
  sortOrder: number;
}

interface IProductAvailabilityStatus {
  description: string;
  id: number;
  name: string;
  slug: string;
}

interface IProductQuantityTds {
  branchName: string;
  fakeStocks: number;
  onhandQuantity: number;
  productID: number;
}

interface IProductResellerPrice {
  createdAt: string;
  id: number;
  minimumPurchase: number;
  minimumPurchasePrice: number;
  productId: number;
  regionalId: number;
}

interface IProductResellerPrice2 {
  createdAt: string;
  id: number;
  minimumPurchase: number;
  minimumPurchasePrice: number;
  productId: number;
  regionalId: number;
}

interface IProductRetailPrice {
  createdAt: string;
  id: number;
  productId: number;
  regionalId: number;
  standardRetailPrice: number;
}

interface IProductRetailPrice2 {
  createdAt: string;
  id: number;
  productId: number;
  regionalId: number;
  standardRetailPrice: number;
}

interface IPromotion {
  id: number;
  isActive: number;
  name: string;
  priceAfter: number;
  priceBefore: number;
}

interface ITrendingProduct {
  allowDropship: number;
  availabilityThinned: number;
  branchId: number;
  brand: string;
  brandId: number;
  canPatungan: number;
  comingSoon: number;
  comingSoonDate: string;
  countLike: number;
  createdAt: string;
  deliveryAddressId: number;
  description: string;
  fakeStocks: number;
  freeShipping: number;
  grossWeight: number;
  id: number;
  imageList: IImageList2[];
  innerQtyMaster: number;
  internalSku: string;
  isAllRegion: boolean;
  isExclusive: number;
  isPopuler: number;
  isPrdMaxOrder: boolean;
  isPriceRegional: number;
  isTrending: number;
  isTrial: number;
  mosAll: number;
  mosAllLabel: string;
  mosHdm: number;
  mosHdmLabel: string;
  name: string;
  numberOfSales: number;
  packageDimensionsHeight: number;
  packageDimensionsLength: number;
  packageDimensionsWidth: number;
  patunganEnable: boolean;
  patunganPrice: any;
  photoZip: string;
  prdMaxOrder: any;
  prdSpecial: boolean;
  prdSpecialName: string;
  prdSpecialSlug: string;
  prdSpecialStruct: any;
  preorder: number;
  preorderDate: string;
  preorderInfo: string;
  preorderLength: number;
  principalId: number;
  productAvailabilityStatus: IProductAvailabilityStatus2;
  productBuyOneGetOne: any;
  productCategoryId: number;
  productCategoryName: string;
  productCategorySlug: string;
  productChildCategoryId: number;
  productContent: string;
  productDiscountPrice: any[];
  productDiscountPrices: any;
  productQuantityGudang: any;
  productQuantityTDS: IProductQuantityTds2;
  productResellerPrice: IProductResellerPrice3[];
  productResellerPrices?: IProductResellerPrice4[];
  productRetailPrice: IProductRetailPrice3;
  productRetailPrices?: IProductRetailPrice4[];
  productSubCategoryId: number;
  productSubCategoryName: string;
  productSubCategorySlug: string;
  productTag: any[];
  promotion: IPromotion2;
  promotionImagePath: any[];
  publish: number;
  publishDate: string;
  purchasePoint: number;
  quantity: number;
  rating: number;
  review: any;
  reviewCount: number;
  soldToExpressShopping: number;
  soldToReseller: number;
  soldToTds: number;
  sortOrder: number;
  standardRetailPrice: number;
  starterImageName: string;
  starterImagePath: string;
  stockStatusId: number;
  stockStatusName: string;
  subscribeTypeId: number;
  typePriceStarterKit: number;
  typeProduct: number;
  typeProductBundling: number;
  typeReward: number;
  typeStarterKit: number;
  uom: string;
  uomNote: string;
  uuid: string;
  videoUrl: string;
}

interface IImageList2 {
  id: number;
  imageName: string;
  imagePath: string;
  productId: number;
  sortOrder: number;
}

interface IProductAvailabilityStatus2 {
  description: string;
  id: number;
  name: string;
  slug: string;
}

interface IProductQuantityTds2 {
  branchName: string;
  fakeStocks: number;
  onhandQuantity: number;
  productID: number;
}

interface IProductResellerPrice3 {
  createdAt: string;
  id: number;
  minimumPurchase: number;
  minimumPurchasePrice: number;
  productId: number;
  regionalId: number;
}

interface IProductResellerPrice4 {
  createdAt: string;
  id: number;
  minimumPurchase: number;
  minimumPurchasePrice: number;
  productId: number;
  regionalId: number;
}

interface IProductRetailPrice3 {
  createdAt: string;
  id: number;
  productId: number;
  regionalId: number;
  standardRetailPrice: number;
}

interface IProductRetailPrice4 {
  createdAt: string;
  id: number;
  productId: number;
  regionalId: number;
  standardRetailPrice: number;
}

interface IPromotion2 {
  id: number;
  isActive: number;
  name: string;
  priceAfter: number;
  priceBefore: number;
}
