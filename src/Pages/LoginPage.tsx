import { useState } from "react";
import { ChangeEvent } from "react";
import './LoginPage.css';

import LogRegContainer from '../Components/Container/LogRegContainer';
import TitleText from '../Components/Text/TitleText';
import PlaceholderText from "../Components/Text/PlaceholderText";
import InputText from "../Components/Input/InputText";
import BlueButton from "../Components/Button/BlueButton";
import BlueButtonText from "../Components/Text/BlueButtonText";
import WhiteButton from "../Components/Button/WhiteButton";
import WhiteButtonText from "../Components/Text/WhiteButtonText";

import logo from '../assets/WanderAR.svg';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-page">
      <div className="background-image background-vector9"></div>
      <div className="background-image background-vector8"></div>
      <div className="background-image background-vector7"></div>

      <div className="content">
        <LogRegContainer>
          <div className="glass-container-login">
            <div className="title-container-login">
              <TitleText>Welcome in</TitleText>
            </div>
            <div className="logo-container-login">
              <img src={logo} alt="Logo de WanderAR" />
            </div>
            <div className="email-login">
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
            <div className="password-login">
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
            <div className="button-row-login">
              <div className="blue-button-login">
                <BlueButton
                  OnClick={() => {
                    window.location.href = '/cgu';
                  }}
                >
                  <BlueButtonText>SIGN IN</BlueButtonText>
                </BlueButton>
              </div>
              <div className="white-button-login">
                <WhiteButton
                  OnClick={() => {
                    window.location.href = '/register';
                  }}
                >
                  <WhiteButtonText>SIGN UP</WhiteButtonText>
                </WhiteButton>
              </div>
            </div>
          </div>
        </LogRegContainer>
      </div>
    </div>
  );
};

export default LoginPage;