"use client";

import { useState } from "react";
import { HawkerCentreProps } from "../../../types";
import Image from "next/image";
import Link from "next/link";

interface HawkerCardProps {
  hawkerCentre: HawkerCentreProps;
}

const Routes = [{ hawkerPage: "/hawkerCentres/[...hawker]" }];

const HawkerCard = ({ hawkerCentre }: HawkerCardProps) => {
  return (
    <Link href={`/hawkerCentres/${hawkerCentre.Name}`}>
      <div className="hawker-card group">
        <div className="hawker-card__content">
          <div className="mr-3 my-auto h-50 object-contain">
            <Image
              src={hawkerCentre.PHOTOURL.toString()}
              width={150}
              height={100}
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
    </Link>
  );
};

export default HawkerCard;
