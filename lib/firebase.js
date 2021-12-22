import firebase from 'firebase/app'

const config = {
    apiKey: process.env.weather.NEXT_WEATHER_API_KEY,
    authDomain: process.env.weather.NEXT_WEATHER_AUTH_DOMAIN,
    projectId: process.env.weather.NEXT_WEATHER_PROJECT,
    databaseURL: process.env.weather.NEXT_WEATHER_DATABASE_URL,
    storageBucket: process.env.weather.NEXT_STORAGE_BUCKET,
    messagingSenderId: process.env.weather.NEXT_WEATHER_MESSAGING_ID,
    appId: process.env.weather.NEXT_WEATHER_APP_ID,
    measurementId: process.env.weather.NEXT_WEATHER_MEASUREMENT_ID
};

firebase.initializeApp(config)

export default firebase