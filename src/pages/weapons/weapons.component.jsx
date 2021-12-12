import { Component } from "react";
import { connect } from "react-redux";

import { fetchListWeaponStart } from "../../redux/weapon/weapon.action";

import { WeaponPageContainer } from "./weapons.style";

import OverviewWeaponContainer from "../../components/weapon-overview/weapon-overview.container";

class WeaponPage extends Component {
  componentDidMount() {
    const {fetchListWeaponStart} = this.props;
    fetchListWeaponStart();
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
  fetchListWeaponStart: () => dispatch(fetchListWeaponStart()),
});

export default connect(null, mapDispatchToProps)(WeaponPage);
