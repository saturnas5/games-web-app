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

