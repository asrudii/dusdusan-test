import Image from "next/image";
import Link from "next/link";
import "./style.scoped.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="label">Dusdusan.com</div>
      <div className="text">
        Kami Ada di
        <br />
        Senin - Minggu : 08.00 - 17.00 WIB
        <br />
      </div>
      <div className="label mt-[1.6rem] text-base">Butuh Bantuan ?</div>
      <div className="text">
        <div className="cursor-pointer">Live Chat Dusdusan.com</div>
        <a href="mailto: support@dusdusan.com">Support@dusdusan.com</a>
      </div>
      <div className="div-icon">
        <Link target="_blank" href="https://www.instagram.com/dusdusan/">
          <Image
            alt="instagram"
            src="/images/instagram.webp"
            width={36}
            height={36}
          />
        </Link>
        <Link target="_blank" href="https://web.facebook.com/DusdusanID">
          <Image
            alt="facebook"
            src="/images/facebook.webp"
            width={36}
            height={36}
          />
        </Link>
        <Link target="_blank" href="https://vt.tiktok.com/ZSJj9Q8sT/">
          <Image
            alt="tiktok"
            src="/images/tiktok.webp"
            width={36}
            height={36}
          />
        </Link>
        <Link target="_blank" href="https://www.youtube.com/DusdusanID">
          <Image
            alt="youtube"
            src="/images/youtube.webp"
            width={36}
            height={36}
          />
        </Link>
      </div>
      <div className="address">
        <span>PT DUSDUSAN DOTCOM INDONESIA</span>
        <br />
        Jl. Kebon Jeruk Raya 1A, 1B, 1C, Kel. Kebon Jeruk, Kec. Kebon Jeruk,
        Kota Adm. Jakarta Barat, Prov. DKI Jakarta
      </div>
      <div className="copyright">
        <span>Copyright &copy; 2022 Dusdusan.com. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
