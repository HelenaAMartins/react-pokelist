import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";

const RowAnimation = keyframes`
0%{transform:translateX(20px);opacity:0}
100%{transform:translateX(0);opacity:1}
`;

export const Row = styled.div`
  animation: ${RowAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  align-items: center;
  background: ${colors.darkGrey};
  display: grid;
  justify-content: center;
  overflow: hidden;
  padding: 15px 0 20px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid ${colors.buttonDisabled};

  @media screen and (min-width: 768px) {
    grid-template-columns: 130px auto auto;
    justify-content: initial;
    padding: 8px 16px;
    text-align: left;
  }
`;

export const RowInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const RowNumber = styled.span`
  color: ${colors.white};
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
`;

export const RowFigure = styled.figure`
  align-items: center;
  background-image: ${({ type }) => colors.backgrounds[type]};
  display: flex;
  height: 110px;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
`;

export const RowImage = styled.img``;

export const RowTitle = styled.h3`
  color: ${colors.white};
  font-size: 32px;
  padding: 4px 0;
  text-transform: uppercase;
`;

const PillAnimation = keyframes`
0%{transform:translateX(12px);opacity:0}
100%{transform:translateX(0);opacity:1}
`;

export const RowPillWrapper = styled.div`
  align-items: center;
  animation: ${PillAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s
    both;
  display: flex;
  justify-content: center;
  min-width: 130px;

  @media screen and (min-width: 768px) {
    justify-content: end;
  }
`;

export const RowPill = styled(Link)`
  background: ${({ type }) => colors.pills[type]};
  border: 1px solid ${colors.background};
  border-radius: 5px;
  color: ${colors.white};
  text-shadow: 2px 1px 2px ${colors.black};
  font-size: 12px;
  font-weight: bold;
  margin: 0 4px;
  padding: 4px;
  text-transform: uppercase;
`;
