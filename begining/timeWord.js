const hourStr = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];

const minuteStr = ["o'clock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine','fourty', 'fourty one', 'fourty two', 'fourty three', 'fourty four', 'fourty five', 'fourty six', 'fourty seven', 'fourty eight', 'fourty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'];

function timeWord(time){
    if(time === '00:00'){
        return 'midnight'
    }
    if(time === '12:00'){
        return 'noon'
    }
    const timeSplit = time.split(':');
    const minute = Number(timeSplit[1]);
    let hour = Number(timeSplit[0]);
    let meridiamIndicator
    if(hour - 11 < 1){
        meridiamIndicator = 'am';
    } else {
        meridiamIndicator = 'pm';
        hour = hour - 12
    }
    return `${hourStr[hour]} ${minuteStr[minute]} ${meridiamIndicator}`;
}

module.exports = {timeWord};