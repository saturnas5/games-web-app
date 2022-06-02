import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {tryLocalSignin} from "./reducers/actions/userActions";

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.isLoggedIn) {
            dispatch(tryLocalSignin());
        }
    }, [])

  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path={['/', '/games/platforms/:name/:id', '/genres/:genre', '/new-releases/:from/:to']}>
                <Main/>
            </Route>
            <Route path='/game/:slug/:id'>
                <GameDetails/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/user'>
                <User/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
