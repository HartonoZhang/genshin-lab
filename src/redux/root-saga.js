import { all, call } from "redux-saga/effects";

import { characterSaga } from "./character/character.saga";
import { weaponSaga } from "./weapon/weapon.saga";
import { artifactSaga } from "./artifact/artifact.saga";

export default function* rootSaga() {
  yield all([call(characterSaga), call(weaponSaga), call(artifactSaga)]);
}
