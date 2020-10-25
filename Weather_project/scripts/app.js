const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) =>{
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    const{cityDets, weather} = data;


    details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;


    //icon

    const iconsrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);
 
    // updating card
     let timesrc = null;
     if(weather.IsDayTime){
         timesrc = './img/day.svg';
     }else{
         timesrc ='./img/night.svg';
     }
      time.setAttribute('src', timesrc);




if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
};


}

const updateCity = async(city) => {
   const cityDets = await getCity(city);
   const weather = await getWeather(cityDets.Key);


   return {
       cityDets,
       weather
   };
}

cityForm.addEventListener('submit', e =>{
    e.preventDefault();
      
// getting city
    const city = cityForm.city.value.trim();
    cityForm.reset();

//updating UI

    updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error))
});