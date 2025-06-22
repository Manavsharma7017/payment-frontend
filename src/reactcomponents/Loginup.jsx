import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, message } from "../atoms/Atoms";
import { useRecoilState } from "recoil";
import { use } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const Loginup = () => {
  const navigate = useNavigate();
  const [mess, setMessage] = useRecoilState(message);
  const [val,setisloging]=useRecoilState(isLoggedIn);
  const [userdata, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!userdata.username) {
      newErrors.username = "Email is required.";
      valid = false;
    } else if (!isValidEmail(userdata.username)) {
      newErrors.username = "Please enter a valid email.";
      valid = false;
    }

    if (!userdata.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (userdata.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const login = async () => {
    if (!validateFields()) return;

    try {
      const res = await axios.post(`${API_BASE_URL}/user/signin`, userdata);

      if (res.data.message === "Incorrect inputs") {
        setMessage("Incorrect credentials. Please try again.");
      } else if (res.data.message === "User created successfully") {
        setMessage("Login successful");
        localStorage.setItem("token", res.data.token);
         localStorage.setItem("userId", res.data.userid);
        setisloging(true);
        navigate("/das");
      }
    } catch (err) {
      console.log(err?.response?.data?.message || err.message);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4 py-6">
      <Card className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200 bg-white text-black">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-indigo-600 text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-sm text-gray-500 mt-2">
            Login to access your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <Input
              name="username"
              placeholder="Enter your email"
              onChange={handleChange}
              value={userdata.username}
              className="mt-1"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={userdata.password}
              className="mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4">
          <Button onClick={login} className="w-full">
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
