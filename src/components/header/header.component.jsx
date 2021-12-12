import { HeaderContainer, HeaderTopContainer, LogoContainer, LogoText, OptionContainer, OptionsContainer } from "./header.style";

const Header = () => (
  <HeaderContainer>
    <HeaderTopContainer>
      <LogoContainer to="/">
        <LogoText>GENSHIN LAB</LogoText>
      </LogoContainer>
      <OptionsContainer>
        <OptionContainer to="/">
          CHARACTERS
        </OptionContainer>
        <OptionContainer to="/artifacts">
          ARTIFACTS
        </OptionContainer>
        <OptionContainer to="/weapons">
          WEAPONS
        </OptionContainer>
      </OptionsContainer>
    </HeaderTopContainer>
  </HeaderContainer>
);


export default Header;
