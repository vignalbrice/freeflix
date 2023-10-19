import getProductionConfig from "@/environment/production";
import axios, { AxiosError } from "axios";

// Axios instance with an interceptor to handle errors and log requests to the console.
function fetcherFactory({
  responseErrorInterceptor = (error: AxiosError) => Promise.reject(error),
} = {}) {
  const { api } = getProductionConfig();
  const fetcher = axios.create({
    baseURL: api.baseUrl,
  });
  fetcher.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${api.secret}`;
    config.headers.Accept = "application/json";
    console.log(`${config.method?.toUpperCase()} ${config.url}`);
    return config;
  }, responseErrorInterceptor);

  fetcher.interceptors.response.use(
    (response) => {
      if (response?.status !== 200) {
        return Promise.reject(
          new Error(
            `Unexpected error:
          ${response.data}`,
          )
        );
      }
      return response;
    }, responseErrorInterceptor)
  return fetcher;
}

const fetcher = fetcherFactory({
  responseErrorInterceptor: (error) => {
    return Promise.reject(error.name);
  },
});

export default fetcher;
