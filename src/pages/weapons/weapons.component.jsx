import { Component } from "react";
import { connect } from "react-redux";

import { firestore, convertListWeaponsSnapshotToMap  } from "../../firebase/firebase.utils";
import { updateListWeapon } from "../../redux/weapon/weapon.action";

import { WeaponPageContainer } from "./weapons.style";
import WeaponOverview from "../../components/weapon-overview/weapon-overview.component";

class WeaponPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateListWeapon } = this.props;
    const colletionRef = firestore.collection("list_weapon");

    colletionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertListWeaponsSnapshotToMap(snapshot);
      updateListWeapon(collectionMap);
    });
  }
  render() {
    return (
      <WeaponPageContainer>
        <WeaponOverview />
      </WeaponPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateListWeapon: (weaponMap) =>
    dispatch(updateListWeapon(weaponMap)),
});

export default connect(null, mapDispatchToProps)(WeaponPage);
