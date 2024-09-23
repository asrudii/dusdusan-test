interface IProductResponse extends IResponse {
  data: IProduct[];
}

interface IProduct {
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
  productResellerPrices: any;
  productRetailPrice: IProductRetailPrice;
  productRetailPrices: any;
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

interface IProductRetailPrice {
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
