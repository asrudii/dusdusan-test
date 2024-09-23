interface IBrandResponse extends IResponse {
  data: IBrand[];
}

interface IBrand {
  description: string;
  id: number;
  image: string;
  name: string;
  position: number;
  publish: number;
  rating: number;
}
