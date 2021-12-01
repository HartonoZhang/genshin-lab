import { connect } from "react-redux";

import { searchFilterCharacter } from "../../redux/character/character.action";

import "./search-box.style.scss";

const SearchBox = ({ searchCharacter }) => (
  <div className="search-box">
    <p className="title-search">Characters Genshin Impact</p>
    <div className="search-container">
      <input
        className="search-box-container"
        type="search"
        placeholder='Search Character...'
        onChange={searchCharacter}
      />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (item) => dispatch(searchFilterCharacter(item.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
