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
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const Signup = () => {
  const navigate = useNavigate();
  const [mess, setMessage] = useRecoilState(message);
 const [val,setisloging]=useRecoilState(isLoggedIn);  const [userdata, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const validateFields = () => {
    let valid = true;
    const newErrors = {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
    };

    if (!userdata.username) {
      newErrors.username = "Email is required.";
      valid = false;
    } else if (!isValidEmail(userdata.username)) {
      newErrors.username = "Please enter a valid email.";
      valid = false;
    }

    if (!userdata.firstname) {
      newErrors.firstname = "First name is required.";
      valid = false;
    }

    if (!userdata.lastname) {
      newErrors.lastname = "Last name is required.";
      valid = false;
    }

    if (!userdata.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (userdata.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const signup = async () => {
    if (!validateFields()) return;

    try {
      const res = await axios.post(`${API_BASE_URL}/user/signup`, userdata);

      if (res.data.message === "Incorrect inputs") {
        setMessage("Incorrect inputs.");
      } else if (res.data.message === "user already exist") {
        setMessage("User already exists.");
      } else if (res.data.message === "User created successfully") {
        setMessage("Signup successful!");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userid);
        setisloging(true);
        navigate("/das");
      }
    } catch (e) {
      console.error(e?.response?.data?.message || e.message);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[75vh] px-4 py-6">
      <Card className="w-full max-w-md rounded-2xl border border-gray-200 shadow-xl bg-white text-black">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-indigo-600 text-center">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-gray-500 mt-1">
            Enter your details to get started
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input
              name="username"
              placeholder="Enter your email"
              onChange={handleChange}
              value={userdata.username}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <Input
              name="firstname"
              placeholder="Enter your first name"
              onChange={handleChange}
              value={userdata.firstname}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <Input
              name="lastname"
              placeholder="Enter your last name"
              onChange={handleChange}
              value={userdata.lastname}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Create a password"
              onChange={handleChange}
              value={userdata.password}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-4">
          <Button onClick={signup} className="w-full">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
