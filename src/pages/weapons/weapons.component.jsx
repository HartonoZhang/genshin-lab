import { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchListWeaponStartAsync } from "../../redux/weapon/weapon.action";
import { isFetchingData } from "../../redux/weapon/weapon.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { WeaponPageContainer } from "./weapons.style";
import WeaponOverview from "../../components/weapon-overview/weapon-overview.component";

const WeaponOverviewWithSpinner = WithSpinner(WeaponOverview);

class WeaponPage extends Component {
  componentDidMount() {
    const {fetchListWeaponStartAsync} = this.props;
    fetchListWeaponStartAsync();
  }
  render() {
    const { isFetching } = this.props;
    return (
      <WeaponPageContainer>
        <WeaponOverviewWithSpinner isLoading={isFetching} />
      </WeaponPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: isFetchingData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListWeaponStartAsync: () => dispatch(fetchListWeaponStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeaponPage);
