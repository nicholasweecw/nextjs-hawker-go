"use client";

import { usePathname } from "next/navigation";
import React from "react";
import json from "../../constants/csvjson.json";
import { fetchHawkerCentres } from "../../../../utils";

const HawkerPage = async () => {
  // Hawker Centre deets from JSON
  const pathname = usePathname();

  const hawkerName = decodeURIComponent(pathname.slice(15));

  const hawker = json.filter((hawker) => hawker.Name === hawkerName)[0];

  // Hawker Centre Cleaning Dates API
  const response = await fetchHawkerCentres();

  const allHawkerCentres = response.result.records;

  const cleaningHawker = allHawkerCentres.filter(
    (h: any) => h.name === hawkerName
  )[0];

  console.log(cleaningHawker);

  return (
    <>
      <div className="hawker-contain">
        <h1 className="hawker-name">{hawker.Name}</h1>
        <div className="hawker-info-content">
          <div className="hawker-img">
            <img src={hawker.PHOTOURL} alt={hawker.Name} />
          </div>
          <div className="hawker-deets">
            <h2 className="hawker-location">
              <span className="font-bold">{"Location: "}</span>{" "}
              {hawker.ADDRESS_MYENV}
            </h2>
            <h3 className="hawker-closure">
              <span className="font-bold">{"Hours: "}</span>
              <span className="text-red-500 font-semibold">{"Closed"}</span>
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
            <h5 className="hawker-crowd">
              <span className="font-bold">{"Crowd Levels: "}</span>
            </h5>
            <p className="hawker-desc">{hawker.DESCRIPTION_MYENV}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HawkerPage;
