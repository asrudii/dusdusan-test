import IconLogo from "@/components/icons/logo";
import {
  HeartOutlined,
  HomeFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import Link from "next/link";
import "./style.scoped.scss";

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation-container">
      <div className="navigation-wrapper">
        <Link href="/" className="home">
          <div className="icon-wrapper">
            <div className="svg-wrapper">
              <HomeFilled className="image-svg" />
            </div>
            <div className="label active">Beranda</div>
          </div>
        </Link>
        <Link href="/" className="ml-[10px]">
          <div className="icon-wrapper">
            <div className="svg-wrapper">
              <Badge count={0}>
                <HeartOutlined className="image-svg" />
              </Badge>
            </div>
            <div className="label">Favorit</div>
          </div>
        </Link>
        <Link href="/" className="love">
          <div className="icon-wrapper">
            <div className="flex">
              <div className="catalog-wrapper">
                <IconLogo />
              </div>
            </div>
            <div className="label katalog">Katalog</div>
          </div>
        </Link>
        <Link href="/" className="mr-[10px]">
          <div className="icon-wrapper">
            <div className="svg-wrapper">
              <Badge count={0}>
                <ShoppingCartOutlined className="image-svg" />
              </Badge>
            </div>
            <div className="label">Keranjang</div>
          </div>
        </Link>
        <Link href="/" className="profile">
          <div className="icon-wrapper">
            <div className="svg-wrapper">
              <UserOutlined className="image-svg" />
            </div>
            <div className="label">Profil</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
