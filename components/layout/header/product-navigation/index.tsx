import "./style.scoped.scss";

const ProductNavigation = () => {
  return (
    <div className="product-navigation-container">
      <nav className="product-navigation-wrapper">
        <button className="category">PROMO</button>
        <button className="category">KATEGORI</button>
        <button className="category">TERPILIH</button>
        <button className="category">TERLARIS</button>
        <button className="category">TERPOPULER</button>
        <button className="category">TERBARU</button>
      </nav>
    </div>
  );
};

export default ProductNavigation;
