import { combineReducers } from "redux";

import characterReducer from "./character/character.reducer";
import weaponReducer from "./weapon/weapon.reducer";
import artifactReducer from './artifact/articat.reducer';
import headerReducer from "./header/header.reducer";

const rootReducer = combineReducers({
  character: characterReducer,
  weapon: weaponReducer,
  artifact: artifactReducer,
  header: headerReducer,
});

export default rootReducer;