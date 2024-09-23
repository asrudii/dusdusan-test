import Image from "next/image";
import Link from "next/link";
import "./style.scoped.scss";

interface IBrandCardProps {
  imgUrl: string;
  title: string;
}

const BrandCard = ({ imgUrl, title }: IBrandCardProps): JSX.Element => {
  return (
    <Link href="/">
      <div className="brand-card-container">
        <div className="image">
          <Image src={imgUrl} alt="brand" fill />
        </div>
        <div className="label">{title}</div>
      </div>
    </Link>
  );
};

export default BrandCard;
