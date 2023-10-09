<template>
  <div class="weather-box">
    <div class="centered-child">
      <div v-if="!weatherData" class="weather-input">
        <h1>Weather Retrieve</h1>
        <input v-model="city" @input="searchCity" placeholder="Enter city"/>
        <button @click="getWeather" style="background-color: green; margin-top: 25px; padding: 10%;">Go</button>
      </div>
    </div>
    <div v-if="weatherData" class="centered-child">
      <div class="weather-result">
        <p>The temperature in {{ weatherData.name }} is {{ weatherData.main.temp }}°F. It's {{ weatherData.weather[0].description }}. {{ funnyMessage }} </p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const config = useRuntimeConfig();
import { ref } from 'vue';
import axios from 'axios';

const apiKey = config.public.api;
const city = ref('');
const weatherData = ref(null);
const error = null;

const getWeather = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        weatherData.value = response.data;
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
};

const funnyMessages = ref([
  'Keep your socks tied.',
  'If you eat some poop, you will die.',
  'The is also a chance of nuclear war.',
  'Craziest weather this town has ever had.',
  'Don\'t forget to bring toothpaste.',
  'Do not forget to eat fruit.',
]);
const funnyMessage = ref('');
const getRandomMessage = () => {
  const index = Math.floor(Math.random() * funnyMessages.value.length);
  funnyMessage.value = funnyMessages.value[index];
};
getRandomMessage();

// TODO a more universal function including validation logic
//
// const tryWeather = async() => {
//   if (!this.cityInput) {
//     this.error = 'Please enter a city name';
//     return;
//   }
//   if (!/^[a-zA-Z\s]+$/.test(this.cityInput)) {
//     this.error = 'City name can only contain letters and spaces';
//     return;
//   }
//   if (this.cityInput.length > 50) {
//     this.error = 'City name is too long';
//     return;
//   }
//   try {
//     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
//       params: {
//         q: this.cityInput,
//         appid: 'e06dc55f9b9b31d73cf02d23310554d2',
//       },
//     });
//     this.weatherData = response.data;
//   } catch (error) {
//     this.error = 'Invalid city name';
//   }
// };

</script>
  
<style scoped>

.weather-box {
  border: 5px solid rgb(14, 98, 33);
  margin-left: 25vw;
  margin-right: 25vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  padding: 30px;
}

.weather-input {
  display: grid;
}

.weather-result {
  display: grid;
}

.centered-child {
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>
  