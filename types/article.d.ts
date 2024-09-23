interface IArticleResponse extends IResponse {
  data: IArticle[];
}

interface IArticle {
  articleComment: any;
  category: ICategory;
  categoryId: number;
  content: string;
  createAt: string;
  id: number;
  imagePath: string;
  isMnr: number;
  isPublish: number;
  isReseller: number;
  isTds: number;
  isVisitor: number;
  name: string;
  publishDate: string;
  slug: string;
}

interface ICategory {
  categoryName: string;
  createAt: string;
  deletedAt: string;
  id: number;
  sortOrder: string;
}
