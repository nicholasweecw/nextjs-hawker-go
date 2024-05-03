import React from "react";
import { HawkerCentreProps } from "../../../types";

interface HawkerCardProps {
  hawkerCentre: HawkerCentreProps;
}

const HawkerCard = ({ hawkerCentre }: HawkerCardProps) => {
  const {
    _id,
    name_of_centre,
    location_of_centre,
    type_of_centre,
    owner,
    no_of_stalls,
    no_of_cooked_food_stalls,
    no_of_mkt_produce_stalls,
  } = hawkerCentre;

  return <div>{hawkerCentre.name_of_centre}</div>;
};

export default HawkerCard;
