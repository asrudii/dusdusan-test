import Image from "next/image";
import Link from "next/link";
import "./style.scoped.scss";

const CtaMember = () => {
  return (
    <section className="category-wrapper">
      <Link href="/">
        <div className="cta-member">
          <div className="image">
            <Image src="/images/member.png" alt="cta-member" fill />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CtaMember;
