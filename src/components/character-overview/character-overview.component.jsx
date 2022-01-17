import { useSelector, useDispatch } from "react-redux";

import {
  selectCharacters,
  selectSearchFilterCharacter,
} from "../../redux/character/character.selector";
import { searchFilterCharacter } from "../../redux/character/character.action";

import { OverviewContainer } from "../../hoc/style";

import { checkData } from "../../hoc/utils-data";

import CharacterPreview from "../character-preview/character-preview.component";
import SearchBox from "../search-box/search-box.component";
import TextValidationFound from "../text-validation-found/text-validation-found.component";

const CharacterOverview = () => {
  const listCharacters = useSelector(selectCharacters);
  const searchCharactersField = useSelector(selectSearchFilterCharacter);

  const dispatch = useDispatch();
  const searchCharacter = (item) => {
    dispatch(searchFilterCharacter(item.target.value));
  };

  const checkCondition = checkData(
    listCharacters,
    searchCharactersField,
    "characters"
  );
  return (
    <OverviewContainer>
      <SearchBox
        placeholderText="Search Character..."
        searchCharacter={searchCharacter}
        titleText="Characters Genshin Impact"
      />
      {checkCondition ? (
        listCharacters.map(({ id, ...otherCollectionProps }) => (
          <CharacterPreview
            searchCharacter={searchCharactersField}
            key={id}
            {...otherCollectionProps}
          />
        ))
      ) : (
        <TextValidationFound textField="Character Not Found" />
      )}
    </OverviewContainer>
  );
};

export default CharacterOverview;
