import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchListArtifactStart } from "../../redux/artifact/artifact.action";

import { PageContainer } from "../../hoc/style";
import OverviewArtifactContainer from "../../components/artifact-overview/artifact-overview.container";

const ArtifactPage = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchListArtifactStart());
  }, [dispatch]);

  return (
    <PageContainer>
      <OverviewArtifactContainer />
    </PageContainer>
  );
};

export default ArtifactPage;
