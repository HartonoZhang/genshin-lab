import "./search-box.style.scss";

const SearchBox = ({ searchCharacter, placeholderText, titleText }) => (
  <div className="search-box">
    <p className="title-search">{titleText}</p>
    <div className="search-container">
      <input
        className="search-box-container"
        type="search"
        placeholder={placeholderText}
        onChange={searchCharacter}
      />
    </div>
  </div>
);

export default SearchBox;
