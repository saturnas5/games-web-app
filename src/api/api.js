const base_url = 'https://api.rawg.io/api/games?key=2b570239e89646bd83d19eb76c1f9863';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`
    }
    return month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`
    }
    return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=16`;
const upcoming_games = `&dates=${currentYear},${nextYear}&ordering=-added&page_size=16`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=16`;

export const popularGamesURL = (page) => `${base_url}${popular_games}&page=${page}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const searchGameURL = (game) => `${base_url}&search=${game}`;
export const currentGameURL = (id) => `https://api.rawg.io/api/games/${id}?key=2b570239e89646bd83d19eb76c1f9863`;
export const currentGameScreensURL = (id) => `https://api.rawg.io/api/games/${id}/screenshots?key=2b570239e89646bd83d19eb76c1f9863`;
export const gamesByPlatform = (platformId, page) => `${base_url}&platforms=${platformId}&page_size=16&page=${page}`;