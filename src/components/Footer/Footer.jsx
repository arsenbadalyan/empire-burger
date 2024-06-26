import React, { useState } from "react";
import { Container, Bottom, Nav, HorizontalLine } from "./Styles";
import { colors } from "../../styles/Global";
import { sizes } from "../../utils/constants/sizes";

import SocialIcons from "../Shared/SocialIcons/SocialIcons";
import GoogleMaps from "../Shared/GoogleMaps/GoogleMaps";
import Logo from "../Shared/Svg/Logo";

const Footer = () => {
	const [isMobile, setIsMobile] = useState(null);

	window.addEventListener("resize", () => {
		const size = sizes.mobile_medium.replace("px", "");
		window.screen.width < Number(size) ? setIsMobile(true) : setIsMobile(false);
	});

	return (
		<Container>
			<h2>WHERE IS OUR CASTLE</h2>
			<h3>We will be open to your royalty</h3>
			<GoogleMaps />
			<Bottom>
				<Nav>
					<div>
						<Logo color={colors.red} />
						<h1>
							<span>Empire</span> Burger
						</h1>
					</div>
					{isMobile && <HorizontalLine />}

					<div>
						<ul>
						</ul>
						{isMobile && <HorizontalLine />}
						<SocialIcons color={colors.yellow} />
					</div>
				</Nav>
				<HorizontalLine />
				<h4>
					<span>{new Date().getFullYear()} © EmpireBurger.</span> All rights reserved.
				</h4>
			</Bottom>
		</Container>
	);
};

export default Footer;
