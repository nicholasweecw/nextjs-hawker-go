"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { fetchHawkerCentres } from "../../../../utils";
import Image from "next/image";

const HawkerPage = async () => {
  // Hawker Centre deets from JSON
  const pathname = usePathname();

  const hawkerName = decodeURIComponent(pathname.slice(15));

  // Hawker Centre Cleaning Dates API
  const response = await fetchHawkerCentres();

  const allHawkerCentres = response.result.records;

  const cleaningHawker = allHawkerCentres.filter((h: any) =>
    h.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(hawkerName.toLowerCase().replace(/\s+/g, ""))
  )[0];

  const today = new Date();

  // const now = new Date("2024-10-08");

  const cleanDateList = [
    cleaningHawker.q1_cleaningstartdate,
    cleaningHawker.q1_cleaningenddate,
    cleaningHawker.q2_cleaningstartdate,
    cleaningHawker.q2_cleaningenddate,
    cleaningHawker.q3_cleaningstartdate,
    cleaningHawker.q3_cleaningenddate,
    cleaningHawker.q4_cleaningstartdate,
    cleaningHawker.q4_cleaningenddate,
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
    <>
      <div className="hawker-contain">
        <h1 className="hawker-name">{cleaningHawker.name}</h1>
        <div className="hawker-info-content">
          <div className="hawker-img">
            <Image
              src={cleaningHawker.photourl.toString()}
              alt={cleaningHawker.name}
              fill={true}
              sizes="100vw"
            />
          </div>
          <div className="hawker-deets">
            <h2 className="hawker-location">
              <span className="font-bold">{"Location: "}</span>{" "}
              {cleaningHawker.address_myenv}
            </h2>
            <h3 className="hawker-closure">
              <span className="font-bold">{"Hours: "}</span>
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
            <h4 className="hawker-cleaning">
              <span className="font-bold">{"Cleaning Dates: "}</span>
              <p>
                Q1: {cleaningHawker.q1_cleaningstartdate}-
                {cleaningHawker.q1_cleaningenddate}
              </p>
              <p>
                Q2: {cleaningHawker.q2_cleaningstartdate}-
                {cleaningHawker.q2_cleaningenddate}
              </p>
              <p>
                Q3: {cleaningHawker.q3_cleaningstartdate}-
                {cleaningHawker.q3_cleaningenddate}
              </p>
              <p>
                Q4: {cleaningHawker.q4_cleaningstartdate}-
                {cleaningHawker.q4_cleaningenddate}
              </p>
            </h4>
            <p className="hawker-desc">
              <span className="font-bold">{"Description: "}</span>
              <p className="leading-tight">
                {cleaningHawker.description_myenv}
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HawkerPage;
