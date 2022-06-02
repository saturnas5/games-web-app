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