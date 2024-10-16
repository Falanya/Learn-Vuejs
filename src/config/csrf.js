import axios from "@/config/axios.js";

export default {
    getCookie() {
        axios.get('/csrf-cookie')
    }
}