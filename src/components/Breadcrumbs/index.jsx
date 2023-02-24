import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as Styled from "./styled";

const Breadcrumbs = () => {
  const [typeName, setTypeName] = useState("");
  const location = useLocation();
  const { type } = useParams();
  useEffect(() => {
    setTypeName(type);
  }, [type]);

  console.log("aqui", useParams());
  return (
    <>
      {location.pathname !== "/" && (
        <Styled.Wrapper>
          <Styled.BreadcrumbLink
            to="/"
            className={
              location.pathname === "/"
                ? "breadcrumb-active"
                : "breadcrumb-not-active"
            }
          >
            Home
          </Styled.BreadcrumbLink>
          {typeName && <Styled.Span>{typeName}</Styled.Span>}
        </Styled.Wrapper>
      )}
    </>
  );
};

export default Breadcrumbs;
