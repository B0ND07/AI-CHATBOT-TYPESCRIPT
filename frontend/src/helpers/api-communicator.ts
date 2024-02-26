import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/signin", { email, password });
  if (res.status !== 200) {
    throw new Error("uanble to login");
  }
  const data = await res.data;
  return data;
};
export const RegisterUser = async (email: string, password: string,name:string) => {
  const res = await axios.post("/user/signin", { email, password,name });
  if (res.status !== 200) {
    throw new Error("uanble to login");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chats/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chats/chats");
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const deleteChats = async () => {
  const res = await axios.delete("/chats/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chat");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
