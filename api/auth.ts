import { getSecureStore } from "@/utils/secureStore";
import axiosInstance from "./axios";
import { Profile } from "@/types";

type RequestUser = {
  email: string;
  password: string;
};

const postSignup = async (body: RequestUser): Promise<void> => {
  const { data } = await axiosInstance.post("/auth/signup", body);
  return data;
};

const postLogin = async (body: RequestUser): Promise<{ accessToken: string }> => {
  const { data } = await axiosInstance.post("/auth/signin", body);
  return data;
};

const getMe = async (): Promise<Profile> => {
  const accessToken = await getSecureStore("accessToken");
  const { data } = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export { postSignup, postLogin, getMe };
