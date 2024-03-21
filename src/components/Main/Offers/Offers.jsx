import React from "react";
import { Container } from "./Styles";
import BurgersOnOffer from "./BurgersOnOffer/BurgersOnOffer";

const Offers = () => {
	return (
		<Container>
			<h2>SPECIAL OFFERS</h2>
			<p>
				Take advantage of all our offers, keep your eyes open, because we are always changing our menu.
			</p>
			<BurgersOnOffer />
		</Container>
	);
};

export default Offers;
