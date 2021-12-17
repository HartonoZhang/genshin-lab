import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchListCharactersStart } from "../../redux/character/character.action";

import { HomepageContainer } from "./homepage.style";
import OverviewCharacterContainer from "../../components/character-overview/character-overview.container";

const HomePage = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchListCharactersStart());
  }, [dispatch]);

  return (
    <HomepageContainer>
      <OverviewCharacterContainer />
    </HomepageContainer>
  );
};

export default HomePage;
