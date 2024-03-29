import axios from "axios"

const BASE_URL = 'https://places.googleapis.com/v1/places:searchNearby'
const API_KEY = "AIzaSyDEAsUnL5QvqXy3cknjZA8IrpgOOKcvxj4"

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': [
            'places.displayName',
            'places.shortFormattedAddress',
            'places.location',
            'places.photos'
        ]
    }
}

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
    NewNearByPlace, API_KEY
}