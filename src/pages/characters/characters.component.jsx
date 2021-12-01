import { Route } from 'react-router-dom';

import './characters.style.scss';
import CharacterDetailPage from '../character-detail/character-detail.component';

const CharacterPage = ({match}) => (
  <div className='character-page'>
      <Route path={`${match.path}/:characterId`} component={CharacterDetailPage} />
  </div>
);

export default CharacterPage;