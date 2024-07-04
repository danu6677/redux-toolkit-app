// api.ts
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = "https://www.cbc.ca/aggregate_api/";
const apiVersion = "v1";

const api = axios.create({
  baseURL: `${baseURL}${apiVersion}`,
  timeout: 10000,
});

// Define custom headers type
interface CustomHeaders {
  Authorization?: string;
}

export interface ApiResponse<T> {
  data: T;
}

export const request = async <T,>(
  config: AxiosRequestConfig & { headers?: CustomHeaders }
): Promise<ApiResponse<T>> => {
  try {
    const token = null; //'actualr_bearer_token_here';
    if (token !== null) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response: AxiosResponse<T> = await api(config);
    return { data: response.data };
  } catch (error) {
    const axiosError = error as AxiosError; // Cast to AxiosError for access to response and request properties

    if (axiosError.response) {
      // The request was made and the server responded with a status code
      console.error(
        "Server responded with an error:",
        axiosError.response.status,
        axiosError.response.data
      );
    } else if (axiosError.request) {
      // The request was made but no response was received
      console.error("No response received from the server");
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", axiosError.message);
    }
    throw error;
  }
};
