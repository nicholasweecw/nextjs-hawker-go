"use client";

import { usePathname } from "next/navigation";
import React from "react";
import json from "../../constants/csvjson.json";

const HawkerPage = () => {
  const pathname = usePathname();

  const hawkerName = decodeURIComponent(pathname.slice(15));

  const hawker = json.filter((hawker) => hawker.Name === hawkerName)[0];

  console.log(hawker.ADDRESSSTREETNAME);

  return <div>HawkerPage</div>;
};

export default HawkerPage;
