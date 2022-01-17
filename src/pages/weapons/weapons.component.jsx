import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchListWeaponStart } from "../../redux/weapon/weapon.action";

import { PageContainer } from "../../hoc/style";

import OverviewWeaponContainer from "../../components/weapon-overview/weapon-overview.container";

const WeaponPage = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchListWeaponStart());
  }, [dispatch]);

  return (
    <PageContainer>
      <OverviewWeaponContainer />
    </PageContainer>
  );
}

export default WeaponPage;
