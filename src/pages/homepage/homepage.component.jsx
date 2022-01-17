import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchListCharactersStart } from "../../redux/character/character.action";

import { PageContainer } from "../../hoc/style";
import OverviewCharacterContainer from "../../components/character-overview/character-overview.container";

const HomePage = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchListCharactersStart());
  }, [dispatch]);

  return (
    <PageContainer>
      <OverviewCharacterContainer />
    </PageContainer>
  );
};

export default HomePage;
