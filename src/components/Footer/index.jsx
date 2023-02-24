import * as Styled from "./styled";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import site from "../../assets/link.svg";

const Footer = () => {
  return (
    <Styled.FooterDiv>
      <Styled.IconsWrapper>
        <Styled.IconsList>
          <Styled.HeaderSocial
            href="https://github.com/HelenaAMartins"
            target={"_blank"}
            title="Github"
          >
            <Styled.HeaderSocialIcon src={github} alt="Github" />
          </Styled.HeaderSocial>
        </Styled.IconsList>

        <Styled.IconsList>
          <Styled.HeaderSocial
            href="https://www.linkedin.com/in/mhelena-martins/"
            target={"_blank"}
            title="Linkedin"
          >
            <Styled.HeaderSocialIcon src={linkedin} alt="Linkedin" />
          </Styled.HeaderSocial>
        </Styled.IconsList>
        <Styled.IconsList>
          <Styled.HeaderSocial
            href="https://mhelena.com.br"
            target={"_blank"}
            title="Site"
          >
            <Styled.HeaderSocialIcon src={site} alt="Site" />
          </Styled.HeaderSocial>
        </Styled.IconsList>
      </Styled.IconsWrapper>
    </Styled.FooterDiv>
  );
};

export default Footer;
