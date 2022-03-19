import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ layout }) => (layout === "grid" ? "24px" : "0")};

  @media screen and (min-width: 540px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(2, 1fr)" : "auto"};
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(3, 1fr)" : "auto"};
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(4, 1fr)" : "auto"};
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(5, 1fr)" : "auto"};
  }
`;
export const LayoutWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100px;
`;

export const LayoutButton = styled.button`
  background: ${({ active }) =>
    active ? colors.buttonLayoutActvive : colors.lightGray};
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.5s;
  width: 50%;
`;

export const LayoutImg = styled.img`
  height: 16px;
  width: 16px;
`;
export const Options = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`;

export const LoadMoreButton = styled.button`
  align-items: center;
  background: ${colors.buttonMain};
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 45.75px;
  padding: 16px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.5s;
  width: 200px;

  &:disabled {
    background-color: ${colors.buttonDisabled};
    cursor: initial;

    &:hover {
      background-color: ${colors.buttonDisabled};
    }
  }

  &:hover {
    background: ${colors.buttonHoverMain};
  }

  img {
    width: 55px;
  }
`;
