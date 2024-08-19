"use client";

import { useState } from "react";
import { HawkerCentreProps } from "../../../types";
import Image from "next/image";

interface HawkerCardProps {
  hawkerCentre: HawkerCentreProps;
}

const HawkerCard = ({ hawkerCentre }: HawkerCardProps) => {
  return (
    <div className="hawker-card group">
      <div className="hawker-card__content">
        <div className="mr-3 my-auto object-contain">
          <Image
            src={hawkerCentre.PHOTOURL.toString()}
            width={150}
            height={150}
            alt="Hawker Centre"
            objectFit="cover"
            priority
            className="object-contain"
          />
        </div>

        <div className="hawker-card__content-info">
          <h2 className="hawker-card__content-title">
            {hawkerCentre.Name}
            <br />
          </h2>
          <h3 className="hawker-card_content-location">
            {"Location:"} {hawkerCentre.ADDRESSSTREETNAME}
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
