const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();


const cities  = ["Kyiv", "Kharkiv","Odesa","Dnipro","Lviv", "Poltava","Александрия", "Ужгород", "Кировоград","Луцк"];


const fillJsonData = async () => {
    let weatherData = {};

    for (const city of cities) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ua&APPID=d397b0865681321de40813508cb7c757&units=metric`);
            const data = await response.json();
            const extractedData = {
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                weather: data.weather,
                wind: data.wind.speed
            };

            weatherData[city] = extractedData;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    return weatherData;
};

fillJsonData().then((result) => {
    const jsonString = JSON.stringify(result, null, 2);
    fs.writeFileSync('weatherData.json', jsonString);
    console.log('Weather data has been written to weatherData.json');
});

app.use(cors());

app.get('/api/weather-elements', async (req, res) => {
    try {
        const data = await fs.promises.readFile('weather-data.json', 'utf-8');
        const weatherElements = JSON.parse(data);
        res.json(weatherElements);
    } catch (error) {
        console.error('Error reading weather data:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
