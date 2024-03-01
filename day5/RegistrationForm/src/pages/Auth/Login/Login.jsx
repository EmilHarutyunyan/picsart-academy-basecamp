import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom/dist";
import { useState } from "react";
import { REGISTER } from "router/route-path";
import { schema_login } from "../authSchema";

// Images
import logo from "assets/images/moviato.png";
import eyeHide from "assets/images/eyeHide.png";
import eyeShow from "assets/images/eyeShow.png";

// Styles
import {
  Wrapper,
  Container,
  ErrorMessage,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  InputRemFor,
} from "../Auth.styled";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_login),
  });

  const submitForm = async (data) => {
    try {
      // Fetch
      console.log("data :", data);
    } catch (error) {
      setError(error);
    } finally {
      reset();
    }
  };
  return (
    <Wrapper>
      <div className="img-wrap">
        <img src={logo} alt="logo" />
      </div>

      <Container>
        <h2>Login</h2>
        {error && (
          <ErrorMessage className="error-login" visible={error}>
            {error}
          </ErrorMessage>
        )}
        <form onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            {errors?.email?.message && (
              <ErrorMessage visible={errors?.email?.message}>
                {errors?.email?.message}
              </ErrorMessage>
            )}
            <InputWrap {...register("email")} placeholder="Enter email" />
          </InputContainer>
          <InputContainer>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputEye>
              <InputWrap
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <EyeWrap
                className="show-reset-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src={eyeShow}
                    className="show-password-eye"
                    alt="show password eye"
                  />
                ) : (
                  <img
                    src={eyeHide}
                    className="hide-password-eye"
                    alt="hide password eye"
                  />
                )}
              </EyeWrap>
            </InputEye>
          </InputContainer>
          <InputRemFor>
            <div>
              <label>Remember</label>
              <input type={"checkbox"} {...register("remember")} />
            </div>
            <Link to="/forgot-password">Forgot Password</Link>
          </InputRemFor>
          <button type="submit">Login</button>
        
            <Link to={REGISTER}  className="register" >
              Create Account
            </Link>
           
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
