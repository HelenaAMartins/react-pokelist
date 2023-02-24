import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const BreadcrumbLink = styled(Link)`
  padding: 8px;
  color: ${colors.buttonDisabled};

  &:hover {
    color: ${colors.white};
  }
`;

export const Span = styled.span`
  padding: 8px;
  color: ${colors.white};
`;
