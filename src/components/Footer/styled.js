import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FooterDiv = styled.footer`
  border-top: 1px solid ${colors.white};
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 5rem;
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
  background: ${colors.darkGrey};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 5px;
`;

export const HeaderSocialIcon = styled.img`
  height: 20px;
  width: 20px;
`;
