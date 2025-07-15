import AuthApiClient from "../../Config/AuthConfig";

const LoginRequest = async (email, password) => {
  const response = await AuthApiClient.post("/login", {
    email: email,
    password: password,
  });
  return response.data;
};

export default LoginRequest;
