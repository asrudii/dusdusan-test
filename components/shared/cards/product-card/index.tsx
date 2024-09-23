import { formatIdrCurrency } from "@/core/utils/format-currency";
import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import "./style.scoped.scss";

interface IProductCardProps {
  imgUrl: string;
  title: string;
  price: number;
  note: string;
  unit: string;
  like?: number;
  isStockLow: boolean;
  isComingSoon?: boolean;
}

const ProductCard = ({
  imgUrl,
  title,
  price,
  note,
  unit,
  like,
  isStockLow,
  isComingSoon,
}: IProductCardProps): JSX.Element => {
  return (
    <div className="product-card-container">
      <div className="image">
        {isComingSoon && (
          <div className="coming-soon">
            <span>Segera Hadir</span>
          </div>
        )}
        <Image src={imgUrl} alt="product-card" fill />
      </div>
      <div className="content">
        <span className="name" title={title}>
          {title}
        </span>
        <div className="grow">
          {like !== undefined && (
            <div className="like">
              <HeartFilled />
              <span>{like}</span>
              <span>Menyukai</span>
            </div>
          )}
          <div className="price">
            <span>
              {formatIdrCurrency(price)}/{unit}
            </span>
          </div>
          {note && (
            <div className="uom-note">* {note?.replaceAll("_", "")}</div>
          )}
        </div>
        {isStockLow && <span className="status-stock">Stok Menipis</span>}
      </div>
    </div>
  );
};

export default ProductCard;
