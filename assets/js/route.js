// 'use strict';

import {updateWeather, error404} from "./app.js"

const defaultLocation= "#/weather?lat=35.7219&lon=51.3347" //Tehran

const currentLocation= function(){
    window.navigator.geolocation.getCurrentPosition(res=>{
        const{ latitude, longitude} = res.coords;
        

        updateWeather(`lat=${latitude}` , `lon=${longitude}`)
    }, err=>{
        window.location.hash = defaultLocation;
    });
}


// /**
//  * 
//  * @param {string} query searched query
//  */
const serchedLocation= query => updateWeather(...query.split("&"));
//updateWeather ("lat=51.5073219" , "lon=0.1276474")


const routes = new Map([
    ["/current-location",  currentLocation],
    ["/weather", serchedLocation],
]);

const checkHash= function(){
    const requestURL= window.location.hash.slice(1)

    const[route,qurey] = requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(qurey) : error404()
}

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function(){
    if (!window.location.hash){   
        window.location.hash= "#/current-location";
        console.log(window.location.hash);
    } else{
        checkHash();
    }
})