import axios from "axios"

export default function useApi() {
    // TODO Bu fonksiyonu detaylandır.

    axios.defaults.baseURL = 'https://api.adoptez1artisan.com'

    return axios
}