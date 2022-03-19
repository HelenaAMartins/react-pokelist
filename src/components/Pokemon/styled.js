import styled, { keyframes } from "styled-components";

import { colors } from "../../styles/variables";
import bg from "../../assets/background.png";

const CardAnimation = keyframes`
0%{transform:translateY(20px);opacity:0}
100%{transform:translateY(0);opacity:1}
`;

export const Card = styled.div`
  align-items: center;
  animation: ${CardAnimation} .5s cubic-bezier(.25,.46,.45,.94) both;
  background: ${colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s;
  min-height: 242px;
`;



export const CardNumber = styled.span`
  background: ${colors.white};
  border-radius: 0 0 5px 0;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
`;

export const CardHeader = styled.div`
  background: url(${bg});
  height: 108px;
  position: relative;
  width: 100%;
`;

export const CardFigure = styled.figure`
  align-items: center;
  background: ${colors.bgAvatar};
  border-radius: 50%;
  display: flex;
  height: 110px;
  justify-content: center;
  margin: -60px 0 0;
  width: 110px;
  z-index: 3;
  position: relative;
  overflow: hidden;
  border: 3px solid ${colors.text};

  &::before,
  &::after {
    content: "";
    width: 100%;
    position: absolute;

  }

  &::after {
    bottom: 43%;
    height: 3px;
    background: ${colors.text};
    z-index: 1;
  }

  &::before {
    background: white;
    height: 45%;
    bottom: 0;
  }
`;

export const CardImage = styled.img`
  position: relative;
  z-index: 3;
`;

export const CardTitle = styled.h3`
  color: ${colors.text};
  padding: 4px 0;
  text-transform: uppercase;
`;

const PillAnimation = keyframes`
0%{transform:translateY(12px);opacity:0}
100%{transform:translateY(0);opacity:1}
`;

export const CardPillWrapper = styled.div`
  align-items: center;
  animation: ${PillAnimation} .5s cubic-bezier(.25,.46,.45,.94) 1.2s both;
  display: flex;
  justify-content: center;
  min-width: 130px;
  padding: 16px 0;
`;

export const CardPill = styled.span`
  background: ${({ type }) => colors.pills[type]};
  border-radius: 5px;
  color: ${colors.white};
  font-size: 12px;
  margin: 0 4px;
  padding: 4px 16px;
  text-transform: uppercase;
`;
