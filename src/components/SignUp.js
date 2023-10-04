import React, { useRef, useState } from "react";
import axios from "axios";
import { checkValidData } from "./CheckValidate";
import { Form, useNavigate } from "react-router-dom";
import { projectId } from "../utilities/constants";

const Signup = () => {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const projectid = projectId;

  let headersList = {
    projectId: projectid,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/signup",
    method: "POST",
    headers: headersList,
  };

  const signup = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response.data.token);
      if (response.status === 201) {
        // console.log(response);

        alert("Successfully Signed Up");

        navigate("/login");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exists");
      } else {
        console.log("error");
      }
    }
  };

  const handleSignUp = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    const usernameValue = username.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const bodyContent = JSON.stringify({
      name: usernameValue,
      email: emailValue,
      password: passwordValue,
      appType: "ecommerce",
    });

    reqOptions.data = bodyContent;
    signup();
  };

  return (
    <div className="content">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-[350px]  bg-red-600 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 flex flex-col "
      >
        <h1 className=" flex justify-center font-bold">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          ref={username}
          className="m-5 p-5 text-black  "
        />
        <input
          type="email"
          placeholder="Email Address"
          ref={email}
          className="m-5 p-5 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="m-5 p-5 text-black"
        />
        <p className="text-black">{error}</p>
        <button
          className="w-[100px] ml-32 lg:ml-32 md:ml-32 p-3 sm:ml-4 bg-white text-red-600 rounded-lg"
          onClick={handleSignUp}
        >
          Sign up
        </button>
        <div className="p-5">
          <span>Already registered?</span>{" "}
          <button onClick={() => navigate("/login")} className="text-black">
            login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
