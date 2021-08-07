import React from "react";
import PropTypes from "prop-types";
import { PhoneBookCardsTitle } from "./PhoneBookCardsTitles.styles";

function PhoneBookCardsTitles({ title }) {
  return <PhoneBookCardsTitle>{title}</PhoneBookCardsTitle>;
}

export default PhoneBookCardsTitles;

PhoneBookCardsTitles.propTypes = {
  title: PropTypes.node.isRequired,
};
