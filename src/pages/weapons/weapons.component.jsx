import { Component } from "react";
import { connect } from "react-redux";

import { firestore, convertListWeaponsSnapshotToMap  } from "../../firebase/firebase.utils";
import { updateListWeapon } from "../../redux/weapon/weapon.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { WeaponPageContainer } from "./weapons.style";
import WeaponOverview from "../../components/weapon-overview/weapon-overview.component";

const WeaponOverviewWithSpinner = WithSpinner(WeaponOverview);

class WeaponPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateListWeapon } = this.props;
    const colletionRef = firestore.collection("list_weapon");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertListWeaponsSnapshotToMap(snapshot);
      updateListWeapon(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const {loading} = this.state;
    return (
      <WeaponPageContainer>
        <WeaponOverviewWithSpinner isLoading={loading} />
      </WeaponPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateListWeapon: (weaponMap) =>
    dispatch(updateListWeapon(weaponMap)),
});

export default connect(null, mapDispatchToProps)(WeaponPage);
