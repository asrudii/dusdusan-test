import dayjs from "dayjs";
import Image from "next/image";
import "./style.scoped.scss";

interface IArticleCardProps {
  imgUrl: string;
  category: string;
  title: string;
  date: string;
}

const ArticleCard = ({
  imgUrl,
  category,
  title,
  date,
}: IArticleCardProps): JSX.Element => {
  return (
    <div className="article-card">
      <div className="article-card-wrapper">
        <div className="article-card-image">
          <Image src={imgUrl} alt="article" width={100} height={100} />
        </div>
        <div className="article-card-content">
          <div>
            <span className="text-xs">{category}</span>
            <p title={title} className="article-card-title">
              {title}
            </p>
          </div>
          <p className="article-card-date">
            {date ? dayjs(date).format("DD MMM YYYY") : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
