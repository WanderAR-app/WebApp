import { useState } from "react";
import { ChangeEvent } from "react";
import './RegisterPage.css';

import LogRegContainer from '../Components/Container/LogRegContainer';
import TitleText from '../Components/Text/TitleText';
import PlaceholderText from "../Components/Text/PlaceholderText";
import InputText from "../Components/Input/InputText";
import BlueButton from "../Components/Button/BlueButton";
import BlueButtonText from "../Components/Text/BlueButtonText";
import WhiteButton from "../Components/Button/WhiteButton";
import WhiteButtonText from "../Components/Text/WhiteButtonText";

import logo from '../assets/WanderAR.svg';

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="register-page">
      <div className="background-image background-vector9"></div>
      <div className="background-image background-vector8"></div>
      <div className="background-image background-vector7"></div>

      <div className="content">
        <LogRegContainer>
          <div className="glass-container-register">
            <div className="title-container-register">
              <TitleText>Welcome in</TitleText>
            </div>
            <div className="logo-container-register">
              <img src={logo} alt="Logo de WanderAR" />
            </div>
            <div className="email-register">
              <PlaceholderText>Email</PlaceholderText>
              <InputText
                type="email"
                placeholder="email@exemple.com"
                label="email"
                value={email}
                error={false}
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="password-register">
              <PlaceholderText>Password</PlaceholderText>
              <InputText
                type="password"
                placeholder="password"
                label="password"
                value={password}
                error={false}
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <div className="confirm-password-register">
              <PlaceholderText>Confirm password</PlaceholderText>
              <InputText
                type="password"
                placeholder="confirmPassword"
                label="confirmPassword"
                value={confirmPassword}
                error={false}
                name="confirmPassword"
                onChange={handleOnChange}
              />
            </div>
            <div className="button-row-register">
              <div className="blue-button-register">
                <BlueButton
                  OnClick={() => {
                    window.location.href = '/cgu';
                  }}
                >
                  <BlueButtonText>SIGN UP</BlueButtonText>
                </BlueButton>
              </div>
              <div className="white-button-register">
                <WhiteButton
                  OnClick={() => {
                    window.location.href = '/login';
                  }}
                >
                  <WhiteButtonText>SIGN IN</WhiteButtonText>
                </WhiteButton>
              </div>
            </div>
          </div>
        </LogRegContainer>
      </div>
    </div>
  );
};

export default RegisterPage;