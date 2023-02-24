import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ layout }) => (layout === "grid" ? "24px" : "0")};

  @media screen and (min-width: 540px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(3, 1fr)" : "auto"};
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(4, 1fr)" : "auto"};
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(5, 1fr)" : "auto"};
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: ${({ layout }) =>
      layout === "grid" ? "repeat(6, 1fr)" : "auto"};
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

export const Options = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
`;

export const DropDownContainer = styled.div`
  position: relative;
`;
export const DropDownHeader = styled.div`
  margin-bottom: 20px;
  border-radius: 4px 4px 0px 0;

  padding: 13px 16px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 12px;
  color: ${colors.white};
  background: ${colors.darkGrey};
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  top: 45px;
  width: 100%;
  z-index: 3;
`;
export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  color: ${colors.white};
  background: ${colors.darkGrey};
  box-sizing: border-box;
  font-size: 12px;

  &:first-child {
    padding: 12px;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin-bottom: 0.8em;
  transition: all 0.5s;

  &:hover {
    color: ${colors.royalBlue};
  }
`;

export const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`;

export const LoadMoreButton = styled.button`
  align-items: center;
  border: 2px solid ${colors.royalBlue};
  background-color: transparent;
  border-radius: 4px;
  color: ${colors.white};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: 600;

  padding: 16px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.5s;
  width: 200px;

  &:disabled {
    cursor: initial;

    &:hover {
      background-color: transparent;
      border: 2px solid ${colors.royalBlue};
    }
  }

  &:hover {
    background-color: ${colors.white};
    color: ${colors.royalBlue};
    border: 2px solid ${colors.white};
  }

  svg {
    fill: ${colors.royalBlue};
  }
`;
