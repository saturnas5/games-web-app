import React, {useEffect} from "react";
import {loadPopularGames, loadNewGames, loadUpcomingGames} from "./reducers/actions/gamesActions";

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
        <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
