interface IPromoResponse extends IResponse {
  data: IPromo[];
}

interface IPromo {
  code: string;
  endDate: string;
  id: number;
  imagePath: string;
  name: string;
  promotionName: string;
  rating: string;
  routePrefix: string;
  standardRetailPrice: number;
  uuid: string;
}
