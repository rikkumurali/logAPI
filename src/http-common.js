// import Axios from "axios";

// //................................................................
// export const http = Axios.create({
//   baseURL: process.REACT_APP_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   // }
// });
// http.interceptors.request.use(async (config) => {
//   let accessToken = localStorage.getItem("accessToken");
//   config.headers["Authorization"] = accessToken;
//   return config;
// });
// //................................................................
// export const instance = Axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: { Accept: "application/json" },
// });
// instance.interceptors.request.use(async (config) => {
//   let accessToken = localStorage.getItem("accessToken");
//   config.headers["Authorization"] = accessToken;
//   return config;
// });
// //................................................................

// http.interceptors.request.use(async (config) => {
//   let accessToken = localStorage.getItem("accessToken");
//   config.headers["authorization"] = accessToken;
//   return config;
// });

// http.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );
// //................................................................
// instance.interceptors.request.use(async (config) => {
//   let accessToken = localStorage.getItem("accessToken");
//   config.headers["authorization"] = accessToken;
//   return config;
// });

// instance.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );
// //.................................................................

