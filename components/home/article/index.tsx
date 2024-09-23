import ArticleCard from "@/components/shared/cards/article-card";
import LabelSection from "@/components/shared/label-section";
import "./style.scoped.scss";

interface IArticleProps {
  data: IArticle[];
}

const Article = ({ data }: IArticleProps): JSX.Element => {
  return (
    <section className="category-wrapper">
      <div id="article" className="article-container">
        <LabelSection
          title="Menarik untuk disimak"
          titleIcon="/images/vector/2900eead194655870f7ed62ada993f55.svg"
          rightCtaTitle="Lihat lebih banyak"
          rightCtaUrl="/"
        />
        <div className="article-list">
          {data?.map((item: IArticle) => (
            <ArticleCard
              key={item.id}
              imgUrl={item.imagePath}
              category={item.category.categoryName}
              title={item.name}
              date={item.publishDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
