import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fcfdfd;
  max-width: 515px;
  width: 100%;

  &.register-form {
    max-width: 780px;
  }
  .inputs-wrap {
    display: flex;
    gap: 50px;
    div {
      flex: 1;
    }
  }

  .img-wrap {
    text-align: center;
    img {
      object-fit: cover;
      display: block;
      height: auto;
      margin: 0 auto;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 24px;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const Container = styled.div`
  border-radius: 12px;
  padding: 32px;
  text-align: center;

  button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #fcfdfd;
    padding: 12px 0;
    border: 1px solid #fea459;
    margin-top: 30px;
    max-width: 300px;
  }
  .register {
    display: block;
    text-align: left;
    color: #fcfdfd;
    margin-top: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const InputColumns = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #fcfdfd;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 42px;
  input {
    padding: 8px 40px 8px 20px;
    border: 1px solid #ededed;
    color: #fcfdfd;
  }
  & #rfs-btn {
    color: #ffffff;
    border: 1px solid #fff;
  }
  & #rfs-btn + ul {
    border: 1px solid #ffffff;
    background: #131418;
  }
  & #rfs-btn + ul li:hover {
    border: 1px solid #ffffff;
    background: #3e3e3e87;
  }
`;

export const InputWrap = styled.input`
  outline: ${(props) => (props.error ? "1px solid red" : "1px solid #FCFDFD")};
  border-radius: 8px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 8px 40px 8px 16px;
  min-height: 40px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const InputRemFor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  a {
    color: #fea459;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 120%;
  &.error-login {
    text-align: center;
    position: inherit;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const InputEye = styled.div`
  position: relative;
  cursor: pointer;

  a {
    text-align: right;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: auto;
    margin-top: 4px;
  }
`;

export const EyeWrap = styled.div`
  position: absolute;
  right: 3%;
  top: 20%;
  font-size: 0;
  display: block;
  height: 24px;
`;
