import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axiosClient from "./../../services/axios-client";
import AuthContext from "./authContext";
import Router from "next/router";
import React from "react";
import { alertBox } from "../../utils";

function AuthState({ children }) {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const mUser = cookies.get("user");
    if (!mUser) {
      setUser(null);
    } else {
      setUser(mUser);
    }
  }, []);

  const login = async (formData) => {
    try {
      setUser(formData);
      cookies.set("user", JSON.stringify(formData), {
        path: "/",
        maxAge: 60 * 60 * 24,
      });
      alertBox("Login Successful!", "success");
    } catch (e) {
      alertBox();
      console.log(error);
    }
  };

  const register = async (formData) => {
    await axiosClient
      .post("register", formData)
      .then(function (response) {
        const res = response.data;
        setUser(res);
        cookies.set("user", JSON.stringify(res), {
          path: "/",
          maxAge: 60 * 60 * 24,
        });
        alertBox("User Registration Complete!", "success");
      })
      .catch(function (error) {
        console.log(error);
        alertBox();
      });
  };

  const logout = () => {
    cookies.remove("user");
    setUser(null);
    alertBox("Successfully Logged out!", "success");
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
