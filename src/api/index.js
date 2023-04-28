import axios from 'axios';

//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getplaceData = async (type, sw, ne) => {
    //console.log("sw: ", sw);
    // console.log("ne: ", ne);

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                //bl_latitude: "11.847676",
                //tr_latitude: "12.838442",
                //bl_longitude: "109.095887",
                //tr_longitude: "109.149359",

            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPD_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;

    } catch (error) {
        console.log(error)
    }

}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
            params: { lon: lng, lat: lat },
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            },

        });
        return data;

    } catch (error) {
        console.log(error)
    }
}