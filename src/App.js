import { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { addCollectionAndDocuments } from "./firebase/firebase.utils";

// import { selectListWeapon } from "./redux/weapon/weapon.selector";

import "./App.css";
import Header from "./components/header/header.component";
import CharacterPage from "./pages/characters/characters.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import WeaponPage from "./pages/weapons/weapons.component";
import ArtifactPage from "./pages/artifacts/artifacts.component";

class App extends Component {

  // componentDidMount() {
    // const { collectionsArray } = this.props;
    // addCollectionAndDocuments("list_weapon", collectionsArray);
  // }
  render() {
    return (
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
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   collectionsArray: selectListWeapon,
// });

// export default connect(mapStateToProps)(App);
export default App;
