import { HeaderOverviewWeaponContainer, TextHeaderResponsive } from "./header-overview-weapon.style";

const HeaderOverviewWeapon = () => (
  <HeaderOverviewWeaponContainer>
    <div>Weapon</div>
    <TextHeaderResponsive>Type</TextHeaderResponsive>
    <TextHeaderResponsive>Rarity</TextHeaderResponsive>
    <TextHeaderResponsive>Bonus Effect</TextHeaderResponsive>
    <TextHeaderResponsive>Skill</TextHeaderResponsive>
  </HeaderOverviewWeaponContainer>
);

export default HeaderOverviewWeapon;