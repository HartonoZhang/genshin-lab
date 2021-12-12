import { Component } from "react";
import { connect } from "react-redux";

import { fetchListCharactersStart } from "../../redux/character/character.action";

import { HomepageContainer } from "./homepage.style";
import OverviewCharacterContainer from "../../components/character-overview/character-overview.container";

class HomePage extends Component {
  componentDidMount() {
    const { fetchListCharactersStart } = this.props;
    fetchListCharactersStart();
  }
  render() {
    return (
      <HomepageContainer>
        <OverviewCharacterContainer />
      </HomepageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchListCharactersStart: () => dispatch(fetchListCharactersStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
