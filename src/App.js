import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import CharacterPage from "./pages/characters/characters.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import WeaponPage from "./pages/weapons/weapons.component";

function App() {
  return (
    <div className="app-style">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characters" component={CharacterPage} />
        <Route path="/weapons" component={WeaponPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
