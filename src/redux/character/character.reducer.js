import Character_Data from "./character.data";

const INITIAL_STATE = {
  listCharacter: Character_Data,
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default characterReducer;