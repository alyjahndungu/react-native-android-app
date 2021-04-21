import axios from "axios";

export default axios.create({
    baseURL: "https://607e868602a23c0017e8b79e.mockapi.io/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});