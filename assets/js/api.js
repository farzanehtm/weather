// 'use strict';

const api_key = 'c4743c14117f2b8f29ef4dcf41c75173';


// /** 
//  * Fetch data from server 
// * @param {string} URL API URL
// * @param {Function} callback callback
// */

/*  fetch data from server*/
export const fetchData = function (URL,callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res=> res.json())
    .then(data =>callback(data));
}



export const url={
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat,lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat,lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    // /**
    //  * 
    //  * @param {string} query search query e.g.:"london" , "New York"
    //  * @returns 
    //  */
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}