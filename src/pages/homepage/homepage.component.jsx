import { Component } from "react";
import { connect } from "react-redux";

import { fetchListCharactersStartAsync } from "../../redux/character/character.action";

import { HomepageContainer } from "./homepage.style";
import OverviewCharacterContainer from "../../components/character-overview/character-overview.container";

class HomePage extends Component {
  componentDidMount() {
    const { fetchListCharactersStartAsync } = this.props;
    fetchListCharactersStartAsync();
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
  fetchListCharactersStartAsync: () =>
    dispatch(fetchListCharactersStartAsync()),
});

export default connect(null, mapDispatchToProps)(HomePage);
