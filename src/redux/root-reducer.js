import { combineReducers } from "redux";

import characterReducer from "./character/character.reducer";
import weaponReducer from "./weapon/weapon.reducer";

const rootReducer = combineReducers({
  character: characterReducer,
  weapon: weaponReducer
});

export default rootReducer;