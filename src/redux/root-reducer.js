import { combineReducers } from "redux";

import characterReducer from "./character/character.reducer";

const rootReducer = combineReducers({
  character: characterReducer,
});

export default rootReducer;