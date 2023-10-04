import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectId } from "../utilities/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { checkValidData } from "./CheckValidate";
import { useDispatch } from "react-redux";
import { login } from "../utilities/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const message = checkValidData(email, password);
    setErrorMessage(message);
    if (message) return;
    let headersList = {
      projectId: projectId,
      "Content-Type": "application/json",
    };
    let reqOptions = {
      url: "https://academics.newtonschool.co/api/v1/user/login",
      method: "POST",
      headers: headersList,
      data: JSON.stringify({
        email: email,
        password: password,
        appType: "ecommerce",
      }),
    };

    try {
      let response = await axios.request(reqOptions);

      const token = response.data.token;

      const targetRoute = sessionStorage.getItem("targetRoute");
      sessionStorage.removeItem("targetRoute");

      localStorage.setItem("jwtToken", token);
      dispatch(login(token));
      console.log(token);
      if (response.status === 200) {
        // console.log(response);
        navigate(targetRoute || "/", { replace: true });
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-[350px] bg-red-600 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 p-7"
      >
        <h1 className="font-bold text-3xl py-4 px-10">signin</h1>
        <input
          className="m-7 p-5 text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="m-7 p-5 text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errorMessage}</p>

        <button
          onClick={handleLogin}
          className="w-full m-1 p-3  bg-white text-red-600 rounded-lg"
        >
          Login
        </button>

        <button onClick={() => navigate("/forgotpassword")}>
          ForgotPassword?
        </button>

        <div className="p-5">
          <span>New user?</span>{" "}
          <button onClick={() => navigate("/signup")} className="text-black">
            Register
          </button>
        </div>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};
export default Login;
