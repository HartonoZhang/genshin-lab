import { Component } from "react";
import { connect } from "react-redux";

import { fetchListWeaponStartAsync } from "../../redux/weapon/weapon.action";

import { WeaponPageContainer } from "./weapons.style";

import OverviewWeaponContainer from "../../components/weapon-overview/weapon-overview.container";

class WeaponPage extends Component {
  componentDidMount() {
    const {fetchListWeaponStartAsync} = this.props;
    fetchListWeaponStartAsync();
  }
  render() {
    return (
      <WeaponPageContainer>
        <OverviewWeaponContainer />
      </WeaponPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchListWeaponStartAsync: () => dispatch(fetchListWeaponStartAsync()),
});

export default connect(null, mapDispatchToProps)(WeaponPage);
