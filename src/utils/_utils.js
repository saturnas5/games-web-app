import {FaAndroid, FaApple, FaGamepad, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import React from "react";

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