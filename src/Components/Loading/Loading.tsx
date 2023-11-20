import React, { ReactNode } from "react";
import "../style.css";
import styled from "styled-components";
import "./Loading.css";

const Title = styled.h2 `
color: #808488;
font-size: 20px;
font-family: "CenturyGothic";
display: flex;
justify-content: center;
font-weight: bold;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
      50% {
          opacity:0;
      }
  }
`

const Loading = () => {
  return (
        <div className="progress">
            <div className="color"></div>
            <Title>Loading ...</Title>
        </div>
  );
};
export default Loading;