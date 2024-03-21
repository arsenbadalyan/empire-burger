import React from "react";
import { colors } from "../../styles/Global";
import {
  Container,
  Navigation,
  LogoContainer,
  Nav,
  SocialMedia,
  VerticalLine,
} from "./Styles";

import SocialIcons from "../Shared/SocialIcons/SocialIcons";
import Logo from "../Shared/Svg/Logo";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Navigation>
        <LogoContainer>
          <Logo
            color={colors.brown}
            style={{ marginRight: "0.75rem", height: "3rem" }}
          />
          <h1>
            <span>Empire </span>burger
          </h1>
        </LogoContainer>

        <Nav>
        </Nav>

        <SocialMedia>
          <SocialIcons color="#FFF" />
          <VerticalLine />
          <button>
            <BsWhatsapp
              size={"2.25rem"}
              style={{
                marginRight: ".9rem",
                padding: 0,
              }}
            />
            <span>Contact</span>
          </button>
        </SocialMedia>
      </Navigation>
    </Container>
  );
};

export default Header;
