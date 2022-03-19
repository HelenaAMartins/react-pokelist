import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Header = styled.header`
  background-color: ${colors.white};
  height: 120px;
  margin-bottom: 32px;
  width: 100%;
`;
export const HeaderWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 260px auto;
  padding: 20px 0;
`;

export const HeaderLogo = styled.img`
  transform: rotate(-10deg);
`;

export const IconsWrapper = styled.ul`
  display: none;
  
  @media screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: end;
  }
`;

export const IconsList = styled.li`
  margin: 0 8px;
`;

export const HeaderSocial = styled.a`
  align-items: center;
  background: ${colors.social};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 5px;
`;

export const HeaderSocialIcon = styled.img`
  height: 20px;
  width: 20px;
`;
