import axios from "axios";

const BASE_URL = "http://localhost:3001/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTA1NmYwNzRkMGYwYTM5NWQxZjFlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjIzNDMzNCwiZXhwIjoxNzA2ODM5MTM0fQ.Xny9hH6PtoPmNGrWRWl02S5TU4Km8rFDOvMwQjJxi-8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})