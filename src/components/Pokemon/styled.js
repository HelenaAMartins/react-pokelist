import styled, { keyframes } from "styled-components";

import { colors } from "../../styles/variables";
import { Link } from "react-router-dom";

const CardAnimation = keyframes`
0%{transform:translateY(20px);opacity:0}
100%{transform:translateY(0);opacity:1}
`;

export const Card = styled.div`
  align-items: center;
  animation: ${CardAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  background: ${colors.darkGrey};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s;
  min-height: 242px;
  padding: 8px 12px;
`;

export const CardNumber = styled.span`
  background: ${colors.background};
  color: ${colors.buttonDisabled};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  position: absolute;
  right: 8px;
  top: 4px;
`;

export const CardHeader = styled.div`
  height: 108px;
  width: 100%;
`;

export const CardFigure = styled.figure`
  align-items: center;
  background-image: ${({ type }) => colors.backgrounds[type]};
  border-radius: 12px;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  z-index: 3;
  position: relative;
  overflow: hidden;
  border: 3px solid ${colors.dark};
`;

export const CardImage = styled.img`
  position: relative;
  z-index: 3;
`;

export const CardTitle = styled.h3`
  color: ${colors.white};
  padding: 4px 0;
  text-transform: uppercase;
  width: 100%;
`;

const PillAnimation = keyframes`
0%{transform:translateY(12px);opacity:0}
100%{transform:translateY(0);opacity:1}
`;

export const CardPillWrapper = styled.div`
  align-items: center;
  animation: ${PillAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s
    both;
  display: flex;
  justify-content: flex-start;
  min-width: 130px;
  width: 100%;
  padding: 16px 0;
`;

export const CardPill = styled(Link)`
  background: ${({ type }) => colors.pills[type]};
  border: 1px solid ${colors.background};
  border-radius: 5px;
  color: ${colors.white};
  text-shadow: 2px 1px 2px ${colors.black};
  font-size: 10px;
  font-weight: bold;
  margin: 0 4px;
  padding: 4px;
  text-transform: uppercase;
`;
