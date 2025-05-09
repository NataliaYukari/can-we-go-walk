const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000

app.use(cors());
app.use(express.json());

app.get('/external-data', async (req, res) => {
    try {
        //const response = await axios.get('https://api.hgbrasil.com/weather?format=json-cors&key=1c4887be');
        const response = await axios.get('https://api.hgbrasil.com/weather?format=json-cors');

        const weather = response.data.results;

        const filteredData = {
            temp: weather.temp,
            city: weather.city,
            date: weather.date,
            time: weather.time,
            description: weather.description,
            humidity: weather.humidity,
            condition_slug: weather.condition_slug
        };

        res.json(filteredData);

    } catch (error) {
        res.status(500).send("Error in accessing external API");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});