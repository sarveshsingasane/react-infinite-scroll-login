import { Model } from "./Models/Model";

const sessionLogin = (email: string, password: string) => {
  let payload: Model = {
    token: `fake token: generate @${new Date()}`,
    email: email,
    password: password,
  };

  localStorage.setItem("token", JSON.stringify(payload));
  return payload;
};

const sessionLogout = () => {
  localStorage.clear();
};

const isLogin = (): boolean => {
  return localStorage.getItem("token") ? true : false;
};

export { sessionLogin, sessionLogout, isLogin };
