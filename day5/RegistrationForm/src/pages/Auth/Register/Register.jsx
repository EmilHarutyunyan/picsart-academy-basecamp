import { useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom/dist";
import { HOME } from "router/route-path";
import TokenService from "services/token.service";
import { schema_registration } from "../authSchema";

// Images
import logo from "assets/images/moviato.png";
import eyeShow from "assets/images/eyeShow.png";
import eyeHide from "assets/images/eyeHide.png";

// Styles
import {
  Container,
  ErrorMessage,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  Wrapper,
} from "../Auth.styled";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSelect = useCallback(
    (code) => {
      setSelected(code);
      handleInputChange("country", code);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_registration, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });
  const submitForm = (data) => {
    // Fetch
    try {
      console.log("data registration:", data);
      TokenService.setUser("user", data);
      navigate(HOME);
    } catch (error) {
      setError(error);
    } finally {
      reset();
    }
  };
  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Wrapper className="register-form">
      <div className="img-wrap">
        <img src={logo} alt="logo" />
      </div>

      <Container>
        <h2>Registration</h2>
        {error && (
          <ErrorMessage className="error-login" visible={error}>
            {error}
          </ErrorMessage>
        )}
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="inputs-wrap">
            <div>
              <InputContainer>
                {errors?.email?.message && (
                  <ErrorMessage visible={errors?.email?.message}>
                    {errors?.email?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("email")} placeholder="Email" />
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
              <InputContainer>
                {errors?.confirmPwd?.message && (
                  <ErrorMessage visible={errors?.confirmPwd?.message}>
                    {errors?.confirmPwd?.message}
                  </ErrorMessage>
                )}
                <InputEye>
                  <InputWrap
                    type={showPasswordRepeat ? "text" : "password"}
                    {...register("confirmPwd")}
                    autoComplete="on"
                    placeholder="Repeat new password"
                  />
                  <EyeWrap
                    className="show-reset-password"
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  >
                    {showPasswordRepeat ? (
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
              <InputContainer>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={onSelect}
                  searchable={false}
                />
                {errors?.country?.message && (
                  <ErrorMessage visible={errors?.country?.message}>
                    {errors?.country?.message}
                  </ErrorMessage>
                )}
              </InputContainer>
            </div>

            <div>
              <InputContainer>
                {errors?.firstName?.message && (
                  <ErrorMessage visible={errors?.firstName?.message}>
                    {errors?.firstName?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("firstName")} placeholder="Name" />
              </InputContainer>
              <InputContainer>
                {errors?.lastName?.message && (
                  <ErrorMessage visible={errors?.lastName?.message}>
                    {errors?.lastName?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("lastName")} placeholder="Surname" />
              </InputContainer>
              <InputContainer>
                {errors?.nickName?.message && (
                  <ErrorMessage visible={errors?.nickName?.message}>
                    {errors?.nickName?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("nickName")} placeholder="Nickname" />
              </InputContainer>
              <InputContainer>
                {errors?.age?.message && (
                  <ErrorMessage visible={errors?.age?.message}>
                    {errors?.age?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("age")} placeholder="Age" />
              </InputContainer>
            </div>
          </div>

          <button type="submit">Registration</button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Register;
