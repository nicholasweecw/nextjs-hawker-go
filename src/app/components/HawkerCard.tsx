"use client";

import { useState } from "react";
import { HawkerCentreProps } from "../../../types";
import Image from "next/image";

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

  return (
    <div className="hawker-card group">
      <div className="hawker-card__content">
        <div className="mr-3 my-auto h-50 object-contain">
          <Image
            src="/eagle.png"
            width={50}
            height={50}
            alt="Hawker Centre"
            objectFit="cover"
            priority
            className="object-contain"
          />
        </div>

        <div className="hawker-card__content-info">
          <h2 className="hawker-card__content-title">
            {hawkerCentre.name_of_centre}
            <br />
          </h2>
          <h3 className="hawker-card_content-location">
            {"Location:"} {hawkerCentre.location_of_centre}
          </h3>
          <h3 className="hawker-card_content-closure">
            {"Hours: "}
            <span className="text-red-500 font-semibold">{"Closed"}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HawkerCard;
