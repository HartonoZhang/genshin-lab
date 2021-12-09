import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchListCharactersStartAsync } from "../../redux/character/character.action";
import { isFetchingData } from "../../redux/character/character.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { HomepageContainer } from "./homepage.style";
import CharacterOverview from "../../components/character-overview/character-overview.component";

const CharacterOverviewWithSpinner = WithSpinner(CharacterOverview);

class HomePage extends Component {
  componentDidMount() {
    const { fetchListCharactersStartAsync } = this.props;
    fetchListCharactersStartAsync();
  }

  render() {
    const { isDataFetching } = this.props;
    return (
      <HomepageContainer>
        <CharacterOverviewWithSpinner isLoading={isDataFetching} />
      </HomepageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isDataFetching: isFetchingData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListCharactersStartAsync: () =>
    dispatch(fetchListCharactersStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
