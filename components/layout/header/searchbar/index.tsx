import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./style.scoped.scss";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-wrapper">
        <SearchOutlined className="icon" />
        <Input
          placeholder="Cari barang kamu disini..."
          className="input-search"
        />
        {/* <div className="button-wrapper">
          <Button type="primary" className="ml-1">
            <span>X</span>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default SearchBar;
