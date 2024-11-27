import { RegisterUser } from "@/types";
import axios, { AxiosResponse } from "axios";
import { User } from "types";

const API_BASE_URL = "http://127.0.0.1:5001/e-buddy-monorepo/us-central1/app";

interface Response {
  status: string;
  message: string;
  data: User | null;
}

export function registerUser(
  data: RegisterUser
): Promise<AxiosResponse<Response>> {
  return axios.post(`${API_BASE_URL}/register-user`, data);
}

export function fetchUserData(): Promise<AxiosResponse<Response>> {
  const token = getAccessToken();
  return axios.get(`${API_BASE_URL}/fetch-user-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateUserData(data: User): Promise<AxiosResponse<Response>> {
  const token = getAccessToken();
  return axios.put(`${API_BASE_URL}/update-user-data`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function getAccessToken() {
  return localStorage.getItem("accessToken");
}
