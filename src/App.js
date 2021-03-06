import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import CharacterPage from "./pages/characters/characters.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import WeaponPage from "./pages/weapons/weapons.component";
import ArtifactPage from "./pages/artifacts/artifacts.component";

// import { addCollectionAndDocuments, addingViaJson } from "./firebase/firebase.utils";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectDataDB } from "./redux/character/character.selector";

const App = () => {
  // const data = useSelector(selectDataDB);
  // useEffect(() => {
  //   addingViaJson(data, 'yunjin')
  // }, [data])

  return(
  <div className="app-style">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/characters" component={CharacterPage} />
      <Route path="/weapons" component={WeaponPage} />
      <Route path="/artifacts" component={ArtifactPage} />
    </Switch>
    <Footer />
  </div>
)};

export default App;
