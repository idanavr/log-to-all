function _formatDateToTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    let formattedMilliSeconds = '000';
    if (milliseconds >= 10 && milliseconds < 100) {
        formattedMilliSeconds = `0${milliseconds}`;
    } else if (milliseconds < 10) {
        formattedMilliSeconds = `00${milliseconds}`;
    } else {
        formattedMilliSeconds = milliseconds;
    }

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliSeconds}`;
}

function generateMessage(type, log, params) {
    const todayDate = new Date();
    const timeNow = _formatDateToTime(todayDate);
    let message = `[${timeNow}][${type}] - ${log.stack ? log.stack : JSON.stringify(log)}\r\n`;
    if (params)
        message += `\tParameters: ${JSON.stringify(params)} \r\n`;
    return message;
}

module.exports = {
    generateMessage
};