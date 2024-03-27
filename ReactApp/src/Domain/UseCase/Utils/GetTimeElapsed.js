
/**
 * @param {Date} creationDate
 */
function GetTimeElapsed(creationDate)
{
    const current = new Date();
    if(current.getFullYear() > creationDate.getFullYear()) return (current.getFullYear() - creationDate.getFullYear()) + 'y';
    if((current - creationDate)/(1000*60*60*24*7) >= 1) return Math.floor((current - creationDate)/(1000*60*60*24*7)) + 'w';
    if(current.getDate() > creationDate.getDate()) return (current.getDate() - creationDate.getDate()) + 'd';
    if(current.getHours() > creationDate.getHours()) return (current.getHours() - creationDate.getHours()) + 'h';
    return (current.getMinutes() - creationDate.getMinutes()) + 'm';
}

export default GetTimeElapsed;