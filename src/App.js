import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { tryLocalSignin, handleFirebaseLibraryFetch } from "./reducers/actions/userActions";

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";
import User from "./pages/User";
import Settings from "./pages/Settings";

function App() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.isLoggedIn) {
            dispatch(tryLocalSignin());
        }
    }, [])

    useEffect(() => {
        dispatch(handleFirebaseLibraryFetch(user.userUid))
    }, [user.userUid])

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
            <Route path='/user'>
                <User/>
            </Route>
            <Route exact path='/user/settings'>
                <Settings/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
