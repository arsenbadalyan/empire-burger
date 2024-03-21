import React from "react";
import {
  Container,
  Advantage,
  AdvantageIcon,
  AdvantageInfo,
  VerticalLine,
} from "./Styles";

import { FaHamburger } from "react-icons/fa";
import { MdHeadsetMic, MdDeliveryDining } from "react-icons/md";

const Advantages = () => {
  return (
    <Container>
      <Advantage>
        <AdvantageIcon>
          <FaHamburger size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>HANDCRAFTED</h2>
          <p>Our recipes are made with great care</p>
        </AdvantageInfo>
      </Advantage>
      <VerticalLine />
      <Advantage>
        <AdvantageIcon>
          <MdHeadsetMic size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>SERVICE</h2>
          <p>Fully customized</p>
        </AdvantageInfo>
      </Advantage>
      <VerticalLine />
      <Advantage>
        <AdvantageIcon>
          <MdDeliveryDining size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>DELIVERY SPEED</h2>
          <p>We deliver in less than 30 minutes</p>
        </AdvantageInfo>
      </Advantage>
    </Container>
  );
};

export default Advantages;
