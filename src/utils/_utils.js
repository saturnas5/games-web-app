import {FaAndroid, FaApple, FaGamepad, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import React from "react";
import {
    addGameToCompletedLibrary, addGameToPlayedLibrary,
    addGameToPlayingLibrary, addGameToWantPlayLibrary,
    removeGameFromCompletedLibrary,
    removeGameFromPlayedLibrary, removeGameFromPlayingLibrary,
    removeGameFromUncategorizedLibrary, removeGameFromWantedLibrary
} from "../reducers/actions/userActions";

import {useDispatch, useSelector} from "react-redux";

export const getLastWeek = () => {
    let today = new Date();
    let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const offset = nextweek.getTimezoneOffset()
    nextweek = new Date(nextweek.getTime() - (offset*60*1000))
    return nextweek.toISOString().split('T')[0]
}

export const getNextWeek = () => {
    let today = new Date();
    let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const offset = nextweek.getTimezoneOffset()
    nextweek = new Date(nextweek.getTime() - (offset*60*1000))
    return nextweek.toISOString().split('T')[0]
}

export const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
}

export const generate_token = (length = 32) => {
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    const b = [];
    for (let i=0; i<length; i++) {
        let j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

export const setPlatforms = (platform) => {
    switch (platform) {
        case 'playstation3':
            return <FaPlaystation key='playstation3' className='game__platforms-icon'/>;
        case 'playstation4':
            return <FaPlaystation key='playstation4' className='game__platforms-icon'/>;
        case 'playstation5':
            return <FaPlaystation key='playstation5' className='game__platforms-icon'/>
        case 'xbox-one':
            return <FaXbox key='xbox-one' className='game__platforms-icon'/>;
        case 'xbox-series-x':
            return <FaXbox key='xbox-series-x' className='game__platforms-icon'/>;
        case 'nintendo-switch':
            return <FaGamepad key='nintendo-switch' className='game__platforms-icon'/>;
        case 'nintendo-3ds':
            return <FaGamepad key='nintendo-3ds' className='game__platforms-icon'/>;
        case 'ios':
            return <FaApple key='ios' className='game__platforms-icon'/>;
        case 'macos':
            return <FaApple key='macos' className='game__platforms-icon'/>;
        case 'pc':
            return <FaWindows key='pc' className='game__platforms-icon'/>;
        case 'linux':
            return <FaLinux key='linux' className='game__platforms-icon'/>;
        case 'android':
            return <FaAndroid key='android' className='game__platforms-icon'/>;
    }
}

// return object with genres array that are in user library
export const countGamesGenresInLibrary = (user) => {
    let librarys = Object.keys(user.library);

    let genresLibrary = {
        actions: [],
        indie: [],
        adventure: [],
        rolePlayingGamesRpg: [],
        strategy: [],
        shooter: [],
        casual: [],
        simulation: [],
        puzzle: [],
        arcade: [],
        platformer: [],
        racing: [],
        massivelyMultiplayer: [],
        sports: [],
        fighting: [],
        family: [],
        boardGames: [],
        educational: [],
        card: []
    };

    for(let i = 0; i < Object.keys(user.library).length; i++) {
        for(let j = 0; j < user.library[librarys[i]].length; j++) {
            for(let k = 0; k < user.library[librarys[i]][j].genres.length; k++){
                if(user.library[librarys[i]][j].genres[k].slug === 'action') {
                    genresLibrary.actions.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'indie') {
                    genresLibrary.indie.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'adventure') {
                    genresLibrary.adventure.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'role-playing-games-rpg') {
                    genresLibrary.rolePlayingGamesRpg.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'strategy') {
                    genresLibrary.strategy.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'shooter') {
                    genresLibrary.shooter.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'casual') {
                    genresLibrary.shooter.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'simulation') {
                    genresLibrary.simulation.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'puzzle') {
                    genresLibrary.puzzle.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'arcade') {
                    genresLibrary.arcade.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'platformer') {
                    genresLibrary.platformer.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'racing') {
                    genresLibrary.racing.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'massively-multiplayer') {
                    genresLibrary.massivelyMultiplayer.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'sports') {
                    genresLibrary.sports.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'fighting') {
                    genresLibrary.fighting.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'family') {
                    genresLibrary.family.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'board-games') {
                    genresLibrary.boardGames.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'educational') {
                    genresLibrary.educational.push(user.library[librarys[i]][j].genres[k].slug);
                }
                if(user.library[librarys[i]][j].genres[k].slug === 'card') {
                    genresLibrary.card.push(user.library[librarys[i]][j].genres[k].slug);
                }
            }
        }
    }
    return genresLibrary;
};