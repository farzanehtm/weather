// 'use strict';

export const weekDayNames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursaday",
    "Friday",
    "Saturday",
];

export const monthNames=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];



// /**
//  * 
//  * @param {number} dataUnix Unix date in seconds
//  * @param {number} timezone Timezone shift from UTC in seconds
//  * @returns {string} Date string. formate: "Sunday 10, Jun"
//  */

export const getDate= function (dateUnix, timezone){
    const date = new Date((dateUnix + timezone) * 1000);
    const weekkDayName= weekDayNames[date.getUTCDay()];
    const monthName= monthNames[date.getUTCMonth()];

    return `${weekkDayName} ${date.getUTCDate()} , ${monthName}`
}


// /**
//  * 
//  * @param {number} timeUnix Unix date  in seconds
//  * @param {number} timezon Timezone shift from UTC in seconds
//  * @returns {string} Time string.format: "HH:MM AM/PM"
//  */

export const getTime=function(timeUnix, timezon){
    const date= new Date((timeUnix + timezon) * 1000);
    const hours= date.getUTCHours();
    const minutes= date.getUTCMinutes();
    const period= hours >= 12 ? "PM":"AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


// /**
//  * 
//  * @param {number} timeUnix Unix date  in seconds
//  * @param {number} timezon Timezone shift from UTC in seconds
//  * @returns {string} Time string.format: "HH AM/PM"
//  */
export const getHours=function(timeUnix, timezon){
    const date= new Date((timeUnix + timezon) * 1000);
    const hours= date.getUTCHours();
    const period= hours >= 12 ? "PM":"AM";

    return `${hours % 12 || 12}:${period}`;
}

// /**
//  * 
//  * @param {number} mps metter per seconds
//  * @returns {number} kilometer per hours
//  */
export const mps_to_kmh= mps =>{
    const mph=mps* 3600;
    return mph/1000;
}


export const aqiText={
    1:{
        level:"Good",
        message:"Air quality is considered satisfactory, and air pollutin poses little or no risk"
    },
    2:{
        level:"Fair",
        message:"Air quality is acceptable; however , for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3:{
        level:"Moderate",
        message:"Members of sensitive group may experience health effects. The general public is not likely to be affected."
    },
    4:{
        level:"Poor",
        message:"Everyone may begin to experience health effects; mebers of sensitive group may experience more serios health effects."
    },
    4:{
        level:"Very Poor",
        message:"Health warnings of emergency conditions. The entire population is more likely to be affected"
    },
}