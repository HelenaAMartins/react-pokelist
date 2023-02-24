import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Header = styled.header`
  background-color: ${colors.background};
  border-bottom: 1px solid ${colors.white};
  margin-bottom: 32px;
  width: 100%;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  color: ${colors.white};
  font-size: 45px;
`;
