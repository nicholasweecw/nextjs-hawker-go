"use client";

import { useState } from "react";
import { HawkerCentreProps } from "../../../types";
import Image from "next/image";
import Link from "next/link";

const HawkerCard = ({ hawkerCentre }: any) => {
  const today = new Date();

  const cleanDateList = [
    hawkerCentre.q1_cleaningstartdate,
    hawkerCentre.q1_cleaningenddate,
    hawkerCentre.q2_cleaningstartdate,
    hawkerCentre.q2_cleaningenddate,
    hawkerCentre.q3_cleaningstartdate,
    hawkerCentre.q3_cleaningenddate,
    hawkerCentre.q4_cleaningstartdate,
    hawkerCentre.q4_cleaningenddate,
  ];

  cleanDateList.map((date) => {
    if (date === "TBC") {
      cleanDateList[cleanDateList.indexOf(date)] = new Date("1999-01-01");
    } else {
      let dateList = date.split("/");
      dateList[0] = dateList[0].padStart(2, "0");
      dateList[1] = dateList[1].padStart(2, "0");
      let dateStr = dateList.reverse().join("-");
      let dateObj = new Date(dateStr);
      cleanDateList[cleanDateList.indexOf(date)] = dateObj;
    }
  });

  return (
    <Link href={`/hawkerCentres/${hawkerCentre.name}`}>
      <div className="hawker-card group">
        <div className="hawker-card__content">
          <div className="relative mr-3 my-auto w-32 h-24">
            <Image
              src={hawkerCentre.photourl.toString()}
              fill={true}
              sizes="100vw"
              alt="Hawker Centre"
              priority
              className="object-cover"
            />
          </div>

          <div className="hawker-card__content-info">
            <h2 className="hawker-card__content-title">
              {hawkerCentre.name}
              <br />
            </h2>
            <h3 className="hawker-card_content-location">
              Location: {hawkerCentre.address_myenv}
            </h3>
            <h3 className="hawker-card_content-closure">
              {(today.getTime() >= cleanDateList[0].getTime() &&
                today.getTime() <= cleanDateList[1].getTime()) ||
              (today.getTime() >= cleanDateList[2].getTime() &&
                today.getTime() <= cleanDateList[3].getTime()) ||
              (today.getTime() >= cleanDateList[4].getTime() &&
                today.getTime() <= cleanDateList[5].getTime()) ||
              (today.getTime() >= cleanDateList[6].getTime() &&
                today.getTime() <= cleanDateList[7].getTime()) ? (
                <span className="text-red-500 font-semibold">{"Closed"}</span>
              ) : (
                <span className="text-green-400 font-semibold">{"Open"}</span>
              )}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HawkerCard;
