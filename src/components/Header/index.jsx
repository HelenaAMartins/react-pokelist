import * as Styled from "./styled";

import { Container } from "../../styles/shared";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

const Header = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>
          <Link to="/">
            <Styled.HeaderTitle>PokeList</Styled.HeaderTitle>
          </Link>
          <Breadcrumbs />
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Header>
  );
};

export default Header;
