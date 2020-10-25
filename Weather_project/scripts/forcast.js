const key = 'OURiw3V0pI75e39wyxAy4GjV8GDcMnCt'

// const open = '078ae56a7b8e656bc7e7e00e886a44c9'

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    

    const response = await fetch(base+query);
    const data =await response.json();

    return data[0];
};
// getCity Information
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

};
