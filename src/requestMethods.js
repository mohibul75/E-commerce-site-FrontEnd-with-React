import axios from "axios";

const BASE_URL = "https://shopping.buys.ninja/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRjNTk2YWU5ZGFkZjc3M2VhNWI2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzIxNjA3MSwiZXhwIjoxNjQzNDc1MjcxfQ.TtgqcWKohYLTs1rNDTxYATZqe63p4pzP8f6oN0IO07k";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";



export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
