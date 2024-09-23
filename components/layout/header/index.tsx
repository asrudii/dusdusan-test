import BottomNavigation from "./bottom-navigation";
import ProductNavigation from "./product-navigation";
import SearchBar from "./searchbar";
import Toolbar from "./toolbar";

const Header = () => {
  return (
    <header>
      <Toolbar />
      <SearchBar />
      <ProductNavigation />
      <BottomNavigation />
    </header>
  );
};

export default Header;
