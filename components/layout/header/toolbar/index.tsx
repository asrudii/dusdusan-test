import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import "./style.scoped.scss";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="logo logo-homepage">
        <Link href="/">
          <div className="image">
            <Image src="/images/logo.webp" alt="Dusdusan.com" fill />
          </div>
        </Link>
      </div>
      <div className="header-cta">
        <div className="toolbar-login-register-wrapper">
          <Button type="primary" size="middle" ghost>
            Masuk
          </Button>
          <Button type="primary" className="ml-1">
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
